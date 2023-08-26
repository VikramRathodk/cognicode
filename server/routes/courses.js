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

  router.get('/fetchFromDb/:courseId', async (req, res) => {
    try {
      // Get the courseId from URL parameter
      const courseId = req.params.courseId; 
      const course = await Course.findOne({ courseId }); 
  
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      res.status(200).json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: 'An error occurred while fetching the course' });
    }
  });

  
module.exports = router;
