// AboutMe.js
import React from "react";
import "./AboutMe.css"; // Create this file for styling

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        <div className="about-content-container">
          <div className="about-me-content">
            <div className="topic"> About Me </div>

            <div className="aboutme-title">
              I'm Wiroon Somphaothong and{" "}
              <span style={{ color: "#1869FF" }}>Web Developer</span>
            </div>
            <div className="aboutme-description">
              Hello, I'm Wiroon Somphaothong, currently pursuing a degree in
              Computer Engineering at King Mongkut's Institute of Technology
              Ladkrabang. My academic focus revolves around Web development and
              Embedded Engineering, areas that captivate my interest and drive
              my passion for innovative technologies.
            </div>
            <div className="details-container">
              {/* Left column */}
              <div className="column">
                <div className="detail">
                  <div className="detail-title">Age:</div>
                  <div className="detail-description">21</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Degree:</div>
                  <div className="detail-description">
                  Bachelor of Engineering Program in Computer Engineering
                  <br />
                  
                  </div>
                </div>
                <div className="detail">
                  <div className="detail-title">City:</div>
                  <div className="detail-description">Bangkok, Thailand</div>
                </div>
              </div>

              {/* Right column */}
              <div className="column">
                <div className="detail">
                  <div className="detail-title">Email:</div>
                  <div className="detail-description">wiroon.som@gmail.com</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Github:</div>
                  <div className="detail-description">
                    https://github.com/TreeSkyx
                  </div>
                </div>
                <div className="detail">
                  <div className="detail-title">LinkedIn:</div>
                  <div className="detail-description">Wiroon Somphaothong</div>
                </div>
                <div className="detail">
                  <div className="detail-title">Email:</div>
                  <div className="detail-description">wiroon.som@gmail.com</div>
                </div>
              </div>
              <div className="column">
                Languages i used :
                <div className="logo-container">
                  <div className="logo-row">
                    <img
                      src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
                      alt="HTML5"
                      width={"50px"}
                      height={"50px"}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                      alt="JS"
                      width={"40px"}
                      height={"40px"}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/python@0.0.0/python_256x256.png"
                      alt="py"
                      width={"40px"}
                      height={"40px"}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/c@0.0.3/c_256x256.png"
                      alt="c"
                      width={"40px"}
                      height={"40px"}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/cpp@0.0.2/cpp_256x256.png"
                      alt="cpp"
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <div className="logo-row">
                    <img
                      src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java_256x256.png"
                      alt="java"
                      width={"40px"}
                      height={"40px"}
                    />
                    <img
                      src="https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/go/go_256x256.png"
                      alt="go"
                      width={"40px"}
                      height={"40px"}
                    />
                    <img
                      src="https://tsgdoc.socsci.ru.nl/images/2/21/Matlab_Logo.png"
                      alt="matlab"
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="edu-title">Education</div>
            <div className="timeline">
              <div className="edu-description">
                <ul className="edu-list">
                  <li>
                    <span className="edu-year">- University</span>
                    <div className="edu-info">
                    (2023 - Present)<br />
                    King Mongkut's Institute of Technology Ladkrabang 
                    </div>
                  </li>
                  <li>
                    <span className="edu-year">- High School</span>
                    <div className="edu-info">
                    (2018 - 2021)<br />
                    Princess Chulabhorn Science High School Phitsanulok
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
