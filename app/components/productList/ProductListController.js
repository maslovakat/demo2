import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {

   productList;

    constructor() {
        this.view = new ProductListView();
        this.model = new ProductListModel(this.handleLoadList.bind(this));
        this.model.getProductList();
    }
   
    handleLoadList(arr) {
        this.productList = arr;
        this.view.renderList(this.productList);
    }

    filterProducts(species){
        let filteredList = this.productList.filter((el) => {
            return el.species === species;
        })
        this.view.renderList(filteredList);
    }
    
    // constructor() {
    //     this.view = new ProductListView();
    //     this.model = new ProductListModel();
    //     this.handleLoadMessages();
    // }
    // handleLoadMessages() {
    //     this.data = this.model.getProductList();
    //     this.view.renderMessage(this.data);
    // }
}