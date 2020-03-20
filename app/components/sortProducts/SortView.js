export class SortView {
    constructor(sort) {
        this.sortedBy = document.querySelector('#sortedBy');
        this.sorted = document.querySelector('.sort'); 

        this.sortedBy.addEventListener('click', (e) =>{
            this.sorted.innerText = e.target.innerText;
            sort(e);
        });
    }
}