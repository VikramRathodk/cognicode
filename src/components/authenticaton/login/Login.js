
import React, { useState } from "react";
import axios from "axios";
import User from "../../../model/user";

import { useNavigate, Link } from "react-router-dom";

import "./login.css";

const Login = () => {
    const [user, setUser] = useState(new User("", "", "", ""));

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending data to the login API i.e from front end to back end
    axios
      .post("http://localhost:5477/Login", user)
      .then((res) => {
        const token = res.data.token;
       
        sessionStorage.setItem("token", token);

        history('/home');
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="logincont">
    <div className="container">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          
          <input
            type="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/registration">Registration Page</Link>
    </div>
    </div>
  );
};

export default Login;
