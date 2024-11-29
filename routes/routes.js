const express = require('express');
const EmployerController = require('../controllers/employerController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authenticate);

router.get('/', EmployerController.getAll);
router.get('/:id', EmployerController.getById);
router.post('/', EmployerController.create);
router.put('/:id', EmployerController.update);
router.delete('/:id', EmployerController.delete);

module.exports = router;
