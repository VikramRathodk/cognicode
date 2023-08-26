import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./courseDetails.css"; 

const CourseDetails = () => {
  const params = useParams();
  const [course, setCourse] = useState();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(
          `http://localhost:5477/courses/fetchFromDb/${params.courseId}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    }
    fetchCourse();
  }, [params.courseId]);

  return (
    <div className="course-details-container">
      {course ? (
        <div className="course-details">
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
          <p className="course-price">Price: {course.price}</p>
          <p className="course-videos">Videos:</p>
          <ul className="video-list">
            {course.videos.map((video, index) => (
              <li key={index}>
                <div className="video-wrapper">
                  <iframe
                    src={video}
                    title={`Video ${index + 1}`}
                    className="video-iframe"
                    allowFullScreen
                  ></iframe>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetails;
