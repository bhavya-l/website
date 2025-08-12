import "./styles/App.css";
import LandingPage from "./components/Landing.js";
import EducationPage from "./components/Education.js";
import ExperiencePage from "./components/Experience.js";
import Dither from "./Reactbits/Dither/Dither.jsx";
import { useState, useEffect } from "react";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "auto",
        zIndex: 0,
      }}
    >
      <Dither mouseRadius={0.1}>
        <LandingPage />
      </Dither>
    </div>
  );
}

export default App;
