const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String, 
    required: true,
    unique: true, 
  },
  instructorEmail: {
    type: String, 
    required: true,
    unique: true, 
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videos: {
    type: [String],
    default: [],
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
