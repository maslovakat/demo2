export class ProductListModel {
    productList;
    filteredList;
    otherAnimals;
    lastFilter; // membered last filter configuration
    lastSort;  // membered last sort configuration
    lastSearch; // membered last search configuration
    paginationCount = 6;
    paginationPage = 1;
    
    constructor(cback, handleLoadNavList, handleCardList, handlePages) {
        this.handleLoad = cback;
        this.handleLoadNavList = handleLoadNavList;
        this.handleCardList = handleCardList;
        this.handlePages = handlePages;
        this.link = "http://127.0.0.1:4000/products";
    }

    renderAll() {
        this.lastFilter = "";
        this.lastSearch = "";
        this.lastSort = "";
        this.filteredList = this.productList;
        return this.getPaginationData();
    }

    getProductList() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.productList = JSON.parse(ajax.responseText).filter(el => el.inStock === true); // продукты которые в наличии
            this.filteredList = this.productList;
            this.productList.forEach(el => {
                el.age = this.getAge(el)
            });
            this.handleLoad(this.getPaginationData());
            this.handleCardList();
            this.getSpeciesForNavigation();
        });

        ajax.open('GET', this.link);
        ajax.send();
    }

    getCardList = () => {
        return this.productList;
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
        this.currentPage = Math.ceil(from/this.paginationCount) + 1;
        this.maxPage = Math.ceil(this.filteredList.length/this.paginationCount);
        this.handlePages(this.currentPage, this.maxPage);

        return this.filteredList.slice(from, to);
    }

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

    filtered () {
        if(!this.lastFilter) return;
        if(this.lastFilter === 'other') {
            this.filteredList = this.productList.filter((el) => {
                return this.otherAnimals.find((e) => e === el.species);
            });
        } else {
            this.filteredList = this.filteredList.filter((el) => el.species === this.lastFilter);
        }
    }

    searched () {
        if (this.lastSearch && this.lastSearch.trim() !== "") {
            const regSearch = new RegExp(this.lastSearch, 'i');
            this.filteredList = this.filteredList.filter(({breed}) => regSearch.test(breed));
        }
    }

    sortedBy() {
        const sortedBy = this.lastSort ? this.lastSort : 'default';

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
    }

    searchAndFiltered(){
        this.filteredList = this.productList;
        this.filtered();
        this.searched();
        this.sortedBy();
        return this.getPaginationData();
    }

    getCard(id = 1) {
        return this.filteredList.find(card => card.id == id);
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