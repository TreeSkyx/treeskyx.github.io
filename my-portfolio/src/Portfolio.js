// Portfolio.js
import React from "react";
import "./Portfolio.css"; // Create this file for styling
import profilePicture from "./assets/TF_img.JPG"; // Replace with the actual path to your picture

const Portfolio = () => {
  const githubProfileUrl = "https://github.com/TreeSkyx";
  const linkedinProfileUrl = "https://www.linkedin.com/in/wiroon-somphaothong/"; // Replace with your LinkedIn profile URL
  const gmailAddress = "mailto:wiroom.som@gmail.com";

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
            <div className="title">
              Hi!
              <br />
              I'am <span style={{ color: "#1869FF" }}>Wiroon</span>
              <br />
              Web Developer
            </div>
            <div className="subtitle">
              Hi, I'm Wiroon Somphaothong, a Computer Engineering student at
              King Mongkut's Institute of Technology Ladkrabang. I'm passionate
              about Web development and Embedded Engineering.
            </div>
            <button className="about-me-button">About Me</button>
            <div className="homepage-social">
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={gmailAddress} target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope"></i>{" "}
              </a>
            </div>
          </div>
          <div className="profile-picture-container">
            <img
              src={profilePicture}
              alt="Profile"
              className="profile-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
