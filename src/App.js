import LandingPage from "./components/Landing.js";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.js";
import AboutMe from "./components/AboutMe.js";

function PageSection({ children }) {
  return <div style={{ margin: "8rem 0" }}>{children}</div>;
}

function App() {
  return (
    <div>
      <Navbar />
      <PageSection><LandingPage /></PageSection>
      <PageSection><AboutMe /></PageSection>
    </div>
  );
}

export default App;
