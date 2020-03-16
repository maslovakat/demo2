import { FilterSearchView } from './FilterSearchView.js';

export class FilterSearchController {
    constructor(handleF) {
        this.view = new FilterSearchView(handleF);
    }
}

