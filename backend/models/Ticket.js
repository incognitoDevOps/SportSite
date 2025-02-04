const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seatNumber: { type: String, required: true },
    status: { type: String, enum: ['Booked', 'Cancelled'], default: 'Booked' },
    // Other fields as needed
});

module.exports = mongoose.model('Ticket', ticketSchema);