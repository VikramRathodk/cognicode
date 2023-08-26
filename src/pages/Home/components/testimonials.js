// Testimonials.js

import React from "react";
import "./testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      testimonial:
        "E-Learn Academy changed my life. The courses are top-notch and the instructors are fantastic!",
    },
    {
      id: 2,
      name: "Bob Smith",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      testimonial:
        "I never thought learning online could be this engaging. The content is well-structured and easy to follow.",
    },
    {
      id: 3,
      name: "roshani Sangle",
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      testimonial:
        "I never thought learning online could be this engaging. The content is well-structured and easy to follow.",
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
