const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');

const authValidations = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
];

router.post('/register', authValidations, validate, authController.register);
router.post('/login', authValidations, validate, authController.login);

module.exports = router;