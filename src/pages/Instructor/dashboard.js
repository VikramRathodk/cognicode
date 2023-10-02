import React, { useState } from "react";
import "./dashboard.css";
import CourseForm from "./CourseForm";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Separate components for each task
function ManageCourses() {
  return <div>Manage Courses Component</div>;
}

function ViewEnrollments() {
  return <div>View Enrollments Component</div>;
}

function Analytics() {
  return <div>Analytics Component</div>;
}

export default function Dashboard() {
  const [activeTask, setActiveTask] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get("name");

  const handleSidebarCardClick = (taskName) => {
    setActiveTask(taskName);
  };
  // Modify your handleLogout function in Dashboard.js
  const history = useNavigate();

  const handleLogout = async () => {
    // Clear the token from client-side storage 
    sessionStorage.removeItem("token");

    // Redirect the user to the login page
    history("/login");
  };

  const renderContent = () => {
    switch (activeTask) {
      case "manage-courses":
        return <ManageCourses />;
      case "view-enrollments":
        return <ViewEnrollments />;
      case "analytics":
        return <Analytics />;
      default:
        return (
          <div className="card">
            <h3>Create New Course</h3>
            <CourseForm instructorEmail={userName} />
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-heading">Instructor Dashboard</h2>

        <h2>{userName ? <p>Welcome, {userName}</p> : <p>Welcome, Guest</p>}</h2>

        <div
          className="card sidebar-card"
          onClick={() => handleSidebarCardClick("manage-courses")}
        >
          <h4>Manage Courses</h4>
        </div>
        <div
          className="card sidebar-card"
          onClick={() => handleSidebarCardClick("create-course")}
        >
          <h4>Create Course</h4>
        </div>
        <div
          className="card sidebar-card"
          onClick={() => handleSidebarCardClick("view-enrollments")}
        >
          <h4>View Enrollments</h4>
        </div>
        <div
          className="card sidebar-card"
          onClick={() => handleSidebarCardClick("analytics")}
        >
          <h4>Analytics</h4>
        </div>
        <div className="card sidebar-card logout-card" onClick={handleLogout}>
          <h4>Logout</h4>
        </div>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

// Dashboard.js

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Dashboard() {
//   const [courseData, setCourseData] = useState({
//     courseName: '',
//     description: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCourseData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5477/courses/add', courseData);
//       console.log(response.data); // Handle success
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add a Course</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="courseName"
//           value={courseData.courseName}
//           onChange={handleChange}
//           placeholder="Course Name"
//         />
//         <textarea
//           name="description"
//           value={courseData.description}
//           onChange={handleChange}
//           placeholder="Course Description"
//         />
//         <button type="submit">Add Course</button>
//       </form>
//     </div>
//   );
// }
