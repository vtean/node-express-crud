'use strict';

const regions = require('../../data/seeders/regions-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('regions', regions, {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('regions', null, {});
  }
};