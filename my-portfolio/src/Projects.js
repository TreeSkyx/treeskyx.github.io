import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ title, description, tech, link }) => {
  // Function to get the corresponding icon based on the technology
  const getIcon = (tech) => {
    switch (tech) {
      case "JavaScript":
        return (
          <img
            src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
            alt="JavaScript"
            width={"30px"}
            height={"30px"}
          />
        );
      case "React":
        return <img src="react-icon.png" alt="React" />;
      default:
        return null;
    }
  };

  return (
    <div className="project">
      <div className="project-icon">{getIcon(tech)}</div>
      <div className="project-title">{title}</div>
      <div className="project-description">{description}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">
        <span className="link-icon"><FaExternalLinkAlt /></span> View Project
      </a>
    </div>
  );
};

const Projects = () => {
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
              <Project
                title="Project 1"
                description="Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
                tech="JavaScript"
                link="https://www.example1.com"
              />
              <Project
                title="Project 2"
                description="Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
                tech="JS"
                link="https://www.example2.com"
              />
              <Project
                title="Project 3"
                description="Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima."
                tech="JS"
                link="https://www.example3.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
