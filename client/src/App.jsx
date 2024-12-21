import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Prize from "./Components/Prize";
import Footer from "./Components/Footer";
import GuitarLessonForm from "./Components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Prize />
      <GuitarLessonForm />
      <Footer />
    </>
  );
}

export default App;
