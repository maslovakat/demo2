export class CartView {
    constructor(handleNotifyCartList, handleAddToCart, handleDeleteItem, handleRemoveCartFromLocalStorage, handleRerenderCart, handleUpdateLocalStorageCart) {
        this.handleNotifyCartList = handleNotifyCartList;
        this.handleAddToCart = handleAddToCart;
        this.handleDeleteItem = handleDeleteItem;
        this.handleRemoveCartFromLocalStorage = handleRemoveCartFromLocalStorage;
        this.handleRerenderCart = handleRerenderCart;
        this.handleUpdateLocalStorageCart = handleUpdateLocalStorageCart;

        this.basketCounter = document.querySelector('.basket_counter');
        this.cartModalList = document.querySelector('.cart-table-body');
        this.totalPrice = document.querySelector('.total-price');
    }

    addListenerForBtn = (cards) => {
        this.btnList = cards;
        this.btnList.forEach(btn => btn.addEventListener('click', this.handleAddToCart));
    }

    // кнопка addToCart
    addToCart = (e, list) => {
        e.preventDefault();
        
        let isExist;

        if (list === null) {
            list = `${e.target.id}`;
        } else {
            // проверка на повтор продукта
            isExist = list.split(',').find(el => el === e.target.id);
            if (isExist) {
                return list;
            }
            list += `,${e.target.id}`;
        }

        this.basketCounter.innerText++;
        return list;
    };

    setBasketCounter = (list) => {
        list === null ?
            this.basketCounter.innerText = 0 :
            this.basketCounter.innerText = list.split(',').length;
    }

    getCartList = () => {
        return this.cartList;
    }

    renderCartList = (listId, productList) => {
        let cartList = []; // массив объектов cart добавленных в корзину
        let cartItems = ``; // конкатинирует html строки
        let countTotal = 0;

        if (listId === null) {
            listId;
        } else {
            listId = listId.split(',');
            for (let i = 0; i < listId.length; i++) {
                let cartItem = productList.filter(e => e.id === +listId[i]); // найти в общем списке по id
                cartList.push(cartItem[0]);
            }
        }

        this.handleNotifyCartList(cartList); // нотифицируем в makeOrder

        if (cartList === []) {
            cartItems = '';
        } else {
            cartList.forEach((item, index) => {
                cartItems += `
                <tr id="${index}">
                    <td class="w-25">
                        <img src="${item.imageSrc}"
                            class="img-fluid img-thumbnail">
                    </td>
                    <td>${item.species}${item.breed}</td>
                    <td>${item.price}$</td>
                    <td>
                        <a href="#" class="delete-item btn btn-danger btn-sm">
                            <i class="fa fa-times"></i>
                        </a>
                    </td>
                </tr>`;

            countTotal += item.price;
            });
        }

        this.cartModalList.innerHTML = cartItems;
        this.totalPrice.innerText = `${countTotal}$`

        let deleteItemBtn = document.querySelectorAll('.delete-item');
        deleteItemBtn.forEach(el => el.addEventListener('click', () => this.handleDeleteItem(el)))
    }

    deleteItem(el, listId) {
        listId = listId.split(',');

        if (listId.length === 1) {
            this.handleRemoveCartFromLocalStorage();
        } else {
            listId.splice(el.parentNode.parentNode.id, 1);
            this.handleUpdateLocalStorageCart(listId.join(','));
        }

        this.handleRerenderCart();
    }
}