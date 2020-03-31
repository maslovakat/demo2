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
        const array = JSON.parse(list);
        if (array) {
            array.forEach(order => {
                let total = 0;
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
                orderItems += `<tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total:</td>
                                <td><span class="history-price text-success">${total} $</span></td>
                           </tr>`;

                this.historyTableBody.innerHTML = orderItems;
            });
        }
        this.historyModal.classList.add('modal-show');
    }

    closeModal = () => {
        this.historyModal.classList.remove('modal-show');
    }
}