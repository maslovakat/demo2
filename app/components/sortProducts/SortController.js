import { SortView } from './SortView.js'

export class SortController {
    constructor({notify, unsubscribe}) {
        this.view = new SortView(this.handleSort);
        this.notify = notify;
        this.unsubscribe = unsubscribe;
    }

    handleSort = (e) => {
        this.notify('sort', e.target.text);
        this.unsubscribe('sort', this.handleSort);
    }
}