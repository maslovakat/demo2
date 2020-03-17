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
        const filteredList = this.model.filterAndSearch(e, null);
        this.view.renderList(filteredList);
    }

    // get whole list after clicking on brand "petShop"
    handleGetList() {
        const wholeList = this.model.filterAndSearch('all', null);
        this.view.renderList(wholeList);
    }

    handleSearch(str) {
        const searchList = this.model.filterAndSearch(null, str);
        this.view.renderList(searchList);
    }

    handleSort(e) {
        const sortedList = this.model.sortedBy(e);
        this.view.renderList(sortedList);
    }
}