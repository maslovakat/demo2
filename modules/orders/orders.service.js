const { Op } = require('sequelize');
const OrderModel = require('./orders.model');
const ProductModel = require('../products/products.model');
const sequelize = require('../../db');

const dto ={
    customer: {

    },
    items: [
        { productId: 25, quantity: 3 }
    ]
};

class OrdersService {
    // orderData validated by some midlevare
    async createOne(orderData) {
        return sequelize.transaction(async transaction => {
           const { items } = orderData;
           const foundProducts = await ProductModel.findAll({
               where: { id: { [Op.in]: items.map( i => i.productId) } },
               attributes: ['id', 'quantity'],
               transaction,
           });
           if (foundProducts.length !== items.length) {
               const invalidIds = [];
               items.fforEach(i => {
                   if(foundProducts.find(fp => fp.id === i)) {
                       invalidIds.push(i);
                   }
               });
               throw  new  Error(`Invalid product ids are [${invalidIds.join(',')}]`);
           }
            // check existence of pet and enough pet quantity (in loop for each orderItem)
            //Order
           //create Order Items
            // subtract amounts in products
           // return order
        });
    }
}