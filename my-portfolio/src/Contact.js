import React from "react";
import "./Contact.css";

const Contact = () => {
  const githubProfileUrl = "https://github.com/TreeSkyx";
  const linkedinProfileUrl = "https://www.linkedin.com/in/wiroon-somphaothong/"; // Replace with your LinkedIn profile URL
  const gmailAddress = "mailto:wiroom.som@gmail.com";

  return (
    <div className="contact">
      <div className="contact-window">
        <div className="title-bar">
          <div className="close-button"></div>
          <div className="minimize-button"></div>
          <div className="maximize-button"></div>
        </div>
        <div className="contact-content-container">
          <div className="contact-content">
            <div className="title">Stay Connected: How to Reach Me</div>
            <div className="description">
              Let's stay connected and explore job opportunities together! As a
              university student ready to dive into the professional world, I'm
              excited to connect with you. Drop me a message using the channels
              below and let's chat about potential gigs and collaborations.
              Can't wait to hear from you!
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
                <i className="far fa-envelope"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
