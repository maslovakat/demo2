import { CartView } from './CartView.js';

export class CartController {
    constructor({subscribe, notify}) {
        this.subscribe = subscribe;
        this.notify = notify;

        this.subscribe('cart', this.handleCart);
        this.subscribe('prodList', this.handleCardList);
        this.subscribe('cartAfterOrder', this.handleRerenderCart);

        this.view = new CartView(this.handleCartList);
    }
    
    handleCart = (cards) => {
        this.view.addListenerForBtn(cards);
    }
    
    handleCardList = (cards) => {
        this.view.showBasketList(cards);
    }
    
    handleCartList = () => {
        let cartList = this.view.getCartList();
        this.notify('cartList', cartList);
    }

    // rerender after making order
    handleRerenderCart = () => {
        this.view.renderCartList();
        this.view.setBasketCounter();
    }
}