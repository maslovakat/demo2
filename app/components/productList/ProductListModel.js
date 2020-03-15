export class ProductListModel {
    link = "../../app/data/data.json";
    constructor(cback) {
        this.handleLoad = cback;
    }

    getProductList() {
        let data;
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", function (event) {
            data =  JSON.parse(ajax.responseText);
        });
        ajax.open('GET', this.link, false);
        ajax.send();
        return data;
    }
}