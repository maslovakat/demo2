import { HistoryOrdersView } from './HistoryOrdersView.js';
import { HistoryOrdersModel } from './HistoryOrdersModel.js';

export class HistoryOrdersController {
    constructor({subscribe}) {
        this.view = new HistoryOrdersView(this.showHistory);
        this.model = new HistoryOrdersModel();

        this.subscribe = subscribe;

        this.subscribe('makeOrder', this.handleGetData);
        this.subscribe('afterOrder', this.handleMakeHistory);
        //this.subscribe('show-history', this.showHistory);
    }

    // get data from MakeOrder
    handleGetData = (data) => {
        this.model.getData(data);
    }

    handleMakeHistory = () => {
        this.model.makeHistory();
    }

    showHistory = () => {
        //const list = this.model.getLocalHistory();
        this.view.showModal(this.model.getLocalHistory());
    }
}