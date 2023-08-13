const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();


    
router.post("/Register", async (req, res) => {
      try {
        const { firstname, lastname, email, password, role } = req.body; // Include 'role' in request body
    
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.send({ message: "userexits" });
        }
    
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          firstname,
          lastname,
          email,
          password: hashedPassword,
          role, // Save 'role' in the database
        });
    
        const savedUser = await newUser.save();
        return res.status(201).json({
          message: "New User Added to Database!",
          user: savedUser,
        });
      } catch (error) {
        console.error("Error while registering user:", error);
        return res.status(500).json({ message: "Internal server error." });
      }
    });
    
    router.post("/Login", async (req, res) => {
      try {
        const { email, password, role } = req.body;
    
        // Check if the user exists and has the specified role
        const user = await User.findOne({ email, role });
        if (!user) {
          return res
            .status(401)
            .json({ message: "Invalid email, role, or password." });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res
            .status(401)
            .json({ message: "Invalid email, role, or password." });
        }
    
        return res
          .status(200)
          .json({ message: "Login successful!", token: "token", role: user.role,email:user.email }); 
      } catch (error) {
        console.error("Error while authenticating user:", error);
        return res.status(500).json({ message: "Internal server error." });
      }
    });
    router.post("/Logout", (req, res) => {
      
        return res.status(200).json({ message: "Logout successful!" });
      });
      

module.exports = router;
