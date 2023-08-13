// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const multer = require("multer");

// const axios = require("axios");

// const app = express();
// const port = 5477;

// // Middleware
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1/cognicodeDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to Database");
//   });

// const userSchema = new mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const User = mongoose.model("Users", userSchema);

// app.post("/Register", async (req, res) => {
//   try {
//     const { firstname, lastname, email, password, role } = req.body; // Include 'role' in request body

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.send({ message: "userexits" });
//     }

//     // Hash the password before saving it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       firstname,
//       lastname,
//       email,
//       password: hashedPassword,
//       role, // Save 'role' in the database
//     });

//     const savedUser = await newUser.save();
//     return res.status(201).json({
//       message: "New User Added to Database!",
//       user: savedUser,
//     });
//   } catch (error) {
//     console.error("Error while registering user:", error);
//     return res.status(500).json({ message: "Internal server error." });
//   }
// });

// app.post("/Login", async (req, res) => {
//   try {
//     const { email, password, role } = req.body; // Include 'role' in request body

//     // Check if the user exists and has the specified role
//     const user = await User.findOne({ email, role });
//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "Invalid email, role, or password." });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res
//         .status(401)
//         .json({ message: "Invalid email, role, or password." });
//     }

//     return res
//       .status(200)
//       .json({ message: "Login successful!", token: "token", role: user.role }); // Include 'role' in response
//   } catch (error) {
//     console.error("Error while authenticating user:", error);
//     return res.status(500).json({ message: "Internal server error." });
//   }
// });

// //getcourse Api
// app.get("/course", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://www.udemy.com/api-2.0/courses/learn/lecture/",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       Authorization:
//         "Basic QWtCblpnVXNHYUdBNFZUSkxHNDNvbnFSZUFYTGR2TDVRNmZiNXMxTjpyc2p2TllzWXdPc1dNVG5NcE16TnlGODRoMzZOTTV4cjN1eDhzeUhzRDF1MkNDNkxmZno4UjJFZmpxMjQ1UWFEVVVka2JEcDB2UGd0QlhSSk82Mkl0UzA4cnlXSEhSNGxBM1IydHF6aDdnQUkxaVpqeGRRWDk5TTBJS0lqY0doSQ==",
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     res.send(JSON.stringify(response.data));
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred.");
//   }
// });

// //course details
// async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://www.udemy.com/api-2.0/courses/{response.data.results.url}/",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       Authorization:
//         "Basic QWtCblpnVXNHYUdBNFZUSkxHNDNvbnFSZUFYTGR2TDVRNmZiNXMxTjpyc2p2TllzWXdPc1dNVG5NcE16TnlGODRoMzZOTTV4cjN1eDhzeUhzRDF1MkNDNkxmZno4UjJFZmpxMjQ1UWFEVVVka2JEcDB2UGd0QlhSSk82Mkl0UzA4cnlXSEhSNGxBM1IydHF6aDdnQUkxaVpqeGRRWDk5TTBJS0lqY0doSQ==",
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     res.send(JSON.stringify(response.data));
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred.");
//   }
// };



// // Define a course schema
// const CourseSchema = new mongoose.Schema({
//   courseName: String,
//   description: String,
// });

// const Course = mongoose.model('Course', CourseSchema);

// // Define routes
// app.post('/idashboard/courses', async (req, res) => {
//   try {
//     const { courseName, description } = req.body;

//     const newCourse = new Course({
//       courseName,
//       description,
//     });

//     await newCourse.save();

//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error);
//     res.status(500).json({ error: 'Failed to add course' });
//   }
// });


// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5477;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1/cognicodeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Database");
});

// Include routes
const authRoutes = require("./routes/auth");
const coursesRoutes = require("./routes/courses");
const externalApiRoutes = require("./routes/externalApi.js");

app.use("/auth", authRoutes);
app.use("/courses", coursesRoutes);
app.use("/external-api", externalApiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
