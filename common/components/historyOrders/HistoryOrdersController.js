import { HistoryOrdersView } from './HistoryOrdersView.js';
import { HistoryOrdersModel } from './HistoryOrdersModel.js';

export class HistoryOrdersController {
    constructor({subscribe}) {
        this.view = new HistoryOrdersView(this.showHistory);
        this.model = new HistoryOrdersModel();

        this.subscribe = subscribe;

        this.subscribe('afterOrder', this.handleMakeHistory);
    }

    handleMakeHistory = () => {
        this.model.makeHistory();
    }

    showHistory = () => {
        this.view.showModal(this.model.getLocalHistory());
    }
}