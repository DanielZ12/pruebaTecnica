'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const reservations= [
      {
        room: 1,
        count_days: 1,
        billing_id: 1,
        status_id: 1
      }
    ]
    
      await queryInterface.bulkInsert('Reservations', reservations, {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Reservations', null, {});
     
  }
};
