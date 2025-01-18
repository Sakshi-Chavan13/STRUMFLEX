import React from "react";
import Guitar1 from "../../../assets/Guitar.jpg";
import Guitar2 from "../../../assets/Guitar2.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 bg-[#f8f8f8]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='100%' y1='0' y2='100%'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.3'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0 0c100 0 100 100 200 100s100-100 200-100 100 100 200 100 100-100 200-100v100h-800z' fill='url(%23a)' fill-opacity='0.1' transform='scale(1, 0.5) translate(0, 50)'/%3E%3C/svg%3E")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div> */}

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative hidden lg:block">
            <div className="relative aspect-auto w-full mb-[-20%] z-10 ml-[30%]">
              <motion.img
                variants={{
                  offscreen: {
                    y: 300,
                    opacity: 0,
                  },
                  onscreen: {
                    y: 50,
                    opacity: 1,
                    // rotate: -10,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  },
                }}
                src={Guitar1}
                alt="Student practicing guitar with laptop"
                className="rounded-lg object-cover h-[28rem] z-10 relative"
              />
            </div>
            <div className="relative aspect-auto w-[120%] ml-[60%] md:ml-[45%] mt-[10%]">
              <motion.img
                variants={{
                  offscreen: {
                    x: 150,
                    opacity: 0,
                  },
                  onscreen: {
                    x: 0,
                    opacity: 1,
                    // rotate: -10,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  },
                }}
                src={Guitar2}
                alt="Student practicing guitar with laptop"
                className="rounded-lg object-cover h-[13rem] w-[25rem] z-20 relative"
              />
            </div>
          </div>

          <motion.div
            variants={{
              offscreen: { transform: "translateX(100px)" },
              onscreen: { transform: "translateX(0)" },
            }}
            className="flex flex-col justify-center space-y-8 pt-8 relative 2xl:right-48 xl:right-0"
          >
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Strumflex, we're here to make learning the guitar simple,
                enjoyable, and tailored just for you. Our classes focus on
                essential skills to help beginners build a strong foundation.
                From learning how to handle, tune, and care for your guitar to
                mastering chords and fretboard navigation, we're here to support
                you every step of the way.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We offer personalized one-on-one sessions designed to match your
                pace and style. With flexible options—including online,
                in-person, and home classes—you can learn wherever and however
                works best for you. After each session, you'll receive clear,
                detailed notes to keep your practice on track.
              </p>
            </div>
            {/* <div className="flex items-center gap-2">
              <IoPlayCircle className="h-10 w-10" size={50} />
              Learn More
            </div> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
