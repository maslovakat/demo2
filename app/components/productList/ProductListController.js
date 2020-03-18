import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {
    
    constructor({subscribe}) {
        this.view = new ProductListView();
        this.model = new ProductListModel(this.handleLoadList.bind(this));
        this.model.getProductList();

        this.subscribe = subscribe;
        this.subscribe('search', this.handleSearch);
        this.subscribe('filter', this.handleFilter);
        this.subscribe('sort', this.handleSort);
    }
   
    handleLoadList(arr) {
        this.view.renderList(arr);
    }

    handleFilter = (e) => {
        const filteredList = this.model.filterAndSearch(e, null);
        this.view.renderList(filteredList);
    }

    handleSearch = (str) => {
        const searchList = this.model.filterAndSearch(null, str);
        this.view.renderList(searchList);
    }

    handleSort = (e) => {
        const sortedList = this.model.sortedBy(e);
        this.view.renderList(sortedList);
    }
}