'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'inStock', {type: Sequelize.BOOLEAN, defaultValue: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'inStock');
  }
};
