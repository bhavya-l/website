import LandingPage from "./components/Landing.js";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.js";
import AboutMe from "./components/AboutMe.js";
import Experience from './components/Experience.js'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function PageSection({ children }) {
  return <div style={{ margin: "8rem 0" }}>{children}</div>;
}

function App() {
  return (
    <MantineProvider>
      <Navbar />
      <PageSection><LandingPage /></PageSection>
      <PageSection><AboutMe /></PageSection>
      <PageSection><Experience /></PageSection>
    </MantineProvider>
  );
}

export default App;
