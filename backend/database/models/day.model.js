const mongoose = require('mongoose');

// Creating a day schema
const daySchema = new mongoose.Schema({
    day: Number,
    title: String,
    topics: [Object],
    reading: [String],
    assignments: [String],
    resources: [String]
});

// Creating day Model
const dayModel = mongoose.model('day-contents', daySchema);

// Exporting the day model
module.exports = dayModel;