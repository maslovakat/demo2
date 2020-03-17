import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor(handleF, handleS, handleGetList) {
        this.view = new FilterSearchView(handleF, this.handleSearch, handleGetList);
        this.handleSearchBreed = handleS;
    }

    handleSearch = () => {
        this.handleSearchBreed(this.view.getSearchValue())
    }
}

