const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const Event = require('../models/Event');

// GET route to fetch events managed by the coordinator
router.get('/events', auth, async (req, res) => {
    try {
        // Check if the authenticated user is a coordinator
        if (req.user.role !== 'Coordinator') {
            return res.status(403).json({ message: 'Access denied. Not authorized as a coordinator.' });
        }

        // Fetch events managed by the coordinator based on their ID
        const events = await Event.find({ coordinator: req.user.id });
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
