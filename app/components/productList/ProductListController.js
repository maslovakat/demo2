import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {

   //productList;

    constructor() {
        this.view = new ProductListView();
        this.model = new ProductListModel(this.handleLoadList.bind(this));
        this.model.getProductList();
    }
   
    handleLoadList(arr) {
        arr.forEach(el => {
            el.age = this.model.getDateOfBirth(el)
        });
        this.view.renderList(arr);
    }

    sort(species){
        let filteredList = this.productList.filter((el) => {
            return el.species === species;
        })
        this.view.renderList(filteredList);
    }
}