export class SortView {
    constructor(sort) {
        this.sortedBy = document.querySelector('#sortedBy');
        this.sortedBy.addEventListener('click', sort);
    }
}