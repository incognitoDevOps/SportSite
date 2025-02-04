// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // interests: [String],
    preferences: [String], // Additional field for user preferences
    favoriteSports: [String], // Additional field for favorite sports
    pastEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    role: { type: String, enum: ['Admin', 'Coordinator', 'Moderator', 'User'], default: 'User' }
    // Other fields as needed
});

module.exports = mongoose.model('User', userSchema);
