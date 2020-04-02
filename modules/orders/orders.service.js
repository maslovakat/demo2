const OrderModel = require('./orders.model');
const OrderItemModel = require('./order-item.model');
const ProductModel = require('../products/products.model');
const CustomerModel = require('../customers/customers.model');
const sequelize = require('../../db');
const customersService = require('../customers/customers.service');
const productService = require('../products/products.service');

class OrdersService {

    findMany() {
        return OrderModel.findAll({
            include: [
                { model: CustomerModel, as: 'customer'},
                { model: OrderItemModel, include: { model: ProductModel }, as: 'items' }],
            attributes: ['postedDate']
        });
    }

    async createOne(orderData) {
        return sequelize.transaction(async transaction => {
            const { items } = orderData;
            const order = new OrderModel();
            order.postedDate = new Date();
            const savedOrder = await order.save({ transaction });
            orderData.customer.orderId = savedOrder.id;

            await customersService.createOne(orderData.customer, transaction);
            const orderItems = items.map(item => ({ productId: item.productId, orderId: savedOrder.id}));
            // поставить флаг продан
            await orderItems.forEach(item => productService.updateOne(item.productId, {inStock: false}, transaction));
            
            const savedOrderItems = await OrderItemModel.bulkCreate(orderItems, { transaction });
            order.items = savedOrderItems;
            return order;
        });
    }

}

module.exports = new OrdersService();