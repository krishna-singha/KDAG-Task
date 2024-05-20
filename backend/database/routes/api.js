const express = require('express');
const { handleGetDayData, handleGetWeekData } = require('../controllers/urls');

// Create express router
const router = express.Router();

// Routes
router.get('/day/:id', handleGetDayData);
router.get('/week/:id', handleGetWeekData);

// Exporting the router
module.exports = router;