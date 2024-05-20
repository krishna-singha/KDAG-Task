const express = require('express');
const { handleGetDayData, handleGetWeekData } = require('../controllers/urls');

// Create express router
const router = express.Router();

// Routes
router.get('/data/day/:id', handleGetDayData);
router.get('/data/week/:id', handleGetWeekData);

// Exporting the router
module.exports = router;