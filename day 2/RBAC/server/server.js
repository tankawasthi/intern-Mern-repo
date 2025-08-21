const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler')

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();

// routes file
const auth = require('./routes/auth');
const users = require('./routes/users');
const protected = require('./routes/protected');

const app = express();

app.use(express.json());
app.use(cookieParser());

//Mount Router
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/protected', protected);

//Error handler

app.use(errorHandler);




app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

