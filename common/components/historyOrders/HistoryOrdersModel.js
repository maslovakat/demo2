export class HistoryOrdersModel {
    constructor() {
        this.orderData = [];
        this.historyOrders = [];
    }

    getData = (data) => {
        this.orderData = data;
    }

    getLocalOrder = () => {
        return localStorage.getItem('orderData');
    }

    getLocalHistory = () => {
        return localStorage.getItem('history');
    }

    setLocalHistory = (list) => {
        localStorage.setItem('history', list);
    }

    makeHistory = () => {
        let history = JSON.parse(this.getLocalHistory());
        let order = JSON.parse(this.getLocalOrder());
        if (history != null) {
            this.historyOrders = history;
        }
        this.historyOrders.push(order);
        this.setLocalHistory(JSON.stringify(this.historyOrders));
    }
}
