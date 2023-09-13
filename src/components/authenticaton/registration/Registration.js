// Registration.js
import React, { useState } from "react";
import User from "../../../model/user";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./registration.css";

const Registration = () => {
  const [user, setUser] = useState(new User("", "", "", ""));
  const [registrationStatus, setRegistrationStatus] = useState({
    success: false,
    error: "",
  });
  const [selectedRole, setSelectedRole] = useState("");


  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Registration Details:", user);

    //sending data to api i.e from front end to back end
    if (selectedRole === "instructor" || selectedRole === "student") {
      // Include selected role in user data
      const userData = { ...user, role: selectedRole };

    
   
     if (!selectedRole) {
      // Handle when the role is not selected
      setRegistrationStatus({
        success: false,
        error: "Please select a role.",
      });
      return;
    }

    // Sending data to the registration API
    axios
      .post("http://localhost:5477/auth/Register", userData)
      .then(() => {
        history("/Login"); // Use lowercase "/login" instead of "/Login"
      })
      .catch((error) => {
        console.error("Registration failed:", error.response.data);
        setRegistrationStatus({
          success: false,
          error: "Registration failed. Please try again.",
        });
      });
    };
    };

  return (
    <div className="mainc">
    <div className="container">
      <h2>Hello User,</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            required
          />
        </div>
        <label>Select Role:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
        <button type="submit">Register</button>
      </form>
      {registrationStatus.error && <div>{registrationStatus.error}</div>}
      <Link to="/login">Login Page</Link>
    </div>
    </div>
  );
};

export default Registration;
