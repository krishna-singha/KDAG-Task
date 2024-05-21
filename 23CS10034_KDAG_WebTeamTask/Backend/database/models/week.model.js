const mongoose = require('mongoose');

// Creating a week schema
const weekSchema = new mongoose.Schema({
    week: Number,
    title: String,
    topics: [Object],
    reading: [String],
    assignments: [String],
    resources: [String]
  });

// Creating week Model
const weekModel = mongoose.model('week-contents', weekSchema);

// Exporting the week model
module.exports = weekModel;