import React from "react";
import "../styles/Card.css";
import "../styles/Education.css";
import waterlooLogo from "../assets/waterlooLogo.png";
import profilePic from "../assets/profilePic.png";
import TiltedCard from "./TiltledCard.js";

const EducationPage = () => {
  return (
    <div
      id="education"
      className="card"
      style={{ width: "1143px", height: "1301px" }}
    >
      <div>
        <div className="card-title">About Me</div>
        <div className="about-section">
          <TiltedCard
            imageSrc={profilePic}
            altText="Me!"
            captionText="Me!"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.0}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
          <p className="card-description" style={{ fontSize: "24px" }}>
            Hello, my name is Bhavya and I am a developer who enjoys building
            thoughtful, user-focused software. I've worked across the stack,
            from writing Python APIs and integrating monitoring tools to
            designing clean, responsive front ends with React and Vue. I care
            about clean code, clear communication, and creating things that make
            life a little easier (or at least less annoying). When I'm not
            coding, I'm usually learning something new, going on runs, rock
            climbing, or trying to get better at photography and art.
          </p>
        </div>
        <div className="card-title" style={{ paddingBottom: "0rem" }}>
          Education
        </div>
        <div className="uni-info">
          <img src={waterlooLogo} alt="Waterloo Logo" className="uni-logo" />
          <div>
            <h2 className="heading-1">University of Waterloo</h2>
            <p className="sub-heading">
              Bachelor of Computer Science (Sept 2020 - June 2025)
            </p>
          </div>
        </div>
        <div className="heading-1" style={{ paddingLeft: "4rem" }}>
          <h3 style={{ marginTop: "3rem" }}>Relevant Courses:</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "7rem" }}>
            <ul>
              <li>Application Development</li>
              <li>Intro to Database Management</li>
              <li>Algorithms</li>
              <li>Software Design and Architecture</li>
            </ul>
            <ul>
              <li>Operating Systems</li>
              <li>User Interfaces</li>
              <li>Foundations of Sequential Programs</li>
              <li>Object-Oriented Software Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
