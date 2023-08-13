import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./courseListFromExternalApi.css";
import CourseDetails from "./courseDetials";

const CourseListFromExternalApi = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const baseUrl = "https://www.udemy.com";

  useEffect(() => {
    axios
      .get("http://localhost:5477/external-api/course")
      .then((response) => {
        setCourses(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  const handleViewMore = () => {
    setVisibleCourses(visibleCourses + 4);
  };

  return (
    <>
      <div className="course-list-external-api">
        <ul className="course-list">
          {courses.slice(0, visibleCourses).map((course) => (
            <li key={course.id} className="course-card">
              <div className="course-image-container">
                <img
                  src={course.image_240x135}
                  alt={course.title}
                  className="course-image"
                />
              </div>
              <div className="course-info">
                <h2 className="course-title">{course.title}</h2>

                <p className="course-details">Price: {course.price}</p>
                <a
                  href={baseUrl + course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enroll-link"
                >
                  <button className="btn btn-enroll">Enroll</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
        {visibleCourses < courses.length && (
          <button className="btn btn-view-more" onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default CourseListFromExternalApi;
