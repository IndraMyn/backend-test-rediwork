const { Employer } = require('../models');

class EmployerService {
  static async getAllEmployers() {
    return Employer.findAll();
  }

  static async getEmployerById(id) {
    return Employer.findByPk(id);
  }

  static async createEmployer(data) {
    return Employer.create(data);
  }

  static async updateEmployer(id, data) {
    return Employer.update(data, { where: { id } });
  }

  static async deleteEmployer(id) {
    return Employer.destroy({ where: { id } });
  }
}

module.exports = EmployerService;
