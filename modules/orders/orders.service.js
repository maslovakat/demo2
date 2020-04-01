const { Op } = require('sequelize');
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
                { model: OrderItemModel, as: 'items' }],
            attributes: ['postedDate']
        });
    }

    async createOne(orderData) {
        console.log(`orderData : ${orderData}`)
        return sequelize.transaction(async transaction => {
            const { items } = orderData;
            const foundProducts = await productService.findMany({
                where: { id: { [Op.in]: items.map(i => i.productId) } },
                attributes: ['id'],
                transaction,
            });
            if (foundProducts.length !== items.length) {
                const invalidIds = [];
                items.forEach(i => {
                    if (!foundProducts.find(fp => fp.id === i)) {
                        invalidIds.push(i);
                    }
                });
                throw new Error(`Invalid pet ids are [${invalidIds.join(',')}]`);
            }
            const order = new OrderModel();
            order.postedDate = new Date();
            const savedOrder = await order.save({ transaction });
            orderData.customer.orderId = savedOrder.id;
            await customersService.createOne(orderData.customer, transaction);
            const orderItems = items.map(item => ({ productId: item.productId, orderId: savedOrder.id}));
            const savedOrderItems = await OrderItemModel.bulkCreate(orderItems, { transaction });
            order.items = savedOrderItems;
            return order;
        });
    }

}

module.exports = new OrdersService();