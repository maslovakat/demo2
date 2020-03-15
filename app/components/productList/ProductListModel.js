
export class ProductListModel {
    
    constructor(cback) {
        this.handleLoad = cback;
        this.link = "app/data/data.json";
    }
    
    getProductList() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.handleLoad(JSON.parse(ajax.responseText));
        });
        ajax.open('GET', this.link);
        ajax.send();
    }
    
    // getProductList() {
    //     let data;
    //     const ajax = new XMLHttpRequest();
    //     ajax.addEventListener("load", function (event) {
    //         data =  JSON.parse(ajax.responseText);
    //     });
    //     ajax.open('GET', this.link, false);
    //     ajax.send();
    //     return data;
    // }
}