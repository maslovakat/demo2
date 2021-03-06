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
        let data = {
            items : [],
            customer: {
                name: fields[0].value,
                email: fields[1].value,
                phone: fields[2].value,
            }
        }
        this.cartList.forEach( e => data.items.push({productId: e.id}))

        if (this.isDataValid(fields)) {
            data = JSON.stringify(data);
            localStorage.removeItem('cart');
            localStorage.setItem('orderData', data);
            this.handleRerenderCart();

            try {
                fetch('http://127.0.0.1:4000/orders', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: data
                })
            } catch (err) {
                console.log(err)
            }

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