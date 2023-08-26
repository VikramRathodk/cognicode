// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    history("/login");
  };

  return (
    <div className="container">
      <h2>Welcome to the Homepage!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
