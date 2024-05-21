require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create express app
const app = express();

// Import routes
const staticRouter = require('./database/routes/static');
const apiRouter = require('./database/routes/api');

// Constants
const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Middleware
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // If you need to handle cookies
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
