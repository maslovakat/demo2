import { SortView } from './SortView.js'

export class SortController {
    constructor({notify}) {
        this.view = new SortView(this.handleSort, this.handleAll);
        this.notify = notify;
    }

    handleSort = (e) => {
        this.notify('sort', e.target.text);
    }

    handleAll = () => {
        this.notify('all');
    }
}