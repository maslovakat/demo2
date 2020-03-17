export class SortView {
    constructor(handleSort) {
        this.sortedBy = document.querySelector('#sortedBy');
        this.sortedBy.addEventListener('click', handleSort);
    }
}