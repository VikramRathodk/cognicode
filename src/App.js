import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./components/authenticaton/registration/Registration";
import Login from "./components/authenticaton/login/Login";
import Home from "./pages/Home/home";
import LandingPage from "./pages/landingpage";
import About from "./pages/aboutus";
import Blog from "./pages/blog";
import Practice from "./pages/Home/Practice/practice";
import Contact from "./pages/contact";
import Dashboard from "./pages/Instructor/dashboard";
import CoursesRoutes from "./pages/Course/CoursesRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login />} />

            <Route path="/Registration" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/idashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/*" element={<CoursesRoutes />} />
          </Routes>
        </Router>
    
      </div>
    </>
  );
}

export default App;
