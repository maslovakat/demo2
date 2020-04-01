const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const ProductModel = require('../products/products.model');
const OrderModel = require('../orders/orders.model');

class OrderItem extends Model {}

const OrderItemModel = OrderItem.init({
   productId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
   orderId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true }
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = OrderItemModel;