const express = require('express');
const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');

// Create Express app
const app = express();

// 1. Configure Winston (application logger)
const winstonLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' })
  ]
});

// 2. Configure Morgan (HTTP request logger)
const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => winstonLogger.info(message.trim())
    }
  }
);

// Middleware
app.use(morganMiddleware);
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  winstonLogger.info('Home route accessed');
  res.send('Hello World!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  winstonLogger.info(`Server started on port ${PORT}`);
});