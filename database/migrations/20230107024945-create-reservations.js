'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      count_days:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      billing_id:{
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Billings"
          },
          key : 'id'
        }
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Status"
          },
          key : 'id'
        }
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
    await queryInterface.dropTable('Reservations');
  }
};