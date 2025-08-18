const axios = require('axios');
const { logger } = require('../config/logger');
const AppError = require('../utils/AppError');

class ExternalApiService {
  static async fetchData(url) {
    try {
      const response = await axios.get(url);
      logger.info(`External API call to ${url}`);
      return response.data;
    } catch (err) {
      logger.error(`External API error: ${err.message}`);
      throw new AppError('External API request failed', 502);
    }
  }
}

module.exports = ExternalApiService;