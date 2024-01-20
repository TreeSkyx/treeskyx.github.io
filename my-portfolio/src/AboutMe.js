// AboutMe.js
import React from "react";
import "./AboutMe.css"; // Create this file for styling
// import profilePicture from './assets/TF_img.JPG'; // Replace with the actual path to your picture

const AboutMe = () => {

  const githubProfileUrl = "https://github.com/TreeSkyx";
  const linkedinProfileUrl = "https://www.linkedin.com/in/wiroon-somphaothong/"; // Replace with your LinkedIn profile URL
  const gmailAddress = "mailto:wiroom.som@gmail.com"

  return (
    <div className="about-me">
      <div className="about-me-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        <div className="content-container">
          <div className="about-me-content">
            <div className="title">
              Hello, It's Me
              <br />
              Wiroon Somphaothong
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
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
                <i className="far fa-envelope"></i> {/* You can use a different icon class if needed */}
              </a>
            </div>
          </div>
          <div className="profile-picture-container">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7489cf6-f701-4e8e-a6e7-08c8924ef45b/desffdw-54e57546-2746-4bf3-aaf4-7f8f4bdd9c6a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3NDg5Y2Y2LWY3MDEtNGU4ZS1hNmU3LTA4Yzg5MjRlZjQ1YlwvZGVzZmZkdy01NGU1NzU0Ni0yNzQ2LTRiZjMtYWFmNC03ZjhmNGJkZDljNmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5IW5rmL6OPxmFWT2RbplfmOL2ZWpcNvi1OR29EfGg8M"
              alt="Profile"
              className="profile-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
