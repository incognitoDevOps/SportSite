const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const User = require('../models/User');

// GET user profile
router.get('/profile', auth, async (req, res) => {
    try {
        // Fetch user profile based on user id from JWT token
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PUT update user profile
router.put('/profile/update', auth, async (req, res) => {
    try {
        // Update user profile based on user id from JWT token
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
