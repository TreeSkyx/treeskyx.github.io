import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="projects">
      <div className="projects-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        <div className="content-container">
          <div className="projects-content">
            <div className="title">Projects</div>
            <div className="description">
              Here are some of my projects from the past:
            </div>
            <div className="project-list">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
