const User = require('../models/User');
const AppError = require('../utils/AppError');
const { logger } = require('../config/logger');

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateAuthToken();
    
    logger.info(`New user registered: ${user.username}`);
    res.status(201).json({ token });
  } catch (err) {
    logger.error(`Registration error: ${err.message}`);
    next(new AppError('Registration failed', 400));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Invalid credentials', 401);
    }
    
    const token = user.generateAuthToken();
    logger.info(`User logged in: ${user.username}`);
    res.json({ token });
  } catch (err) {
    logger.error(`Login error: ${err.message}`);
    next(err);
  }
};