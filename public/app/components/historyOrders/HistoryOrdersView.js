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
        if (list) {
            list.forEach(order => {
                let total = 0;
                let { customer, items } = order;
                orderItems += `
                        <tr class = 'user'>
                            <td>${customer.name}</td>
                            <td>${customer.email}</td>
                            <td colspan="4">${customer.phone}</td>
                        </tr>
                    `;
                items.forEach((prop, i) => {
                    let {Product} = prop;
                    orderItems += `
                        <tr>
                            <td>${i+1}</td>
                            <td>${Product.species}</td>
                            <td>${Product.breed}</td>
                            <td>1</td>
                            <td>${Product.price}$</td>
                            <td>confirmed</td>
                        </tr>
                    `;
                    total += Product.price;
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