export class SortView {
    constructor(sort, all) {
        this.sortedBy = document.querySelector('#sortedBy');
        this.sorted = document.querySelector('.sort'); 

        this.sortedBy.addEventListener('click', (e) =>{
            this.sorted.innerText = e.target.innerText;
            sort(e);
        });

        this.petShop = document.querySelector('#petShop');
        this.petShop.addEventListener('click', () => {
            all();
            this.sorted.innerText = 'sorted by';
        });
    }
}