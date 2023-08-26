import React, { useState } from "react";
import DiscussionBoard from "./discussion";
import Assignments from "./assignment";
import Quizzes from "./quizes";
import Navbar from "../../../components/navbar/navbar";
import "./practice.css"; 
import CodingChallenges from "./codingchallenges";

const Practice = () => {
  const [activeTab, setActiveTab] = useState("quizzes");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="tab-switcher">
        <button
          className={activeTab === "quizzes" ? "active" : ""}
          onClick={() => handleTabChange("quizzes")}
        >
          Quizzes
        </button>
        <button
          className={activeTab === "assignments" ? "active" : ""}
          onClick={() => handleTabChange("assignments")}
        >
          Assignments
        </button>
        <button
          className={activeTab === "Coding" ? "active" : ""}
          onClick={() => handleTabChange("Coding")}
        >
          Assignments
        </button>
      </div>
      <div className="content">
        {activeTab === "assignments" && <Assignments />}
        {activeTab === "quizzes" && <Quizzes  />}
        {activeTab === "coding" && <CodingChallenges  />}
      </div>
      
    </>
  );
};

export default Practice;


//remainder 

//coding Challenge  are not visible 
//shift the codingchanlange folder from home page to practice page


