
export class ProductListModel {
   productList;
   filteredList = this.productList;

    constructor(cback) {
        this.handleLoad = cback;
        this.link = "app/data/data.json";
    }
    
    getProductList() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.productList = JSON.parse(ajax.responseText);
            this.handleLoad(this.productList);
        });
        ajax.open('GET', this.link);
        ajax.send();
    }

    filterAndSearch(e, str) {

        if(e === 'all') {
            this.filteredList = this.productList;
        }else if(e) {
            const selectedSpecies = e.toElement.id;
            this.filteredList = this.productList.filter((el) => el.species === selectedSpecies);
        }

        if(str) {
            const regSearch = new RegExp(str, 'i');
            return this.filteredList.filter(({breed})=>regSearch.test(breed));
        }

        return this.filteredList;
    }

    sortedBy(e) {
        const sortedBy = e.target.text;
        let sortedList;
        if(sortedBy === 'price low') {
            sortedList = this.productList.sort((a,b) => a.price - b.price);
        }else if((sortedBy === 'price high')){
            sortedList = this.productList.sort((a,b) => b.price - a.price);
        }
        return sortedList;
    }

    getDateOfBirth(prod) {
        let diff = Date.now() - prod.birth_date;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let yearsAge = Math.floor(days / 365);
        let monthsAge = Math.floor((days % 365) / 30);
        let daysAge = Math.floor((days % 365) - monthsAge * 30);

        return `${yearsAge < 1? '': yearsAge + "years "}${monthsAge < 1? '': monthsAge + "months "}${daysAge < 1 ? '': daysAge + "days "} `;
    }
}