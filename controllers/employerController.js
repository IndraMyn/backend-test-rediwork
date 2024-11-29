const EmployerService = require('../services/employerService');

class EmployerController {
  static async getAll(req, res) {
    const employers = await EmployerService.getAllEmployers();
    res.json(employers);
  }

  static async getById(req, res) {
    const employer = await EmployerService.getEmployerById(req.params.id);
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.json(employer);
  }

  static async create(req, res) {
    try {
      const employer = await EmployerService.createEmployer(req.body);
      res.status(201).json(employer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async update(req, res) {
    const [updated] = await EmployerService.updateEmployer(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Employer not found' });
    res.json({ message: 'Employer updated successfully' });
  }

  static async delete(req, res) {
    const deleted = await EmployerService.deleteEmployer(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Employer not found' });
    res.json({ message: 'Employer deleted successfully' });
  }
}

module.exports = EmployerController;
