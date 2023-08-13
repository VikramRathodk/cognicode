import React, { useState } from "react";
import axios from "axios";
import User from "../../../model/user";

import { useNavigate, Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [user, setUser] = useState(new User("", "", "", ""));
  const [selectedRole, setSelectedRole] = useState(""); // State variable for role selection

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRole === "instructor" || selectedRole === "student") {
      const userData = { ...user, role: selectedRole };

      axios
        .post("http://localhost:5477/auth/Login", userData)
        .then((res) => {
          const token = res.data.token;

          sessionStorage.setItem("token", token);

          if (selectedRole === "instructor") {
            history('/idashboard');
          } else if (selectedRole === "student") {
            history('/home');
          }
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } else {
      // Handle role not selected
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            required
          />
        </div>
        {/* Role selection */}
        <div className="form-group">
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
        </div>
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
      <Link to="/registration">Registration Page</Link>
    </div>
  );
};

export default Login;
