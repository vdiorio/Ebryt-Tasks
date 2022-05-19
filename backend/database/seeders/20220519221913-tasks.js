'use strict';

function getRandomDate() {
  return new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));
}

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Tasks', [{
      title: 'Fazer coisas importantes',
      status: 'Pendente',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    },{
      title: 'Fazer coisas não importantes',
      status: 'Em andamento',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    },{
      title: 'Fazer coisas divertidas',
      status: 'Pronto',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    },{
      title: 'Fazer coisas urgentes',
      status: 'Em andamento',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    },{
      title: 'Fazer coisas sem pressa',
      status: 'Pendente',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    },{
      title: 'Fazer coisas',
      status: 'Pentende',
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
