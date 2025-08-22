const jwt = require('jsonwebtoken');
const User = require('../models/User')

const auth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        console.log(authHeader)

        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({
                sucess: false,
                message: 'No token provided, authorization denied'
            })
        }
        const token = authHeader.replace('Bearer ','');
        console.log(token)

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');
        console.log(user)
        if (!user) {
            return res.status(401).json({
                sucess: false,
                message: 'Token is no longer valid'
            });
        }
        req.user = decoded;
        req.userDetails = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);

        if (error.name == 'JsonWebTokenError') {
            return res.status(401).json({
                sucess: false,
                message: 'Invalid token'
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error in authentication'
        });
    }
};

module.exports=auth;