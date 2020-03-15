export class ProductListView {
    constructor() {
        this.container = document.querySelector('.goods-wrapper');
    }

    renderMessage(arr) {
        this.container.innerHTML="";
        arr.forEach((el, ind, arr) => {
            let productCard = this.createProductCard(el);
            this.container.appendChild(productCard);
        });

    }

    createProductCard (prod) { // будет создавать карточки
        const card = document.createElement('div');

        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="${prod.image}" alt="">
                                <button class="card-add-wishlist"
                                        data-goods-id="${prod.id}"></button>
                            </div>
                            <div class="card-body justify-content-between">
                                <a href="#" class="card-title">${prod.breed}</a>
                                <div class="card-price">${prod.price} ₽</div>
                                <div>
                                    <button class="card-add-cart"
                                            data-goods-id="${prod.id}">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>`
        return card;
    };
}