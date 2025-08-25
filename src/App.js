import LandingPage from "./components/Landing.js";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.js";
import AboutMe from "./components/AboutMe.js";
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function PageSection({ children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <MantineProvider>
      <div style={{ backgroundColor: "#FDF6E3" }}>
        <Navbar />
        <PageSection><LandingPage /></PageSection>
        <PageSection><AboutMe /></PageSection>
        <PageSection><Experience /></PageSection>
        <PageSection><Projects /></PageSection>
      </div>
    </MantineProvider>
  );
}

export default App;
