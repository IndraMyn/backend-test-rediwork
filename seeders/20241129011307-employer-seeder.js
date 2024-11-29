'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employers', [
      {
        employee_id: 'E101',
        name: 'John Doe',
        job_title: 'Software Engineer',
        salary: 75000,
        department: 'IT',
        joined_date: '2022-06-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 'E102',
        name: 'Jane Smith',
        job_title: 'Product Manager',
        salary: 85000,
        department: 'Product',
        joined_date: '2021-07-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 'E103',
        name: 'Michael Johnson',
        job_title: 'Data Analyst',
        salary: 68000,
        department: 'Analytics',
        joined_date: '2023-01-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employers', null, {});
  },
};
