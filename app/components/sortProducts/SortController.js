import { SortView } from './SortView.js'

export class SortController {
    constructor({notify}) {
        this.view = new SortView(this.handleSort);
        this.notify = notify;
    }

    handleSort = (e) => {
        this.notify('sort', e.target.text)
    }
}