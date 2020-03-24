export class MakeOrderView {
    cartList;

    constructor(handleRerenderCart) {
        this.handleRerenderCart = handleRerenderCart;
        this.makeOrderBtn = document.querySelector('.make-order-btn'); 
        this.makeOrderBtn.addEventListener('click', this.makeOrder);
    }

    // set cart list from cart component
    setCartList = (cards) => {
        this.cartList = cards;
    }


    makeOrder = (e) => {
        let fields = document.querySelectorAll('.order-field'); // all input fields
        const data = {
            name: fields[0].value,
            email: fields[1].value,
            phone: fields[2].value,
            products: this.cartList
        }

        if (this.isDataValid(fields)) {
            localStorage.removeItem('cart');
            localStorage.setItem('orderData', JSON.stringify(data));
            this.makeOrderBtn.setAttribute('data-dismiss', 'modal'); // close modal
            this.handleRerenderCart();
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
                field.classList.remove('is-invalid');
            } else {
                field.classList.add('is-invalid');
                isFullData = false;
            }
        })

        return isFullData;
    }
    
}