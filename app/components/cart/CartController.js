import { CartView } from './CartView.js';

export class CartController {
    constructor({subscribe}) {
        this.subscribe = subscribe;

        this.subscribe('cart', this.handleCart);
        this.subscribe('prodList', this.handleCardList);

        this.view = new CartView(this.handleCart);
    }
    
    handleCart = (cards) => {
        this.view.addListenerForBtn(cards);
    }
    
    handleCardList = (cards) => {
        this.view.showBasketList(cards);
    }
}