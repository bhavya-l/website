import React from "react";
import "../styles/Navbar.css";
import "../styles/Core.css"

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="Navbar"
      className="navbar"
    >
      <ul class="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="mailto:bhavyalamba56@gmail.com" class="p-button">Get in Touch</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
