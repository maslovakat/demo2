export class HistoryOrdersView {
    constructor(listener) {
        this.historyModal = document.querySelector('#historyModal');
        this.historyTableBody = document.querySelector('.history-table-body');
        this.historyBtn = document.querySelector('.history_btn');
        this.historyBtn.addEventListener('click', listener);

        this.historyModal.addEventListener('click', this.closeModal);
    }

    showModal(list) {
        let orderItems = '';
        let total = 0;
        const array = JSON.parse(list);
        array.forEach(order => {
            order.products.forEach((prod, i) => {
                orderItems += `
                <tr>
                    <td>${i+1}</td>
                    <td>${prod.species}</td>
                    <td>${prod.breed}</td>
                    <td>1</td>
                    <td>${prod.price}$</td>
                    <td>confirmed</td>
                </tr>
            `;
                total += prod.price;
            });
            orderItems += `<tr><td></td><td></td><td></td><td>Total:</td> <td><span class="history-price text-success">${total} $</span></td></tr>`;

            this.historyTableBody.innerHTML = orderItems;
        });

        this.historyModal.classList.add('modal-show');
    }

    closeModal = () => {
        this.historyModal.classList.remove('modal-show');
    }
}


// <tr>
// <th scope="col">№</th>
// <th scope="col">Pet</th>
//<th scope="col">Name</th>
//     <th scope="col">Quantity</th>
//     <th scope="col">Price</th>
//     <th scope="col">Status</th>
//     </tr>