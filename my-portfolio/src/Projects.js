import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ title, description, tech, link }) => {
  const getIcon = (tech) => {
    switch (tech) {
      case "JS":
        return (
          <img
            src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
            alt="JavaScript"
            width={"35px"}
            height={"35px"}
          />
        );
      case "MATLAB":
        return (
            <img
            src="https://tsgdoc.socsci.ru.nl/images/2/21/Matlab_Logo.png"
            alt="MATLAB"
            width={"35px"}
            height={"35px"}
          />
        );
        case "C":
        return (
            <img
            src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/c@0.0.3/c_256x256.png"
            alt="C"
            width={"35px"}
            height={"35px"}
          />
        );
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
                title="Teacher Assistant Managing System"
                description="Website for ercuit and manage teacher assistant in class."
                tech="JS"
                link=""
              />
              <Project
                title="Monitoring and Management System of Flood and Drought Conditions"
                description="Create system and develop model for water level and flow rate prediction. "
                tech="MATLAB"
                link="https://github.com/TreeSkyx/TGR17_H2O"
              />
              <Project
                title="Portfolio Website"
                description="Website for explain my passion in the Website development. Using React, NextJS and MUI"
                tech="JS"
                link="https://treeskyx.github.io/"
              />
              <Project
                title="Network laboratory online exam website"
                description="Exam website for admission of members to the Network laboratory. Using React and Flask "
                tech="JS"
                link=""
              />
              <Project
                title="TravelerTale"
                description="Travel website for provide information about point of interest, local products, locataion and services using React, Nextjs, Tailwind, PostgreSQL and developing base on Agile. "
                tech="JS"
                link=""
              />
              <Project
                title="Hope Among the star Project"
                description="Game development project using C and C++. This game is a Space-Shooting game that player need to shoot down the enemy ships."
                tech="C"
                link="https://github.com/TreeSkyx/Hope_Among_The_Star"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
