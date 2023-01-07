'use strict';

const billings = [{
    full_name: "Daniel",
    identification: 41009319,
    method_paid: "tarjeta",
    total_paid: 100
}]
module.exports = {
  
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Billings', billings, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Billings', null, {});
     
  }
};
