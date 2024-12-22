import { useEffect } from "react";
import BackgroundImage from "../../../assets/BackgroundMain.jpg";
import Button from "../../../Components/Button";

const Home = () => {
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
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent/30" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Strumflex
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-300">
              Master the Art of Guitar
            </span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-300">
            From beginner to advanced, learn guitar at your own pace with
            professional instructors and a structured curriculum designed for
            your success.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Register Now
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </Button>
            <Button size="lg" variant="outline" isTransaprent>
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
