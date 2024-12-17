import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Prize from "./Components/Prize";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Prize />
    </>
  );
}

export default App;
