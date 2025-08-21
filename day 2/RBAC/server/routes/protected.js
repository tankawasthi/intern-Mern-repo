const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Make all routes protected (Fixed: router.use, not router.subscribe)
router.use(protect);

// Get protected resource for all authenticated users
router.get('/', (req, res) => {
    res.status(200).json({
        success: true, // Fixed: was 'sucess'
        message: 'Accessed protected route',
        user: req.user
    });
});

// Get admin resource - only for admins
router.get('/admin', authorize('admin'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Accessed admin route',
        user: req.user
    });
});

// Get moderator resource - for moderators and admins
router.get('/moderator', authorize('moderator', 'admin'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Accessed moderator route',
        user: req.user
    });
});

module.exports = router;