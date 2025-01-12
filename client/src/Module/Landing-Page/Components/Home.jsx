import { useEffect, useState } from "react";
import BackgroundImage from "../../../assets/BackgroundMain.jpg";
import Button from "../../../Components/Button";
import GlobalModal from "../../../Components/GlobalModal";
import RegisterForm from "./RegisterForm";
import Drawer from "../../../Components/Drawer";
import { motion } from "motion/react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Guitar fretboard in black and white"
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent/30" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-end md:items-center">
        <div className="space-y-6 max-md:mb-16">
          <motion.h1
            animate={{ transform: "translateY(0)" }}
            initial={{ transform: "translateY(100px)" }}
            transition={{ duration: 1, delay: 1 }}
            className="text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Strumflex
            <span className="block text-3xl lg:text-4xl mt-2 text-gray-300">
              Master the Art of Guitar
            </span>
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-xl text-lg md:text-xl text-gray-300"
          >
            From beginner to advanced, learn guitar at your own pace with
            professional instructors and a structured curriculum designed for
            your success.
          </motion.p>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Register Now
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </Button>
            {/* <Button size="lg" variant="outline" isTransaprent>
              View Courses
            </Button> */}
          </div>
        </div>
      </div>

      <GlobalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterForm />
      </GlobalModal>

      <Drawer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterForm />
      </Drawer>
    </section>
  );
};

export default Home;
