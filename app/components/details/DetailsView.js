export class DetailsView {
    constructor(listener) {
        this.modal = document.querySelector('.my_modal');
        console.log('this.modal = ', this.modal);
        this.content = document.querySelector('.my_content');
        console.log('this.contant = ', this.contant);
        this.showClass = 'modal-show';
        this.modal.addEventListener('click', listener);
    };

    show({id, breed, species, name, gender, age, hair, price}) {
        this.content.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title justify-content-center">${breed}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="card-info"><span class = 'modal-span'>species: </span>${species}</p>
                <p class="card-info"><span class = 'modal-span'>name: </span>${name}</p>
                <p class="card-info"><span class = 'modal-span'>gender: </span>${gender}</p>
                <p class="card-info"><span class = 'modal-span'>age: </span>${age}</p>
                <p class="card-info"><span class = 'modal-span'>hair: </span>${hair}</p>
                <p class="card-info-price"><span class = 'modal-price'>price: </span>${price} UAH</p>
            </div>
            <div class="modal-footer">
			  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			  <button type="button" data-id='${id}' class="btn btn-primary">Add to Basket</button>
			</div>
        `
        this.modal.classList.add(this.showClass);
    }

    close(e) {
        this.content.innerHTML = '';
        this.modal.classList.remove(this.showClass);
    }
}