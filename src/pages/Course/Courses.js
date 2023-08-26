import React from "react";
import Navbar from "../../components/navbar/navbar";

import CourseTabSwitcher from "./tabSwitcher";
import "./course.css";

const Courses = () => {
  return (
    <>
     
        <div>
          <Navbar />
        </div>

        <div className="CourseTabSwitcher">
          <CourseTabSwitcher />
        </div>
   
    </>
  );
};

export default Courses;
