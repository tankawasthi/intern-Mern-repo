const Product = require('../models/Product');
const AppError = require('../utils/AppError');
const { logger } = require('../config/logger');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    logger.info('Fetched all products');
    res.json(products);
  } catch (err) {
    logger.error(`Get products error: ${err.message}`);
    next(new AppError('Failed to fetch products', 500));
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    logger.info(`Fetched product: ${product._id}`);
    res.json(product);
  } catch (err) {
    logger.error(`Get product error: ${err.message}`);
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      createdBy: req.user.id
    });
    logger.info(`Created product: ${product._id}`);
    res.status(201).json(product);
  } catch (err) {
    logger.error(`Create product error: ${err.message}`);
    next(new AppError('Invalid product data', 400));
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    
    logger.info(`Updated product: ${product._id}`);
    res.json(product);
  } catch (err) {
    logger.error(`Update product error: ${err.message}`);
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    
    logger.info(`Deleted product: ${product._id}`);
    res.status(204).json(null);
  } catch (err) {
    logger.error(`Delete product error: ${err.message}`);
    next(err);
  }
};