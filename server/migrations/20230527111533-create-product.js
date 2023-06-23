'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      autor: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.NUMERIC
      },
      cover: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.TEXT
      },
      paperback_price: {
        type: Sequelize.NUMERIC
      },
      hardcover_price: {
        type: Sequelize.NUMERIC
      },
      hardcover_availability: {
        type: Sequelize.INTEGER
      },
      paperback_availability: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};