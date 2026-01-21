'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      item_name: Sequelize.STRING,
      category: Sequelize.STRING,
      price: Sequelize.INTEGER,
      stock_qty: Sequelize.INTEGER,
      min_stock: Sequelize.INTEGER,
      storage_location: Sequelize.STRING,

      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },

      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('items');
  }
};
