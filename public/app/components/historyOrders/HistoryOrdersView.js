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
                console.log('order = ', order);
                orderItems += `
                        <tr class = 'user'>
                            <td>${order.name}</td>
                            <td>${order.email}</td>
                            <td colspan="4">${order.phone}</td>
                        </tr>
                    `;
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