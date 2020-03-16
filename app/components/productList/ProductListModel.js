
export class ProductListModel {
   productList;
    
    constructor(cback) {
        this.handleLoad = cback;
        this.link = "app/data/data.json";
    }
    
    getProductList() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.productList = JSON.parse(ajax.responseText)
            this.handleLoad(this.productList);
        });
        ajax.open('GET', this.link);
        ajax.send();
    }

    filterBySpecies(e) {
        const selectedSpecies = e.toElement.id;
        let filteredList = this.productList.filter((el) => el.species === selectedSpecies)
        return filteredList;
    }
}