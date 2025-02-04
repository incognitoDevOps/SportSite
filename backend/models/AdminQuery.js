// models/AdminQuery.js
const mongoose = require('mongoose');

const adminQuerySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    query: { type: String, required: true },
    response: { type: String },
    resolved: { type: Boolean, default: false },
    // Other fields as needed
});

module.exports = mongoose.model('AdminQuery', adminQuerySchema);
