const express = require("express");
const Course = require("../models/Course");
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
      const newCourse = new Course(req.body);
      await newCourse.save();
  
      console.log('New course created:', newCourse);
      res.status(201).json({ message: 'Course created successfully' });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: 'An error occurred while creating the course' });
    }
  });


  router.get('/fetchFromDb', async (req, res) => {
    try {
      const courses = await Course.find(); // Assuming 'Course' is your Mongoose model
      res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'An error occurred while fetching courses' });
    }
  });
  
module.exports = router;
