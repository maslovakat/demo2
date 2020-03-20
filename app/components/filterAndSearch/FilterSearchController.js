import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor({notify, unsubscribe}) {
        this.view = new FilterSearchView(this.handleSearch, this.handleFilter, this.handleAll);
        this.notify = notify;
        this.unsubscribe = unsubscribe;
    }

    handleSearch = () => {
        this.notify('search', this.view.searchValue);
        this.unsubscribe('search', this.handleSearch);
    }

    handleFilter = (e) => {
        this.notify('filter', e.target.id)
        this.unsubscribe('filter', this.handleFilter);
    }

    handleAll = () => {
        this.notify('all');
    }

}

