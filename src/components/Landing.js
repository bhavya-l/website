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
      <div id="titleName" className="card-title">
        Bhavya Lamba
      </div>
    </div>
  );
};

export default LandingPage;
