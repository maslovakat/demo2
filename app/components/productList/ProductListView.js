export class ProductListView {
    constructor() {
        this.container = document.querySelector('.goods-wrapper');
        this.navbarNav = document.querySelector('.navbar-nav');
        this.loader = document.querySelector('#loader');

    //    was here
    //     this.pageCurrent = document.querySelector('.page_current');
    // }
    //
    // renderPageNum(num) {
    //     console.log('this.pageCurrent.innerText = ', this.pageCurrent.innerText);
    //     return this.pageCurrent.innerText = `${num}`;
    }

    renderNavigationList(obj){
        let otherList = [];
        for(let i in obj){
            obj[i] > 3 ? this.navbarNav.insertAdjacentHTML('beforeend', 
            `<li class="nav-item menu-item menu-item-cats">
                <a class="nav-link" id="${i}" href="#">${i}</a>
            </li>`) : otherList.push(i);
        }
        this.navbarNav.insertAdjacentHTML('beforeend', 
            `<li class="nav-item menu-item menu-item-cats">
                <a class="nav-link" id="other" href="#">other</a>
            </li>`)
            return otherList
    }

    renderList(arr) {
        document.getElementById("loader").style.display = "none";
        this.container = document.querySelector('.goods-wrapper');
        this.container.innerHTML="";
        arr.length === 0 ? this.container.innerHTML = 'Nothing was found' : null;
        arr.forEach(el => {
            let productCard = this.createProductCard(el);
            this.container.appendChild(productCard);
        });
    }

    getList() {
        return document.querySelectorAll('.add-to-card');
    }
    
    createProductCard (prod) { // будет создавать карточки

        const card = document.createElement('div');
        
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-4 pb-3';
        
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
                                <a href="#" class="card-link card-link_blue">Details</a>
                            </div>
                         </div>   
                        `
        return card;
    };
}