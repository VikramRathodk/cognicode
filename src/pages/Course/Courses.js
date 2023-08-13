import React from "react";
import Navbar  from "../../components/navbar/navbar";

import CourseTabSwitcher from "./tabSwitcher";

const Courses = () => {
  return (
    <>
       <div>
          <Navbar/>
        </div>
     
      <div>
      <CourseTabSwitcher/>
      </div>
     
    </>
  );
};

export default Courses;
