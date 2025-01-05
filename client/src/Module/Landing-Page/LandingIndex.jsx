import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Prize from "./Components/Prize";
import Footer from "./Components/Footer";
import FormMain from "./Components/FormMain";
import GuitarLessonForm from "./Components/Form";
import GlobalModal from "../../Components/GlobalModal";
import LearningPoints from "./Components/LearningPoints";

const LandingIndex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <LearningPoints />
      <Prize />
      <FormMain />
      <Footer />
      <GlobalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GuitarLessonForm isModal />
      </GlobalModal>
    </>
  );
};

export default LandingIndex;
