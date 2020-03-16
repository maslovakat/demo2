import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor(handleF, handleS) {
        this.view = new FilterSearchView(handleF, this.handleSearch);
        this.handleSearchBreed = handleS;
    }

    handleSearch = () => {
        this.handleSearchBreed(this.view.getSearchValue())
    }
}

