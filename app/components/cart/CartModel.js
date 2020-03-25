export class CartModel {
    constructor() {
        this.productList;
    }

    setProductList = (cards) => {
        this.productList = cards;
    }

    getProductList = () => {
        return this.productList;
    }

    getLocalStorageCart = () => {
        return localStorage.getItem('cart');
    }

    setLocalStorageCart = (list) => {
        localStorage.setItem('cart', list);
    }

    removeLocalStorageCart = () => {
        localStorage.removeItem('cart');
    }
}