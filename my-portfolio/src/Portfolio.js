// Portfolio.js
import React from 'react';
import './Portfolio.css'; // Create this file for styling

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        {/* Add your content here */}
        <h1>Your Portfolio Content Goes Here</h1>
      </div>
    </div>
  );
}

export default Portfolio;
