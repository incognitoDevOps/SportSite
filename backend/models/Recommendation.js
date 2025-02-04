const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recommendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    // Other fields as needed
});

module.exports = mongoose.model('Recommendation', recommendationSchema);