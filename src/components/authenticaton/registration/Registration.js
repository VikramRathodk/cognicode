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
  const [selectedRole, setSelectedRole] = useState(""); // State variable for role selection


  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRole === "instructor" || selectedRole === "student") {
      // Include selected role in user data
      const userData = { ...user, role: selectedRole };

      // Sending data to the registration API
      axios
        .post("http://localhost:5477/auth/Register", userData)
        .then(() => {
          history("/Login");
        })
        .catch((error) => {
          console.error("Registration failed:", error.response.data);
          setRegistrationStatus({
            success: false,
            error: "Registration failed. Please try again.",
          });
        });

      setUser(new User("", "", "", ""));
    } else {
      // Handle role not selected
    }
  };

  return (
    <div className="container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
  );
};

export default Registration;



 