import React, { useState, useEffect } from "react";
import axios from "axios";
import "./courseList.css";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [expandedCourses, setExpandedCourses] = useState([]);
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

  const convertToEmbedUrl = (videoUrl) => {
    const videoId = videoUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleViewMore = () => {
    setVisibleCourses(
      (prevVisibleCourses) => prevVisibleCourses + loadMoreStep
    );
  };

  const handleExpandCourse = (courseId) => {
    setExpandedCourses((prevExpandedCourses) =>
      prevExpandedCourses.includes(courseId)
        ? prevExpandedCourses.filter((id) => id !== courseId)
        : [...prevExpandedCourses, courseId]
    );
  };

  return (
    <div className="course-list-container">
        {visibleCourses < courses.length && (
          <button className=" btn btn-primary view-more-btn" onClick={handleViewMore}>
            View More
          </button>
          
        )}
   

      <ul className="course-list">
        {courses.slice(0, visibleCourses).map((course) => (
          <li key={course._id} className="course-card">
            <div className="course-image-container">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt={course.title}
                className="course-image"
              />
            </div>
            <div className="course-header">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-price">Price: ${course.price}</p>
              <p className="course-duration">
                Duration: {course.duration} hours
              </p>
              <button
                className={`btn ${
                  expandedCourses.includes(course._id)
                    ? "btn-secondary"
                    : "btn-primary"
                }`}
                onClick={() => handleExpandCourse(course._id)}
              >
                {expandedCourses.includes(course._id)
                  ? "Collapse Videos"
                  : "See Videos"}
              </button>
            </div>
            {expandedCourses.includes(course._id) && (
              <div className="video-list">
                {course.videos.map((videoUrl, index) => {
                  const embedUrl = convertToEmbedUrl(videoUrl);
                  return (
                    <div key={index} className="video-item">
                      <iframe
                        title={`Video - ${course.title}`}
                        width="320"
                        height="180"
                        src={embedUrl}
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
