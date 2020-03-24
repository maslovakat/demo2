import { MakeOrderView } from './MakeOrderView.js'
 
export class MakeOrderController {
    constructor({subscribe, notify}) {
        this.subscribe = subscribe;
        this.notify = notify;
        this.view = new MakeOrderView(this.handleRerenderCart);

        this.subscribe('cartList', this.handleCartList);
    }
    
    // publisher helps get cart list
    handleCartList = (cards) => {
        this.view.setCartList(cards);
    }

    handleRerenderCart = () => {
        this.notify('cartAfterOrder', null);
    }
    
}