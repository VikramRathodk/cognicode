// import React, { useState, useEffect } from 'react';
// import './ImageBanner.css';

// const ImageBanner = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div className="image-banner">
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index}`}
//             className={index === currentIndex ? 'active' : ''}
//           />
//         ))}
//       </div>
//       <div className="dots-container">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageBanner;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";

const Banner = ({ images }) => {
  return (
    <section className="banner">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index}`} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
