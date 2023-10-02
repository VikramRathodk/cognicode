
import React from "react";
import { useState } from "react";

import Navbar from "../../components/navbar/navbar";
import SearchBar from "./components/search/searchbar";
import Footer from "./components/Footer/footer";
import Banner from "./components/Banner/banner";
import CourseList from "../Course/MongoBackendApi/courseList"
import Testimonials from "./components/testimonials";

import "./home.css"
import CodingChallenges from "./Practice/codingchallenges";
import { useLocation } from "react-router-dom";


const HomePage = () => {
  const items = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Peach"];
  const images = [
    "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
 

  const [visibleCourses, setVisibleCourses] = useState(3);

  const handleViewMore = () => {
    setVisibleCourses(visibleCourses + 3);
  };
  //Get the Student username from login 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get("name");

  return (
    <>
    <div className="main_home">
    <div className="studentName">
        {userName ? <p>Welcome, {userName}</p> : <p>Welcome, Guest</p>}
      </div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="searchBar">
        <SearchBar items={items} />
      </div>
      <div className="imageBanner">
        <Banner images={images} />{" "}
      </div>
      <section className="popular-courses-section">
        <h2>Popular Courses</h2>
        <div className="popular-courses">
          <CourseList  />
      
        </div>
      </section>
      
      <section className="testimonial-section">
        <h2>What Our Students Are Saying</h2>
        <Testimonials />
      </section>
      
      <Footer />
    </div>
    </>
  );
};

export default HomePage;
