const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Product extends Model {}

// initialize type of parameters for product
const ProductModel = Product.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    species: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    weight: {type: DataTypes.FLOAT, allowNull: true},
    birth_date: {type: DataTypes.DATE, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: true},
    breed: {type: DataTypes.STRING, allowNull: false},
    imageSrc: {type: DataTypes.STRING, allowNull: false},
    is_sterile: { type: DataTypes.BOOLEAN, allowNull: true},
    hair: { type: DataTypes.STRING, allowNull: true},
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date()},
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date()},
}, {sequelize, modelName: 'Product'});


module.exports =  ProductModel ;
