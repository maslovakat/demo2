import {ProductListModel} from "../../common/components/productList/ProductListModel";

const { Model } = require('sequelize');
const sequelize = require('../../db');
const ProductModel = require('../products/products.model');
const OrderModel = require('../orders/orders.model');

class OrderItem extends Model {

}

const OrderItemModel = OrderItem.init({
    quantity: { allowNull: false, type: DataTypes.INTEGER }
});

OrderItemModel.product = OrderItemModel.belongsTo(ProductModel, { foreignKeyConstraint: true, foreignKey: 'productId', targetKey: 'id' });
OrderItemModel.product = OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });