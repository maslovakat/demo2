import { MakeOrderView } from './MakeOrderView.js';
import { MakeOrderModel } from './MakeOrderModel.js'
 
export class MakeOrderController {
    constructor({subscribe, notify}) {
        this.subscribe = subscribe;
        this.notify = notify;
        this.view = new MakeOrderView(this.handleSetOrderData);
        this.model = new MakeOrderModel(this.handleRerenderCart, this.handleErrorField);

        this.subscribe('cartList', this.handleCartList);
    }
    
    // publisher helps get cart list
    handleCartList = (cards) => {
        this.model.setCartList(cards);
    }

    handleRerenderCart = () => {
        this.notify('cartAfterOrder', null);
    }

    handleSetOrderData = (e) => {
        e.preventDefault();
        let data = this.view.getFormData();
        const isFullData = this.model.makeOrder(data);
        this.view.closeModal(isFullData);
    }

    handleErrorField = (isCorrect, field) => {
        this.view.defineErrorField(isCorrect, field);
    }
    
}