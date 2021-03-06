import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor({notify}) {
        this.view = new FilterSearchView(this.handleSearch, this.handleFilter, this.handleAll);
        this.notify = notify;
    }

    handleSearch = () => {
        this.notify('search', this.view.searchValue);
    }

    handleFilter = (e) => {
        this.notify('filter', e.target.id);
    }

    handleAll = () => {
        this.notify('all', );
    }

}

