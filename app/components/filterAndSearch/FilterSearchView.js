export class FilterSearchView {
    constructor(search, filter) {
        // filter by category
        this.navbarNav = document.querySelector('.navbar-nav');
        this.navbarNav.addEventListener('click', filter);
        // render productList after clicking brand "petShop"
        this.petShop = document.querySelector('#petShop');
        this.petShop.addEventListener('click', filter);
        // search by breed
        this.input = document.querySelector('.search');
        this.input.addEventListener('input', search);
        // don't remove
        this.input.addEventListener('change', (e) => e.target.value = '');

    }

    get searchValue() {
        return this.input.value;
    }
}