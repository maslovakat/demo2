export class FilterSearchView {
    constructor(handleFilter, handleSearch, handleGetList, handleSort) {
        // filter by category
        this.navbarNav = document.querySelector('.navbar-nav');
        this.navbarNav.addEventListener('click', handleFilter);
        // render productList after clicking brand "petShop"
        this.petShop = document.querySelector('#petShop');
        this.petShop.addEventListener('click', handleGetList);
        // search by breed
        this.input = document.querySelector('.search');
        this.input.addEventListener('input', handleSearch);
        // sortedBy
        this.sortedBy = document.querySelector('#sortedBy');
        this.sortedBy.addEventListener('click', handleSort);

    }

    getSearchValue() {
        return this.input.value;
    }
}