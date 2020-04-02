const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const OrderItemModel = require('./order-item.model');
const ProductModel = require('../products/products.model');
const CustomerModel = require('../customers/customers.model');

class Order extends Model {}

const OrderModel = Order.init({
   id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
   postedDate: { allowNull: false, type: DataTypes.DATE },
}, { sequelize, createdAt: false, updatedAt: false });

OrderModel.hasMany(OrderItemModel, { foreignKey: 'orderId', as: 'items' }); 
OrderModel.hasOne(CustomerModel, { foreignKey: 'orderId', foreignKeyConstraint: true, as: 'customer' }); // orderId на стороне customer
OrderItemModel.belongsTo(ProductModel, { foreignKeyConstraint: true, foreignKey: 'productId', targetKey: 'id' });

module.exports = OrderModel;