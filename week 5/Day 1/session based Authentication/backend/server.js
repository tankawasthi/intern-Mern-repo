require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require ("express-session");
const MongoStore =  require("connect-mongo");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app=express();

app.use(express.json());

// enable cors for frontend
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));

// connect to database
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err));

//user model
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});
const User  = mongoose.model("User",userSchema);


// session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET || "supersecretkey",
        resave: false,
        saveUninitialized:false,
        store:MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 }
    })
);

// register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashed });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: "Registration failed", error: err.message });
  }
});


//login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(401).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  req.session.userId = user._id;
  res.json({ message: "Login successful", user: { id: user._id, username: user.username } });
});

app.get("/dashboard", (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: "Not authenticated" });
  res.json({ message: "Welcome to dashboard 🎉", userId: req.session.userId });
});

app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));