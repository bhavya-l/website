import React from "react";
import "../styles/Card.css";
import "../styles/Landing.css";

const LandingPage = () => {
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
      style={{ width: "1143px", height: "1301px" }}
    >
      <div className="card-container">
        <div className="card-nav">
          <p onClick={() => scrollToSection("education")}>about me</p>
          <p onClick={() => scrollToSection("education")}>education</p>
          <p onClick={() => scrollToSection("experience")}>experience</p>
        </div>

        <div className="card-divider" />

        <div className="card-content">
          <h1 className="card-name">Bhavya Lamba</h1>
          <p className="card-description">
            Software developer and recent graduate from the University of
            Waterloo, with a passion for learning and solving complex
            challenges.
          </p>

          <div className="card-buttons">
            <a href="/resume.pdf" download className="card-link-button">
              resume
            </a>
            <a
              href="https://github.com/bhavya-l"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-button"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/bhavyalamba"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-button"
            >
              linkedin
            </a>
            <a
              href="mailto:bhavyalamba56@gmail.com"
              className="card-link-button"
            >
              contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
