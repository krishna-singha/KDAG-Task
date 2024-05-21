const dayModel = require('../database/models/day.model');
const weekModel = require('../database/models/week.model');

// Function to handle GET request for day data
const handleGetDayData = async (req, res) => {
    try {
        const days = await dayModel.findOne({ day: req.params.id });
        const maximumDays = await dayModel.countDocuments();
        
        if (!days) {
            return res.status(404).send({ message: 'Day not found' });
        }

        res.status(200).send({ courseData: days, maxLength: maximumDays });
    }
    catch (error) {
        console.error("Error getting data:", error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

// Function to handle GET request for week data
const handleGetWeekData = async (req, res) => {
    try {
        const weeks = await weekModel.findOne({ week: req.params.id });
        const maximumWeeks = await weekModel.countDocuments();
        
        if (!weeks) {
            return res.status(404).send({ message: 'Week not found' });
        }

        res.status(200).send({ courseData: weeks, maxLength: maximumWeeks });
    }
    catch (error) {
        console.error("Error getting data:", error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

// Exporting the functions
module.exports = {
    handleGetDayData,
    handleGetWeekData,
};