const {createLogger, format, transports}= require('winston');
const morgan = require('morgan');

const logger = createLogger({
    level:'info',
    format: format.combine(
         format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
})
    ),
    transports: [
        new transports.File({ filename: 'combined.log' }),
        new transports.Console()
    ]
});

const morganMidleware= morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            write: (message) => {
                logger.info(message.trim());
            }
        }
    }
);
module.exports = { logger, morganMidleware };