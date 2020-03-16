export class FilterSearchView {
    constructor(handleFilter, handleSearch) {
        // filter by category
        this.navbarNav = document.querySelector('.navbar-nav');
        this.navbarNav.addEventListener('click', handleFilter);
        // search by breed
        this.input = document.querySelector('.search');
        this.input.addEventListener('input', handleSearch);
    }

    getSearchValue() {
        return this.input.value;
    }
}