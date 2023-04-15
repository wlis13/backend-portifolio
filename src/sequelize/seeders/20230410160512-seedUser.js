'use strict';
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', 
    [
      {
        userName: process.env.USER_NAME,
        userEmail: process.env.USER_EMAIL,
        userPassword: process.env.USER_PASSWORD,
        role: process.env.USER_ROLE,
      }
    ],
    )
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users');
  }
};