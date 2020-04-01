const CustomerModel = require('./customers.model');

class CustomersService {

    async createOne(customerData, transaction) {
        const customer = new CustomerModel(customerData);
        return customer.save({ transaction });
    }

}

module.exports = new CustomersService();