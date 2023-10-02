import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import "./courseDetails.css"; 
import { useLocation } from "react-router-dom";


const CourseDetails = () => {
  const params = useParams();
  const [course, setCourse] = useState();
  const [isEnrolled, setIsEnrolled] = useState(false); // Track enrollment status

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get("name");

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(
          `http://localhost:5477/courses/fetchFromDb/${params.courseId}`
        );
        const videos = response.data.videos.map((video) => {
          const videoId = new URL(video).searchParams.get("v");
          return `https://www.youtube.com/embed/${videoId}`;
        });
        setCourse({ ...response.data, videos });
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    }
    fetchCourse();
  }, [params.courseId]);

  // Function to handle enrollment and save data to the database
  const handleEnroll = async () => {
    try {
      // Perform enrollment operation and save user and instructor data to the database
      // You can make a POST request to your API to handle this operation
      // Replace the URL with your actual API endpoint
      await axios.post("http://localhost:5477/enroll", {
        courseId: course.courseId,
        userId: userName,
        instructorId:course.instructorEmail ,
      });

      // Set the enrollment status to true
      setIsEnrolled(true);
    } catch (error) {
      console.error("Error enrolling in the course:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="course-details-container">
        {course ? (
          <div className="course-details-wrapper">
            <div className="course-details-left">
              <h2 className="course-title">{course.title}</h2>
              <div className="course-metadata">
                <span className="course-duration">
                  {course.duration} duration
                </span>
                <span className="course-rating">{course.rating} 3 stars</span>
                <span>{course.instructorEmail}</span>
              </div>

              <h3>Course Description:</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-structure">
                <h3>Course Structure:</h3>
                <ul className="video-list">
                  {isEnrolled && course.videos.map((video, index) => (
                    <li key={index} className="video-item">
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
            </div>
            <div className="course-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{course.title}</h4>
                  <p>Price: {course.price}</p>
                  {isEnrolled ? (
                    // If enrolled, show the videos
                    <button className="buy-now-button">Enrolled</button>
                  ) : (
                    // If not enrolled, show the "Enroll Now" button
                    <button className="buy-now-button" onClick={handleEnroll}>
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default CourseDetails;
