import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor({notify}) {
        this.view = new FilterSearchView(this.handleSearch, this.handleFilter);
        this.notify = notify;
    }

    handleSearch = () => {
        this.notify('search', this.view.searchValue)
    }

    handleFilter = (e) => {
        this.notify('filter', e)
    }

}

