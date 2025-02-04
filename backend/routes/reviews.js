const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const Event = require('../models/Event');
const Review = require('../models/Review');

// GET fetch reviews for a specific event
router.get('/events/:eventId/reviews', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const reviews = await Review.find({ event: req.params.eventId });
        res.json(reviews);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST add a review for an event (authenticated route)
router.post('/events/:eventId/reviews', auth, async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Create a new review object
        const newReview = new Review({
            user: req.user.id,
            event: req.params.eventId,
            text: req.body.text
        });

        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// PUT update a review (accessible to Moderator)
router.put('/events/:eventId/reviews/:reviewId', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Check if user is a moderator
        const user = await User.findById(req.user.id);
        if (user.role !== 'Moderator') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        review.text = req.body.text;
        await review.save();
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE delete a review (accessible to Moderator)
router.delete('/events/:eventId/reviews/:reviewId', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Check if user is a moderator
        const user = await User.findById(req.user.id);
        if (user.role !== 'Moderator') {
            return res.status(403).json({ message: 'Access denied. Not authorized.' });
        }

        await review.remove();
        res.json({ message: 'Review deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
