import React from "react";
import "../styles/Core.css";
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
    >
      <div className="card-content">
        <div id="titleName" className="card-title">
          Bhavya Lamba
        </div>
        <div id="summary" className="card-description">
          Software developer and recent graduate from the University of Waterloo, with a passion for learning and solving complex challenges.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
