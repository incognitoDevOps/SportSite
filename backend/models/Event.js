// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    ticketPrice: { type: Number, required: true },
    // Additional fields for geolocation data
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    // Other fields as needed
});

module.exports = mongoose.model('Event', eventSchema);
