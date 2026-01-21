import React from "react";
import { Link } from "react-router-dom"; // React Router Link use kiya
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPrint,
  FaArrowRight,
  FaChevronRight,
  FaRegPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Printer Catalog", path: "/products" },
    { name: "Contact Hub", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-400 overflow-hidden pt-28">
      {/* 1. INDUSTRIAL TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 2. BRAND & QUICK LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-10 group">
              <div className="p-3 bg-red-600 rounded-xl text-white shadow-lg group-hover:rotate-[360deg] transition-all duration-700">
                <FaPrint size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight leading-none text-white uppercase">
                  PRINTER<span className="text-red-600">DIGITAL</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-500 mt-2">
                  Precision Engineering
                </span>
              </div>
            </Link>

            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-sm font-medium">
              Revolutionizing the printing industry with industrial-grade AI
              technology and robotic precision since 2010.
            </p>

            <div className="flex gap-4">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaLinkedinIn />,
                <FaInstagram />,
                <FaYoutube />,
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#" // Inhe aap apne actual social link se replace kar sakte hain
                  whileHover={{
                    y: -8,
                    backgroundColor: "#dc2626",
                    color: "#fff",
                  }}
                  className="w-12 h-12 border-2 border-slate-800 flex items-center justify-center text-slate-500 transition-all rounded-lg"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links (Cleaned) */}
          <div>
            <h4 className="text-white font-black uppercase text-[11px] tracking-[0.4em] mb-10 border-l-4 border-red-600 pl-4">
              Navigation
            </h4>
            <ul className="space-y-5">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[15px] font-bold text-slate-500 hover:text-red-500 transition-all flex items-center group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column */}
          <div>
            <h4 className="text-white font-black uppercase text-[11px] tracking-[0.4em] mb-10 border-l-4 border-red-600 pl-4">
              Contact Hub
            </h4>
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <p className="text-sm font-bold leading-relaxed text-slate-500">
                  1560 Broadway New York, <br />
                  NY 10036 United States
                </p>
              </div>
              <div className="flex gap-5 items-center group">
                <FaPhoneAlt className="text-red-600" />
                <p className="text-lg font-black text-white tracking-tighter">
                  +91 9988 7766 55
                </p>
              </div>
              <div className="flex gap-5 items-center group">
                <FaEnvelope className="text-red-600" />
                <p className="text-[15px] font-bold text-white group-hover:text-red-500 transition-colors">
                  sales@printerdigital.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR (Policy Links) */}
        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[0.3em]">
          <p className="text-slate-700">
            © {currentYear} PRINTERDIGITAL SYSTEMS.{" "}
            <span className="text-slate-800 ml-4 hidden md:inline">
              | HIGH-PRECISION UNIT
            </span>
          </p>
          <div className="flex gap-10 text-slate-700">
            <Link
              to="/privacy"
              className="hover:text-red-600 transition-colors"
            >
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-red-600 transition-colors">
              Terms
            </Link>
            <Link to="/return" className="hover:text-red-600 transition-colors">
              Return
            </Link>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5, backgroundColor: "#dc2626" }}
            className="w-14 h-14 bg-slate-900 flex items-center justify-center border-2 border-slate-800 text-white transition-all shadow-2xl"
          >
            <FaArrowRight className="-rotate-90" />
          </motion.button>
        </div>
      </div>

      {/* Industrial Dot Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />
    </footer>
  );
};

export default Footer;
