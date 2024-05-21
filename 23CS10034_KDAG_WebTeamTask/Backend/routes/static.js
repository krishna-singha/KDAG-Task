const express = require('express');

// Create express router
const router = express.Router();

// Routes
router.get('/', async (req, res) => {
    return res.send('Hello World');
});

// Exporting the router
module.exports = router;