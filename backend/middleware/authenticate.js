const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticate(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ message: 'Invalid token.' });
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}

module.exports = authenticate;
