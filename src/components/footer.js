
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      &copy; 2023 CogniCode. All rights reserved. | <Link to="/privacy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
