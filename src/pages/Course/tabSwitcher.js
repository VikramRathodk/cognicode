import React, { useState } from "react";
import CoursesList from "./MongoBackendApi/courseList";
import CourseListFromExternalApi from "./ExternalApi/courseListFromExternalApi";
import "./tabSwitcher.css";

const CourseTabSwitcher = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="course-tab-switcher">
      <div className="tabs">
        
        <button
          className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Our Courses
        </button>
        <button
          className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          External Courses
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 ? <CoursesList /> : <CourseListFromExternalApi />}
      </div>
    </div>
  );
};

export default CourseTabSwitcher;
