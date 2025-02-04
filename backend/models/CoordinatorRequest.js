// models/CoordinatorRequest.js
const mongoose = require('mongoose');

const coordinatorRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventDetails: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        location: { type: String, required: true },
        ticketPrice: { type: Number, required: true },
        // Other event details as needed
    },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    // Other fields as needed
});

module.exports = mongoose.model('CoordinatorRequest', coordinatorRequestSchema);
