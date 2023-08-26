// CoursesRoutes.js (Separate route component)
import React from "react";
import { Route, Routes } from "react-router-dom";

import Courses from "./Courses";
import CourseDetails from "./MongoBackendApi/courseDetails";

const CoursesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/:courseId" element={<CourseDetails />} />
      </Routes>
    </>
  );
};

export default CoursesRoutes;
