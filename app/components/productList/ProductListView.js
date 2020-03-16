export class ProductListView {
    constructor() {
        this.container = document.querySelector('.goods-wrapper');
    }

    renderList(arr) {
        this.container.innerHTML="";
        arr.forEach(el => {
            let productCard = this.createProductCard(el);
            this.container.appendChild(productCard);
        });
    }
    
    createProductCard (prod) { // будет создавать карточки
        const card = document.createElement('div');
        
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        
        card.innerHTML = `<div class="card border-secondary h-100">  
                            <div class = "card-img-wrapper">    
                                <img src="${prod.image}" class="card-img-top" alt="...">
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <p class="card-title">${prod.breed}</p>
                                    <p class="card-text">${prod.species}  ${prod.gender}</p>
                                    <p class="card-age"> Age: ${prod.age}</p>
                                </li>
                                <li class="list-group-item card-price">Price: $ ${prod.price}</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link card-link_green">Add to Cart</a>
                                <a href="#" class="card-link card-link_blue">Details</a>
                            </div>
                         </div>   
                        `
        return card;
    };
}