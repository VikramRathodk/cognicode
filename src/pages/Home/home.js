// import React from "react";
// import { useState } from "react";

// import Navbar from "../../components/navbar/navbar";
// import SearchBar from "./components/search/searchbar";
// import ImageBanner from "./components/Banner/banner";
// import Footer from "./components/Footer/footer";
// import CourseCardList from "../Home/components/popularcourse/CourseCardList";
// // import CourseListFromExternalApi from "../Course/ExternalApi/courseListFromExternalApi";
// import FAQsAndHelp from "./FAQ";

// const HomePage = () => {
//   const items = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Peach"];
//   const images = [
//     "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   ];
//   const [visibleCourses, setVisibleCourses] = useState(3);

//   const handleViewMore = () => {
//     setVisibleCourses(visibleCourses + 3);
//   };
//   const courses = [
//     {
//       name: "Introduction to Programming",
//       image:
//         "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

//       rating: 4.5,
//       duration: "6 weeks",
//     },
//     {
//       name: "Web Development Fundamentals",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

//       rating: 4.8,
//       duration: "8 weeks",
//     },
//     {
//       name: "Web Development Fundamentals",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

//       rating: 4.8,
//       duration: "8 weeks",
//     },
//     {
//       name: "Web Development Fundamentals",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",

//       rating: 4.8,
//       duration: "8 weeks",
//     },
//   ];

//   return (
//     <>
//       <div className="navBar">
//         <Navbar />
//       </div>
//       <div className="searchBar">
//         <SearchBar items={items} />
//       </div>

//       <div className="imageBanner">
//         <ImageBanner images={images} />
//       </div>

//       <div>
//         <p>Popular Course</p>
//       </div>
//       <div>
//         <CourseCardList courses={courses.slice(0, visibleCourses)} />
//         {visibleCourses < courses.length && (
//           <button className="btn-view-more" onClick={handleViewMore}>
//             View More
//           </button>
//         )}
//       </div>
//       <div>
//         <FAQsAndHelp />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import { useState } from "react";

import Navbar from "../../components/navbar/navbar";
import SearchBar from "./components/search/searchbar";
import Footer from "./components/Footer/footer";
import Banner from "./components/Banner/banner";

const HomePage = () => {
  const items = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Peach"];
  const images = [
    "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const courses = [
    {
      id: 1,
      name: "Introduction to Programming",
      image: "https://example.com/course1.jpg",
      rating: 4.5,
      duration: "6 weeks",
    },
    {
      id: 2,
      name: "Web Development Fundamentals",
      image: "https://example.com/course2.jpg",
      rating: 4.8,
      duration: "8 weeks",
    },
    {
      id: 3,
      name: "Advanced JavaScript",
      image: "https://example.com/course3.jpg",
      rating: 4.6,
      duration: "10 weeks",
    },
  ];

  const [visibleCourses, setVisibleCourses] = useState(3);

  const handleViewMore = () => {
    setVisibleCourses(visibleCourses + 3);
  };
  return (
    <>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="searchBar">
        <SearchBar items={items} />
      </div>
      <div className="imageBanner">
        <Banner images={images} />{" "}
      </div>
      <p>Popular Course</p>
      <Footer />
    </>
  );
};

export default HomePage;
