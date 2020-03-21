export class PaginationView {
    constructor(listener){
        // this.pageCurrent = document.querySelector('.page_current');
        this.btns = document.querySelectorAll('.page');
        this.btns.forEach(btn=>btn.addEventListener('click', listener));
    }
}