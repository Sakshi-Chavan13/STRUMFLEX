import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import StrumflexLogo from "../../../assets/StrumflexLogo.png";
import { motion } from "motion/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Learning", href: "#Learning" },
  // { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 text-white ${
        isScrolled ? "bg-black backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90vw] mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href="/" className="text-2xl font-bold">
            <img src={StrumflexLogo} className="h-12" alt="Strumflex Logo" />
          </a>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.a
                layout
                transition={{ duration: 0.3, delay: (index + 1) * 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                key={item.name}
                href={item.href}
                className={`hover:text-red-500 transition-colors font-semibold ${
                  pathname === item.href ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden md:block">
            {/* <Button className="bg-red-600 hover:bg-red-700">Get Started</Button> */}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          initial={{ transform: "translateY(100%)" }}
          animate={{ transform: "translateY(0%)" }}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm"
        >
          {navItems.map((item, index) => (
            <motion.a
              layout
              transition={{ duration: 0.3, delay: (index + 1) * 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-white hover:text-red-500 transition-colors ${
                pathname === item.href ? "text-red-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
