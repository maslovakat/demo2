export class HistoryOrdersModel {
    historyList;

    constructor() {
        this.historyOrders = [];
        this.historyList = [];
        this.link = "http://127.0.0.1:4000/orders";
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


    // history orders realisation by frontend

    // makeHistory = () => {
    //     let history = JSON.parse(this.getLocalHistory());
    //     let order = JSON.parse(this.getLocalOrder());
    //     if (history != null) {
    //         this.historyOrders = history;
    //     }
    //     this.historyOrders.push(order);
    //     this.setLocalHistory(JSON.stringify(this.historyOrders));
    // }

    getHistory = () => {
        return this.historyList;
    }

    getOrders() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.historyList = JSON.parse(ajax.responseText);
        });
        ajax.open('GET', this.link, false);
        ajax.send();

        return this.historyList;
    }

}
