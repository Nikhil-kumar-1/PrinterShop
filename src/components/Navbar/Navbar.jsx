import React, { useState, useEffect } from "react";
import { FaPrint, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  const textColor = scrolled ? "text-slate-900" : "text-white";
  const logoColor = scrolled ? "text-slate-900" : "text-white";

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO (CLICK → HOME) */}
        <NavLink to="/" className="group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <div
                className={`p-2.5 rounded-xl transition-all duration-500 shadow-lg ${
                  scrolled
                    ? "bg-red-600 rotate-[360deg] text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                <FaPrint size={22} />
              </div>
              <div className="absolute inset-0 bg-red-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity rounded-xl" />
            </div>

            <div className="flex flex-col">
              <span
                className={`text-2xl font-black tracking-tight leading-none transition-colors ${logoColor}`}
              >
                PRINTER<span className="text-red-600">DIGITAL</span>
              </span>
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.4em] mt-1 ${
                  scrolled ? "text-slate-500" : "text-white/70"
                }`}
              >
                Premium Printing
              </span>
            </div>
          </motion.div>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-5 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors group ${
                    isActive
                      ? "text-red-600"
                      : `${textColor} hover:text-red-600`
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
              </NavLink>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`ml-6 px-8 py-3 text-[12px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-red-600"
                : "bg-red-600 text-white hover:bg-white hover:text-red-600"
            }`}
          >
            Get Quote
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex justify-between items-center text-lg font-bold p-2 border-b ${
                      isActive
                        ? "text-red-600"
                        : "text-slate-800 hover:text-red-600"
                    }`
                  }
                >
                  {link.label}
                  <FaChevronRight size={14} className="text-slate-300" />
                </NavLink>
              ))}

              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
