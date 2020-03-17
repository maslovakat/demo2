import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {
    
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

    handleFilter(e) {
        const filteredList = this.model.filterBySpecies(e);
        this.view.renderList(filteredList);
    }

    // get whole list after clicking on brand "petShop"
    handleGetList() {
        this.view.renderList(this.model.productList);
    }

    handleSearch(str) {
        const searchList = this.model.searchByBreed(str);
        this.view.renderList(searchList);
    }
}