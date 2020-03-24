export class CartView {
    productList;
    btnList;
    countTotal = 0;
    cartList = [];

    constructor(handleCartList) {
        this.handleCartList = handleCartList;
        this.basketCounter = document.querySelector('.basket_counter');
        this.cartModalList = document.querySelector('.cart-table-body');
        this.totalPrice = document.querySelector('.total-price');

        this.setBasketCounter()
    }

    addListenerForBtn = (cards) => {
        this.btnList = cards;
        this.btnList.forEach(btn => btn.addEventListener('click', this.addToCart));
    }

    addToCart = (e) => {
        e.preventDefault();

        let list = localStorage.getItem('cart');
        let isExist;

        if (list === null) {
            list = `${e.target.id}`;
        } else {
            // check is it repeated item?
            isExist = list.split(',').find(el => el === e.target.id);
            if (isExist) {
                return list;
            }
            list += `,${e.target.id}`;
        }

        localStorage.setItem('cart', list);
        this.basketCounter.innerText++;
        this.renderCartList();
    };

    setBasketCounter = () => {
        let list = localStorage.getItem('cart');

        list === null ?
            this.basketCounter.innerText = 0 :
            this.basketCounter.innerText = localStorage.getItem('cart').split(',').length;
    }

    showBasketList = (cards) => {
        this.productList = cards;
        this.renderCartList();
    }

    getCartList = () => {
        return this.cartList;
    }

    renderCartList = () => {
        this.cartList = [];
        let cartItems = ``;
        this.countTotal = 0;
        let listId;

        if (localStorage.getItem('cart') === null) {
            listId = localStorage.getItem('cart')
        } else {
            listId = localStorage.getItem('cart').split(',');
            for (let i = 0; i < listId.length; i++) {
                let cartItem = this.productList.filter(e => e.id === +listId[i]);
                this.cartList.push(cartItem[0]);
            }
        }

        this.handleCartList();

        if (this.cartList === []) {
            cartItems = '';
        } else {
            this.cartList.forEach((item, index) => {
                cartItems += `<tr id="${index}">
            <td class="w-25">
                <img src="${item.image}"
                    class="img-fluid img-thumbnail">
            </td>
            <td>${item.species}${item.breed}</td>
            <td>${item.price}$</td>
            <td>
                <a href="#" class="delete-item btn btn-danger btn-sm">
                    <i class="fa fa-times"></i>
                </a>
            </td>
            </tr>`

                this.countTotal += item.price;
            });
        }


        this.cartModalList.innerHTML = cartItems;
        this.totalPrice.innerText = `${this.countTotal}$`

        let deleteItemBtn = document.querySelectorAll('.delete-item');
        deleteItemBtn.forEach(el => el.addEventListener('click', () => this.deleteItem(el)))
    }

    deleteItem(el) {
        let listId = localStorage.getItem('cart').split(',');

        if (listId.length === 1) {
            localStorage.removeItem('cart')
        } else {
            listId.splice(el.parentNode.parentNode.id, 1)
            listId.join(',');
            localStorage.setItem('cart', listId.join(','));
        }

        this.renderCartList();
        this.setBasketCounter();
    }
}