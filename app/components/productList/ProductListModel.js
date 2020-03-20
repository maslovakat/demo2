export class ProductListModel {
    productList;
    filteredList;
    otherAnimals;
    paginationCount = 6;
    paginationPage = 1;
    
    constructor(cback, handleLoadNavList) {
        this.handleLoad = cback;
        this.handleLoadNavList = handleLoadNavList;
        this.link = "app/data/data.json";
    }
    
    renderAll() {
        return this.productList.map(el=>el);
    }

    getProductList() {
        const ajax = new XMLHttpRequest();

        ajax.addEventListener("load", () => {
            this.productList = JSON.parse(ajax.responseText);
            this.filteredList = this.productList;
            this.productList.forEach(el => {
                el.age = this.getAge(el)
            });
            this.handleLoad(this.getPaginationData());
            this.getSpeciesForNavigation();
        });
        ajax.open('GET', this.link);
        ajax.send();
    }
    
    getPaginationData(where = 'nowhere') {
        switch(where) {
            case 'next': {
                this.paginationPage = this.filteredList.length / this.paginationCount > this.paginationPage? this.paginationPage + 1: 1;
                break;
            }
            case 'prev': {
                this.paginationPage = this.paginationPage == 1? Math.ceil(this.filteredList.length / this.paginationCount): this.paginationPage - 1;
                break;
            }
            default: {
                this.paginationPage = 1;
            }
        }

        const from = (this.paginationPage - 1) * this.paginationCount;
        const to = this.paginationPage * this.paginationCount;

        return this.filteredList.slice(from, to);
    }

    // getPageNumber() {
    //     return this.paginationPage;
    // }

    getSpeciesForNavigation() {
        let allSpecies = {};
        this.productList.forEach(e => {
            if(allSpecies[e.species]) {
                allSpecies[e.species] += 1;
            }else{
                allSpecies[e.species] = 1;
            }
        })
        this.handleLoadNavList(allSpecies);
    }

    filterAndSearch(id, str, isFilter) {
        this.paginationPage = 1;

        if (isFilter) {
            if(id === 'other') {
                this.filteredList = this.productList.filter((el) => {
                    let filteredItem;
                    this.otherAnimals.forEach((e) => e === el.species ? filteredItem = el.species : null);
                    return filteredItem;
                });
            }else if (id === 'petShop') {
                this.filteredList = this.productList;
            }else{
                this.filteredList = this.productList.filter((el) => el.species === id);
            }
        }else{
            let searchedList = this.filteredList;
            const regSearch = new RegExp(str, 'i');
            searchedList = searchedList.filter(({breed}) => regSearch.test(breed));
            //this.filteredList = searchedList;
            
            //return this.getPaginationData();
            return searchedList;
        }

        return this.getPaginationData();
    }

    sortedBy(str) {
        this.paginationPage = 1;
        const sortedBy = str;

        switch (sortedBy) {
            case 'price low':
                this.filteredList.sort((a, b) => a.price - b.price);
                break;
            case 'price high':
                this.filteredList.sort((a, b) => b.price - a.price);
                break;
            case 'age low':
                this.filteredList.sort((a, b) => b.birth_date - a.birth_date);
                break;
            case 'age high':
                this.filteredList.sort((a, b) => a.birth_date - b.birth_date);
                break;
            default: this.filteredList.sort((a, b) => a.price - b.price);
        }

        return this.getPaginationData();
    }

    getAge(prod) {
        let diff = Date.now() - prod.birth_date;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let yearsAge = Math.floor(days / 365);
        let monthsAge = Math.floor((days % 365) / 30);
        let daysAge = Math.floor((days % 365) - monthsAge * 30);

        return `${yearsAge < 1? '': yearsAge + "years "}${monthsAge < 1? '': monthsAge + "months "}${daysAge < 1 ? '': daysAge + "days "} `;
    }
}