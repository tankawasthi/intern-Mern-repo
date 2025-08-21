const { verifyToken } = require('../utils/generateToken');
const User = require('../models/userModel');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
    console.log('hello')
    try {
        let token;
        let authHeader = req.headers.authorization || req.headers.authorization
        // Check for token in headers (Fixed: req.headers, not req.header)
        if (authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
            console.log(token)
            
        }
        try {
            if (!token) {
                return res.status(401).json({
                    success: false, // Fixed: was 'sucess'
                    message: 'Not authorized to access this route'
                });
            }

            // Verify token
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("this is decoded:",decoded)
            req.user = decoded;
            next()
        } catch (error) {
            return res.status(500).json({
                message:error.message
            })
        }
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Hello sir authorized to access this route'
        });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false, // Fixed: was 'sucess'
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

module.exports = {
    protect,
    authorize
};