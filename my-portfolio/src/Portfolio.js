// Portfolio.js
import React from 'react';
import './Portfolio.css'; // Create this file for styling
import profilePicture from './assets/TF_img.JPG'; // Replace with the actual path to your picture

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        <div className="content-container">
          <div className="portfolio-content">
            <h1>Hello, It's Me</h1>
            <h1>Wiroon Somphaothong</h1>
            <h1>I'm FrontEnd developer</h1>
            <button className="about-me-button">About Me</button>
          </div>
          <div className="profile-picture-container">
            <img src={profilePicture} alt="Profile" className="profile-picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
