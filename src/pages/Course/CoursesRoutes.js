// CoursesRoutes.js (Separate route component)
import React from "react";
import { Route, Routes } from "react-router-dom";

import Courses from "./Courses";

const CoursesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />

    </Routes>
  );
};

export default CoursesRoutes;
