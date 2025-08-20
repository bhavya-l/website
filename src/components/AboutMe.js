
import React from "react";
import "../styles/Core.css";
import "../styles/Landing.css";

const AboutMe = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Landing"
      className="card"
    >
      <div className="card-content">
        <div id="aboutme" className="card-subheading">
          About Me
        </div>
        <div id="summary" className="card-description">
          Software developer and recent graduate from the University of Waterloo, with a passion for learning and solving complex challenges.
        </div>
        <div className = "card-buttons">
            <a href="/resume.pdf" download className="p-button">
              Resume
            </a>
            <a
              href="https://github.com/bhavya-l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-button"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/bhavyalamba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-button"
            >
              Linkedin
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
