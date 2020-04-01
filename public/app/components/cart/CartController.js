import {
    CartView
} from './CartView.js';
import {
    CartModel
} from './CartModel.js';

export class CartController {
    constructor({
        subscribe,
        notify
    }) {
        this.subscribe = subscribe;
        this.notify = notify;

        this.subscribe('cart', this.handleCart); // кнопки на продуктах
        this.subscribe('prodList', this.handleCardList); // продукты
        this.subscribe('afterOrder', this.handleRerenderCart); // сделать заказ кнопка

        this.view = new CartView(
            this.handleNotifyCartList,
            this.handleAddToCart,
            this.handleDeleteItem,
            this.handleRemoveCartFromLocalStorage,
            this.handleRerenderCart,
            this.handleUpdateLocalStorageCart);
        this.model = new CartModel();
    }

    handleCardList = (cards) => {
        this.model.setProductList(cards);
        this.startCart(cards);
    }

    startCart = (cards) => {
        const localStorageCart = this.model.getLocalStorageCart();
        this.view.renderCartList(localStorageCart, cards);
        this.view.setBasketCounter(localStorageCart);
    }

    handleNotifyCartList = (cartList) => {
        this.notify('cartList', cartList);
    }

    handleCart = (cards) => {
        this.view.addListenerForBtn(cards);
    }

    handleAddToCart = (e) => {
        const localStorageCart = this.model.getLocalStorageCart();
        const updatedLocalStorageCart = this.view.addToCart(e, localStorageCart);
        this.model.setLocalStorageCart(updatedLocalStorageCart);
        
        const productList = this.model.getProductList();
        this.view.renderCartList(updatedLocalStorageCart, productList);
    }

    // delete product from cart
    handleDeleteItem = (el) => {
        const localStorageCart = this.model.getLocalStorageCart();
        this.view.deleteItem(el, localStorageCart);
    }

    // rerender after making order
    handleRerenderCart = () => {
        const localStorageCart = this.model.getLocalStorageCart();
        const productList = this.model.getProductList();
        this.view.renderCartList(localStorageCart, productList);
        this.view.setBasketCounter(localStorageCart);
    }

    handleUpdateLocalStorageCart = (list) => {
        this.model.setLocalStorageCart(list);
    }

    handleRemoveCartFromLocalStorage = () => {
        this.model.removeLocalStorageCart();
    }
}