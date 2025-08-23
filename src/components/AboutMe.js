import { useState, useRef, useEffect } from "react";
import "../styles/Core.css";
import "../styles/AboutMe.css";
import profilePic from "../assets/profilePic.png"
import LogoLoop from '../Reactbits/Animations/LogoLoop/LogoLoop.jsx';
import { Slider } from '@mantine/core';
import { SiReact, SiTypescript, SiKotlin, SiPython, SiVuedotjs, SiFlutter, SiDocker, SiGit } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Education", "Skills"];
  const [highlightStyle, setHighlightStyle] = useState({});
  const containerRef = useRef(null);

  const techLogos = [
    { node: <SiReact />, title: "React", color: "#E76F51" },
    { node: <FaJava />, title: "Java", color: "#E76F51" },
    { node: <SiTypescript />, title: "TypeScript", color: "#E76F51" },
    { node: <SiKotlin />, title: "Kotlin", color: "#E76F51" },
    { node: <SiPython />, title: "Python", color: "#E76F51" },
    { node: <SiVuedotjs />, title: "Vue", color: "#E76F51" },
    { node: <SiDocker />, title: "Docker", color: "#E76F51" },
    { node: <SiFlutter />, title: "Flutter", color: "#E76F51" },
    { node: <SiGit />, title: "Git", color: "#E76F51" },
  ];

  const skills = [["Python", 90], ["Javascript/HTML/CSS", 95], ["SQL", 80],
  ["Frontend Frameworks (React, Vue, Flutter)", 90], ["C#", 60], ["Java", 50]]

  useEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll(".tab");
      const activeIndex = tabs.indexOf(activeTab);
      const activeButton = buttons[activeIndex];

      if (activeButton) {
        setHighlightStyle({
          width: `${activeButton.offsetWidth}px`,
          transform: `translateX(${activeButton.offsetLeft}px)`,
        });
      }
    }
  }, [activeTab]);

  return (
    <div id="about" className="card">
      <div className="card-content">
        <div id="aboutme" className="card-subheading">
          About Me
        </div>
        <div className="tab-container" ref={containerRef}>
          <div className="tab-highlight" style={highlightStyle}></div>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="sections">
          {activeTab === 'About Me' && (
            <div className="content-text">
              <p>
                Hello, my name is Bhavya and I am a developer who
                enjoys building thoughtful, user-focused software.
                I've worked across the stack, from writing Python
                APIs and integrating monitoring tools to designing
                clean, responsive front ends with React and Vue.
              </p>

              <p>
                I care about clean code, clear communication, and
                creating things that make life a little easier (or at
                least less annoying).
              </p>

              <p>
                When I'm not coding, I'm usually learning something
                new, going on runs, rock climbing, or trying to get
                better at photography and art.
              </p>
            </div>
          )}

          {activeTab === 'Education' && (
            <div className="content-text">
              <p>
                I graduated from the University of Waterloo in June, 2025 with a Bachelor of Computer Science degree.
              </p>
            </div>
          )}

          {activeTab === 'Skills' && (
            <div className='content-text'>
              {skills.map(([lang, lvl]) => (
                <span>
                  <p style={{ fontSize: "24px", marginBottom: "4px" }}>{lang}</p>
                  <Slider color="#2A9D8F" value={lvl} label={null} />
                </span>
              ))}
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
                style={{ paddingTop: "50px" }}
              />
            </div>
          )}
          <div>
            <div className="profile-pic">
              <img src={profilePic} alt="Profile Pic" className="profile-image" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
