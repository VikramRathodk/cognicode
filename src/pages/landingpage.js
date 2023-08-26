import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="content-container">
      <div className="content">
        <TypeAnimation
          className="cogni-code"
          style={{
            fontSize: "50px",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          }}
          sequence={["Learn and Grow With Cogni Code!", 800, ""]}
          repeat={Infinity}
        />
        <p>Navigate the Digital World with CogniCode's Expertise</p>
        <div className="moto">
          Our mission is to empower individuals who are eager to enhance their
          skills and knowledge by providing expertly crafted eLearning
          experiences. Through a diverse range of courses, we ensure that
          learning remains flexible, convenient, and effective. Join our
          thriving community and embark on a journey of continuous growth with
          CogniCode.{" "}
        </div>
        <br />
        <Link to="/login" className="login-button">
          <button>LOGIN</button>
        </Link>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default LandingPage;
