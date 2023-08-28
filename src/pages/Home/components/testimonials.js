// Testimonials.js

import React from "react";
import "./testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mark Watney",
      rating: 5,
      image:
        "https://images.pexels.com/photos/567459/pexels-photo-567459.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "CogniCode Web Application changed my life. The courses are top-notch and the instructors are fantastic!",
    },
    {
      id: 2,
      name: "Alice Johnson",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "I never thought learning online could be this engaging. The content is well-structured and easy to follow.",
    },
    {
      id: 3,
      name: "Steve Harvy",
      rating: 4,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "The quality of the course content on Cognicode is outstanding. The videos are clear, and the supplementary materials are helpful.",
    },
    {
      id: 4,
      name: "David Butler",
      rating: 4,
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "The way the concepts are explained makes even complex topics feel understandable. It's evident that a lot of effort went into creating the content.",
    },
    {
      id: 5,
      name: "Monica Sharma",
      rating: 5,
      image:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "I appreciate how organized the platform is. It's straightforward to track my progress and access course materials.",
    },
    {
      id: 6,
      name: "Max Rhode",
      rating: 3,
      image:
        "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial:
        "Cognicode's interface is really user-friendly and intuitive. It's easy to navigate through the courses and find the resources I need.",
    },
    // Add more testimonials
  ];

  return (
    <div className="testimonials_mainContainer">
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img
              className="testimonial-image "
              src={testimonial.image}
              alt="none"
            />
            <p>{testimonial.testimonial}</p>
            <p className="testimonial-author">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index} className="star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
