const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const User = require('../models/User');
const Event = require('../models/Event');

// GET fetch all users (accessible to Admin)
router.get('/admin/users', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE delete a user (accessible to Admin)
router.delete('/admin/users/:userId', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET fetch all events (accessible to Admin)
router.get('/admin/events', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE delete an event (accessible to Admin)
router.delete('/admin/events/:eventId', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
