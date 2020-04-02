export class FilterSearchView {
    constructor(search, filter, all) {
        // filter by category
        this.navbarNav = document.querySelector('.navbar-nav');
        this.navbarNav.addEventListener('click', filter);

        // search by breed
        this.input = document.querySelector('.search');
        this.input.addEventListener('input', search);

        // render productList after clicking brand "petShop"
        this.petShop = document.querySelector('#petShop');
        this.petShop.addEventListener('click', () => {
            all();
            this.input.value = '';
        });
    }

    get searchValue() {
        return this.input.value;
    }
}