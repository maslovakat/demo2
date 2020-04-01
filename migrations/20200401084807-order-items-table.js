'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderItems', {
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Products',
            key: 'id',
          },
        },
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders',
            key: 'id',
          },
        },
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderItems');
  }
};
