// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const history = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");

    history("/login");
  };
  const handleILog = () => {
    sessionStorage.removeItem("token");

    history("/login");
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={`nav-wrapper ${navOpen ? "nav-open" : ""}`}>
      <p id="title">CogniCode</p>
      <button className="nav-toggle" onClick={toggleNav}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <nav>
        <div className="nav-content">
          <ul className={`nav-list ${navOpen ? "nav-list-open" : ""}`}>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/practice" className="nav-link">
                Practice
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
            <button onClick={handleILog}>I-Login</button>

            <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
