export class FilterSearchView {
    constructor(search, filter, all) {
        // filter by category
        this.navbarNav = document.querySelector('.navbar-nav');
        console.log('this.navbarNav.children.length = ', this.navbarNav.children.length);
        this.navItems = document.getElementsByClassName('.my-link');
        console.log('this.navItems = ', this.navItems);

        // this.nodeList = document.querySelectorAll('.nav-item .my-link');
        // this.navArray = Array.from(this.nodeList);
        // console.log('this.navArray = ', this.navArray);
        //
        // this.divyArray = [...document.querySelectorAll('.nav-item .my-link')];
        // console.log('this.divyArray = ', this.divyArray);

        this.navbarNav.addEventListener('click', filter);
        // render productList after clicking brand "petShop"
        this.petShop = document.querySelector('#petShop');
        this.petShop.addEventListener('click', all);
        // search by breed
        this.input = document.querySelector('.search');
        this.input.addEventListener('input', search);
    }

    get searchValue() {
        return this.input.value;
    }

    renderActiveFilter(el) {
        //el.classList.add('nav-active');
    }

    // renderActiveFilter(e) {
    //     //const navActive = this.navItems.find(el => el.id === id);
    //     for (let i in this.navbarNav.childNodes) {
    //         if(nodeType == 1 && innerText === e.target.innerHTML) {
    //             console.log('i = ', i);
    //         }
    //     }
    //     console.log('navActive = ', navActive);
    //     navActive.classList.add('nav-active');
    // }
}