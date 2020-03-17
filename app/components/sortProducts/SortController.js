import { SortView } from './SortView.js'

export class SortController {
    constructor(handleSort) {
        this.view = new SortView(handleSort);
    }
}