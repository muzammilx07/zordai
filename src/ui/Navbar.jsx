import { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { ThemeContext } from "../lib/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? " shadow-sm " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">S</div>
          <Link to='/'>SaaSify</Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
  {navbarData.navLinks.map((link, index) => (
    <a
      key={index}
      href={link.path}
      className="text-muted-foreground transition-colors text-gray-500 hover:text-black"
    >
      {link.label} 
    </a>
  ))}
</nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
         <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-hoverLight dark:hover:bg-hoverDark bg-iconBgLight dark:bg-iconBgDark "
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

          <Link to="/login" className="text-sm text-gray-500 hover:text-black ">Log in</Link>

          <Link
            to="/get-started"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
            <ChevronRight className="ml-1" size={16} />
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <div className="flex flex-col px-4 py-2 gap-2">
            <Link to="/features" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/companies" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Companies</Link>
            <Link to="/jobseekers" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Job Seekers</Link>
            <Link to="/pricing" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <hr />
            <Link to="/login" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            <Link
              to="/get-started"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
              <ChevronRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
