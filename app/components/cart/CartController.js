import { CartView } from './CartView.js';
import { CartModel } from './CartModel.js';

export class CartController {
    constructor({subscribe, notify}) {
        this.subscribe = subscribe;
        this.notify = notify;

        this.subscribe('cart', this.handleCart);
        this.subscribe('prodList', this.handleCardList);
        this.subscribe('cartAfterOrder', this.handleRerenderCart);

        this.view = new CartView(
            this.handleNotifyCartList, 
            this.handleAddToCart, 
            this.handleDeleteItem, 
            this.handleRemoveCartFromLocalStorage, 
            this.handleRerenderCart, 
            this.handleUpdateLocalStorageCart);
        this.model = new CartModel();
    }

    startCart = (cards) => {
        const localStorageCart = this.model.getLocalStorageCart();
        this.view.renderCartList(localStorageCart, cards);
        this.view.setBasketCounter(localStorageCart);
    }
    
    handleCart = (cards) => {
        this.view.addListenerForBtn(cards);
    }
    
    handleCardList = (cards) => {
        this.model.setProductList(cards);
        this.startCart(cards);
    }

    handleAddToCart = (e) => {
        const localStorageCart = this.model.getLocalStorageCart();
        const updatedLocalStorageCart = this.view.addToCart(e, localStorageCart);
        const productList = this.model.getProductList();
        this.model.setLocalStorageCart(updatedLocalStorageCart);
        this.view.renderCartList(updatedLocalStorageCart, productList);
    }

    handleDeleteItem = (el) => {
        const localStorageCart = this.model.getLocalStorageCart();
        this.view.deleteItem(el, localStorageCart);
    }

    handleUpdateLocalStorageCart = (list) => {
        this.model.setLocalStorageCart(list);
    }

    handleRemoveCartFromLocalStorage = () => {
        this.model.removeLocalStorageCart();
    }

    handleNotifyCartList = (cartList) => {
        this.notify('cartList', cartList);
    }

    // rerender after making order
    handleRerenderCart = () => {
        const localStorageCart = this.model.getLocalStorageCart();
        const productList = this.model.getProductList();
        this.view.renderCartList(localStorageCart, productList);
        this.view.setBasketCounter(localStorageCart);
    }
}