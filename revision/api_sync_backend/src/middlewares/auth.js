const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { logger } = require('../config/logger');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new AppError('Authentication required', 401);
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    logger.info(`Authenticated user: ${decoded.id}`);
    next();
  } catch (err) {
    logger.error(`Authentication error: ${err.message}`);
    next(new AppError('Invalid or expired token', 401));
  }
};