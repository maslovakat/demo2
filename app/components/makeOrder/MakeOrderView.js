export class MakeOrderView {

    constructor(handleSetOrderData) {
        this.handleSetOrderData = handleSetOrderData;

        this.makeOrderBtn = document.querySelector('.make-order-btn'); 
        this.makeOrderBtn.addEventListener('click', this.handleSetOrderData);
    }

    getFormData = () => {
        return document.querySelectorAll('.order-field'); // all input fields
    }

    closeModal = (isFullData) => {
        if(isFullData) {
            this.makeOrderBtn.setAttribute('data-dismiss', 'modal'); // close modal
        }
    }

    defineErrorField = (isCorrect, field) => {
        isCorrect ?
            field.classList.remove('is-invalid') :
            field.classList.add('is-invalid');
    }

    
}