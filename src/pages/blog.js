import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Loader from 'react-loader-spinner'; 
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './blog.css';

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        {!isLoaded && (
          <div className="loading-spinner">
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            <p>Loading...</p>
          </div>
        )}

        <iframe
          src="https://procodehelp.blogspot.com"
          title="blog"
          className={`video-iframe ${isLoaded ? 'loaded' : ''}`}
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Blog;
