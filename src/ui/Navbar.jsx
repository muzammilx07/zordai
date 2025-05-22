import { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { ThemeContext } from "../lib/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import zicon from "../assets/zicon.jpeg"; 


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const navbarData = {
    navLinks: [
      { label: "Features", path: "/features" },
      { label: "Companies", path: "/companies" },
      { label: "Job Seekers", path: "/jobseekers" },
      { label: "Pricing", path: "/pricing" },
    ],
  };

  return (
    <motion.header
      initial={false}
      animate={{
        marginTop: isScrolled ? "1rem" : "0rem",
      }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled
          ? "shadow-md bg-white/80 shadow-orange-100"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial={false}
        animate={{
          maxWidth: isScrolled ? "64rem" : "80rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex h-16 items-center justify-between w-full"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
          <div className="flex items-center space-x-2">
            <div className="size-8  overflow-hidden bg-orange-500">
      <img src={zicon} alt="ZordAI Logo" className="w-full h-full object-cover" />
    </div>
            <Link
              to="/"
              className="flex items-baseline text-orange-600 font-bold"
            >
              <span className="text-xl">ZordAI</span>
              <span className="text-sm ml-1 font-normal tracking-wide text-blue-500">
                HIRE
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navbarData.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Log in
          </Link>

          <Link
            to="/get-started"
            className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Get Started
            <ChevronRight className="ml-1" size={16} />
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <div className="flex flex-col px-4 py-2 gap-2">
            {navbarData.navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-sm py-2 text-gray-600 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr />
            <Link
              to="/login"
              className="text-sm py-2 text-gray-600 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/get-started"
              className="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
              <ChevronRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
