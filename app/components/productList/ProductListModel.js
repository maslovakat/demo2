
export class ProductListModel {
   productList;
    
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

    filterBySpecies(e) {
        const selectedSpecies = e.toElement.id;
        let filteredList = this.productList.filter((el) => el.species === selectedSpecies);
        return filteredList;
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