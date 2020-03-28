'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: Sequelize.STRING, allowNull: true},
    species: {type: Sequelize.STRING, allowNull: false},
    price: {type: Sequelize.INTEGER, allowNull: false},
    gender: {type: Sequelize.STRING, allowNull: false},
    weight: {type: Sequelize.FLOAT, allowNull: true},
    birth_date: {type: Sequelize.BIGINT , allowNull: false},
    color: {type: Sequelize.STRING, allowNull: true},
    breed: {type: Sequelize.STRING, allowNull: false},
    imageSrc: {type: Sequelize.STRING, allowNull: false},
    is_sterile: { type: Sequelize.BOOLEAN, allowNull: true},
    hair: { type: Sequelize.STRING, allowNull: true},
    createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: new Date()},
    updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: new Date()},
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
