const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');

const productValidations = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be positive'),
  body('stock').optional().isInt({ min: 0 }).withMessage('Stock must be positive')
];

router.route('/')
  .get(productController.getAllProducts)
  .post(productValidations, validate, productController.createProduct);

router.route('/:id')
  .get(productController.getProduct)
  .patch(productValidations, validate, productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;