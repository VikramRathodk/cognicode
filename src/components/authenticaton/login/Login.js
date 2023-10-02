import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../../../model/user";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState(new User("", "", ""));
  const [selectedRole, setSelectedRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const history = useNavigate();

  useEffect(() => {
    // Check if a user is already authenticated
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken) {
        if (decodedToken.role === "instructor") {
          history(`/idashboard?name=${decodedToken.email}`);
        } else if (decodedToken.role === "student") {
          history(`/home?name=${decodedToken.email}`);
        }
      }
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRole === "instructor" || selectedRole === "student") {
      setLoading(true);

      const userData = { ...user, role: selectedRole };

      axios
        .post("http://localhost:5477/auth/Login", userData)
        .then((res) => {
          const token = res.data.token;

          // Store the token in sessionStorage
          sessionStorage.setItem("token", token);

          // Decode the token to get user information
          const decodedToken = jwt_decode(token);

          if (selectedRole === "instructor") {
            history(`/idashboard?name=${decodedToken.email}`);
          } else if (selectedRole === "student") {
            history(`/home?name=${decodedToken.email}`);
          }
        })
        .catch((error) => {
          setError("Login failed. Please check your credentials.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("Please select a role.");
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter Password"
            required
          />
        </div>
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <Link to="/registration">Registration Page</Link>
    </div>
  );
};

export default Login;
