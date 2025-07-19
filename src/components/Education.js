import React from 'react';
import '../styles/Card.css';
import waterloo from '../assets/waterloo.png';
import waterlooLogo from '../assets/waterlooLogo.png';

const EducationPage = () => {
  return (
    <div className="card" style={{width:'1143px', height:'572px'}}>
      <div className="card-container">
        <div className="card-left">
          <h1 className="card-title">Education</h1>
          <div className="uni-info">
            <img src={waterlooLogo} alt="Waterloo Logo" className="uni-logo" />
            <div>
              <h2 className="heading-1">University of Waterloo</h2>
              <p className="sub-heading">Bachelor of Computer Science</p>
              <p className="sub-heading">(Sept 2020 - June 2025)</p>
            </div>
          </div>
          <div className="heading-1">
            <h3>Relevant Courses:</h3>
            <ul>
              <li>Application Development</li>
              <li>Intro to Database Management</li>
              <li>Algorithms</li>
              <li>Software Design and Architecture</li>
              <li>Operating Systems</li>
              <li>User Interfaces</li>
              <li>Foundations of Sequential Programs</li>
              <li>Object-Oriented Software Development</li>
            </ul>
          </div>
        </div>
        <div className="card-right">
          <img src={waterloo} alt="University of Waterloo" className="uni-image" />
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
