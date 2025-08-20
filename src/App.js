import LandingPage from "./components/Landing.js";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar.js";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
