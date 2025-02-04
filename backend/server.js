const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000; 
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database Is Connected Successfully....");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Sports Events API');
});

// Import and use routes
const userRouter = require('./routes/user');
app.use('/user', userRouter);

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);

const coordinatorRouter = require('./routes/coordinator');
app.use('/events', coordinatorRouter);

const reviewsRouter = require('./routes/reviews');
app.use('/reviews', reviewsRouter);

const ticketsRouter = require('./routes/tickets');
app.use('/tickets', ticketsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
