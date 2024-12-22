import React, { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Prize from "./Components/Prize";
import Footer from "./Components/Footer";
import FormMain from "./Components/FormMain";
import GuitarLessonForm from "./Components/Form";

const LandingIndex = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("modal-container").classList.remove("hidden");
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Prize />
      <FormMain />
      <Footer />
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm hidden"
        id="modal-container"
      >
        <div className="modal mx-auto mt-12 w-1/2 relative">
          {/* <div className="bg-transparent rounded-lg shadow-md p-4 relative"> */}
          <button
            className="absolute -top-3 right-28 p-4 text-2xl font-bold text-red-700"
            onClick={() =>
              document.getElementById("modal-container").classList.add("hidden")
            }
          >
            &times;
          </button>
          <GuitarLessonForm />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LandingIndex;
