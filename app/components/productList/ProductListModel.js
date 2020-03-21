export class ProductListModel {
    productList;
    filteredList;
    otherAnimals;
    
    constructor(handleLoad, handleLoadNavList, handleAddToCartBtn, handleCardList) {
        this.handleLoad = handleLoad;
        this.handleLoadNavList = handleLoadNavList;
        this.handleAddToCartBtn = handleAddToCartBtn;
        this.handleCardList = handleCardList;
        this.link = "app/data/data.json";
    }
    
    getProductList() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.productList = JSON.parse(ajax.responseText);
            this.filteredList = this.productList;
            this.productList.forEach(el => {
                el.age = this.getAge(el)
            });
            this.handleLoad(this.productList);
            this.handleAddToCartBtn();
            this.handleCardList();
            this.getSpeciesForNavigation();
        });
        ajax.open('GET', this.link);
        ajax.send();
    }

    getCartList() {
        return this.productList;
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

    filterAndSearch(id, str, isFilter) {
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
            return searchedList;
        }
        return this.filteredList;
    }

    sortedBy(str) {
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
        return this.filteredList;
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