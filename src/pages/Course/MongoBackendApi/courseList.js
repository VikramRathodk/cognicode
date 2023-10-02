import React, { useState, useEffect } from "react";
import axios from "axios";
import "./courseList.css";
import { NavLink } from "react-router-dom";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(3);
  const loadMoreStep = 3;

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          "http://localhost:5477/courses/fetchFromDb"
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourses();
  }, []);

  const handleViewMore = () => {
    setVisibleCourses(
      (prevVisibleCourses) => prevVisibleCourses + loadMoreStep
    );
  };

  return (
    <div className="course-list-container">
      <ul className="course-list">
        {courses.slice(0, visibleCourses).map((course) => (
          <div className="course-card" key={course._id}>
            <NavLink className="nav-items" to={`/course/${course.courseId}`}>
              <div className="course-image-container">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt={course.title}
                  className="course-image"
                />
              </div>

              <h2 className="course-title">{course.title}</h2>
              <div className="course-description">
                {course.description.substring(0, 50)}
              </div>
              <p className="course-price">Price: ${course.price}</p>
            </NavLink>
          </div>
        ))}
      </ul>
      {visibleCourses < courses.length && (
        <button
          className="btn btn-primary view-more-btn"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default CoursesList;
