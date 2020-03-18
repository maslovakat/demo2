
export class ProductListModel {
   productList;
   filteredList;

    constructor(cback) {
        this.handleLoad = cback;
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
            this.filteredList = this.filteredList.filter(({breed})=>regSearch.test(breed));
        }

        return this.filteredList;
    }

    sortedBy(e) {
        const sortedBy = e.target.text;
        switch (sortedBy) {
            case 'price low': this.filteredList.sort((a,b) => a.price - b.price); break;
            case 'price high': this.filteredList.sort((a,b) => b.price - a.price); break;
            case 'age low': this.filteredList.sort((a,b) => b.birth_date - a.birth_date); break;
            case 'age high': this.filteredList.sort((a,b) => a.birth_date - b.birth_date); break;
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