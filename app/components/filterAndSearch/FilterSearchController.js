import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor(handleF, handleS, handleGetList, handleSort) {
        this.view = new FilterSearchView(handleF, this.handleSearch, handleGetList, handleSort);
        this.handleSearchBreed = handleS;
    }

    handleSearch = () => {
        this.handleSearchBreed(this.view.getSearchValue())
    }

}

