'use strict';
const status = [
  {
    name: "Pendiente",
    code: ""
  },
  {
    name: "Pagado",
    code: ""
  },
  {
    name: "Eliminado",
    code: ""
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Status', status, {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Status', null, {});
     
  }
};
