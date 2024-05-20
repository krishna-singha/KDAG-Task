require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const staticRouter = require('./routes/static');
const apiRouter = require('./routes/api');

const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database', err);
    }
}
connectToMongoDB();

// Routes
app.use('/', staticRouter);
app.use('/api', apiRouter);


// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
