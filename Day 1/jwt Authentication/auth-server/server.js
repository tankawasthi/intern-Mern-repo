const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app= express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('✅ Root route hit!');
  res.send('Basic server is working!');
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jwtauth')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  console.log('Please make sure MongoDB is running on your system');
  process.exit(1); 
});


app.get("/",(req,res)=>{
    res.send("jwt Authentication server is running!")
})

const authRoutes = require('./routes/auth')
app.use('/api/auth',authRoutes)

const authMiddleware = require('./middlewares/auth');

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Access granted to protected route',
    user: req.userDetails
  });
});

// Admin-only protected route
app.get('/api/admin', authMiddleware, (req, res) => {
  if (req.user.userRole !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin role required.'
    });
  }
  
  res.json({
    success: true,
    message: 'Welcome to the admin dashboard!',
    user: req.userDetails
  });
});

const PORT= process.env.PORT || 7005

app.listen(PORT,()=>{
console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);})