export class MakeOrderModel {
    cartList;

    constructor(handleRerenderCart, handleErrorField) {
        this.handleRerenderCart = handleRerenderCart;
        this.handleErrorField = handleErrorField;
    }

    // set cart list from cart component
    setCartList = (cards) => {
        this.cartList = cards;
    }


    makeOrder = (fields) => {
        const data = {
            name: fields[0].value,
            email: fields[1].value,
            phone: fields[2].value,
            products: this.cartList
        }

        if (this.isDataValid(fields)) {
            localStorage.removeItem('cart');
            localStorage.setItem('orderData', JSON.stringify(data));
            this.handleRerenderCart();
            return true;
        }
    }

    // validate fields
    isDataValid = (fields) => {
        let isFullData = true;
        const nameRegex = /^\w+/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneRegex = /^\d{10}$/;
        const regexList = [nameRegex, emailRegex, phoneRegex];

        fields.forEach((field, i) => {
            if (field.value.match(regexList[i])) {
                this.handleErrorField(true, field);
            } else {
                this.handleErrorField(false, field);
                isFullData = false;
            }
        })

        return isFullData;
    }
}