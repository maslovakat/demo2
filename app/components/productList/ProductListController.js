import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {

    constructor() {
        this.view = new ProductListView();
        this.model = new ProductListModel(this.handleLoadList.bind(this));
        this.model.getProductList();
    }
   
    handleLoadList(arr) {
        this.view.renderList(arr);
    }

    handleFilter(e){
        const filteredList = this.model.filterBySpecies(e);
        this.view.renderList(filteredList);
    }
}