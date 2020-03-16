export class FilterSearchView {
    constructor(handleFilter) {
        this.navbarNav = document.querySelector('.navbar-nav');
        this.navbarNav.addEventListener('click', handleFilter);
    }
}