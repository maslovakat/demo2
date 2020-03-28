import { PaginationView } from "./PaginationView.js";

export class PaginationController{
    constructor({notify}){
        this.view = new PaginationView(this.handlePagination);
        this.notify = notify;
    }

    handlePagination = (e) => {
        this.notify('pagination', e.target.dataset.id);
    }

}