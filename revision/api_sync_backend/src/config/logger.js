const { createLogger, format, transports } = require('winston');
const morgan = require('morgan');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/combined.log' }),
    new transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    })
  ]
});

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream: { write: (msg) => logger.info(msg.trim()) }
});

module.exports = { logger, morganMiddleware };