'use strict';

const countries = require('../../data/seeders/countries-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('countries', countries, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('countries', null, {});
  }
};