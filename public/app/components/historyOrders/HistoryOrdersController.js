import { HistoryOrdersView } from './HistoryOrdersView.js';
import { HistoryOrdersModel } from './HistoryOrdersModel.js';

export class HistoryOrdersController {
    constructor({subscribe}) {
        this.view = new HistoryOrdersView(this.showHistory);
        this.model = new HistoryOrdersModel();

        this.subscribe = subscribe;
        //this.subscribe('afterOrder', this.handleMakeHistory);

        //this.model.getOrders();


    }

    handleMakeHistory = () => {
        this.model.makeHistory();
    }

    // showHistory = () => {
    //     this.view.showModal(this.model.getLocalHistory());
    // }


    showHistory = () => {
        // this.model.getOrders();
        // const li = this.model.getHistory();
        // console.log('li = ', li);
        this.view.showModal(this.model.getOrders());
    }
}
