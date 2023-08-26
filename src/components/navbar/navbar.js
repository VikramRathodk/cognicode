import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    history("/login");
  };

  return (
    <>
      <div className="nav-wrapper">
        <p id="title">CogniCode</p>
        <nav>
          <div>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/course" className="nav-link">
                  Courses
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Practice" className="nav-link">
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
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
