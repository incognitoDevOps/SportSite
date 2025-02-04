const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const User = require('../models/User');
const Event = require('../models/Event');

// GET all events (public route)
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST create a new event (accessible to Admin)
router.post('/events', auth, async (req, res) => {
    try {
        // Check if user is admin
        const user = await User.findById(req.user.id);
        if (user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET specific event details
router.get('/events/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PUT update event details (accessible to Event Coordinator)
router.put('/events/:eventId', auth, async (req, res) => {
    try {
        // Check if user is event coordinator
        const user = await User.findById(req.user.id);
        if (user.role !== 'Coordinator') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE an event (accessible to Admin or Event Coordinator)
router.delete('/events/:eventId', auth, async (req, res) => {
    try {
        // Check if user is admin or event coordinator
        const user = await User.findById(req.user.id);
        if (user.role !== 'Admin' && user.role !== 'Coordinator') {
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

// POST search events based on user preferences (authenticated route)
router.post('/events/search', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Implement logic to search events based on user preferences
        // For example, you can search events by user's favorite sports, interests, etc.
        // const events = await Event.find({ category: { $in: user.interests } });

        // Dummy response for demonstration
        const events = await Event.find(); // Fetch all events for now
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PUT mark an event as interested (authenticated route)
router.put('/events/:eventId/interested', auth, async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Update the event's interested attendees list
        event.interested.push(req.user.id);
        await event.save();

        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET fetch attendees for an event
router.get('/events/:eventId/attendees', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId).populate('attendees', 'username');
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(event.attendees);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
