export class ProductListView {
    constructor(handleAddToCartBtn, listener) {
        this.container = document.querySelector('.goods-wrapper');
        this.navbarNav = document.querySelector('.navbar-nav');
        this.loader = document.querySelector('#loader');
        this.input = document.querySelector('.search');
        this.first = document.querySelectorAll('.first');
        this.last = document.querySelectorAll('.last');

        this.handleAddToCartBtn = handleAddToCartBtn;
        this.clickListener = listener;
    }

    renderNavigationList(obj){
        let otherList = [];
        for(let i in obj) {
            obj[i] > 3 ? this.navbarNav.insertAdjacentHTML('beforeend', 
            `<li class="nav-item menu-item">
                <a class="nav-link my-link" id="${i}" href="#">${i}</a>
            </li>`) : otherList.push(i);
        }
        this.navbarNav.insertAdjacentHTML('beforeend', 
            `<li class="nav-item menu-item">
                <a class="nav-link my-link" id="other" href="#">other</a>
            </li>`)
            return otherList
    }

    renderList(arr) {
        //loader hide
        this.loader.style.display = "none";
        this.container.innerHTML="";
        // need to fixed
        arr.length === 0 ? this.container.innerHTML = 'Nothing was found' : null;
        //delete previous listeners
        this.container.querySelectorAll('.card-link_blue').forEach(btn => btn.removeEventListener('click', this.clickListener));
        //render cards
        arr.forEach(el => {
            let productCard = this.createProductCard(el);
            this.container.appendChild(productCard);
        });
        this.handleAddToCartBtn();
        //listener for details modal window
        this.container.querySelectorAll('.card-link_blue').forEach(btn => btn.addEventListener('click', this.clickListener));
    }

    getList() {
        return document.querySelectorAll('.add-to-card');
    }

    createProductCard (prod) { // будет создавать карточки

        const card = document.createElement('div');
        
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-4 pb-3';
        card.dataset.id = prod.id;
        
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
                                <a href="#" id="${prod.id}" class="add-to-card card-link card-link_green">Add to Cart</a>
                                <a href="#" data-id="${prod.id}" class="card-link card-link_blue">Details</a>
                            </div>
                        </div>   
                        `
        return card;
    };

    showPages(current, last) {
        this.first.forEach(el => el.innerHTML = `${current}`);
        this.last.forEach(el => el.innerHTML = `${last}`);
        // console.log('curent view = ', current);
        // console.log('max page view = ', last);
    }
}