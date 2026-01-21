import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaExpand,
  FaPrint,
  FaCogs,
  FaPalette,
  FaMicrochip,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1600&q=80", // Ink detail
      title: "DIGITAL",
      subtitle: "Inking.",
      accent: "Ultra-HD Color Gamut",
    },
    {
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&q=80", // Professional printer
      title: "PRECISION",
      subtitle: "Laser.",
      accent: "Industrial Grade Output",
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80", // Tech machinery
      title: "OFFSET",
      subtitle: "Mastery.",
      accent: "High-Volume Calibration",
    },
  ];

  const stats = [
    { value: "2400", label: "DPI Quality", icon: <FaPrint /> },
    { value: "24/7", label: "Reliability", icon: <FaCogs /> },
    { value: "AI", label: "Smart Print", icon: <FaMicrochip /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-[#020617] flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. BACKGROUND TEXT TUNNEL (Moving Depth) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <motion.h2
          animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="text-[25vw] font-black text-white leading-none whitespace-nowrap"
        >
          PRINTTECH
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: CONTENT */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-red-600"></span>
                <span className="text-red-500 font-black text-[10px] tracking-[0.5em] uppercase">
                  {slides[currentSlide].accent}
                </span>
              </div>

              <h1 className="text-7xl md:text-[130px] font-black text-white leading-[0.8] tracking-tighter mb-10">
                {slides[currentSlide].title}
                <br />
                <span className="font-serif italic font-light text-red-600">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-12">
                <button className="group relative px-12 py-5 overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-110"></div>
                  <span className="relative z-10 text-white font-black uppercase text-[11px] tracking-widest flex items-center gap-3">
                    View Systems
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                
                <div className="flex gap-8">
                  {stats.map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="text-red-600 mb-1">{s.icon}</div>
                      <span className="text-white font-bold text-xl leading-none tracking-tighter">
                        {s.value}
                      </span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ORBITAL NAVIGATION */}
          <div className="mt-20 flex items-center gap-6">
            <div className="h-[1px] w-16 bg-slate-800"></div>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  currentSlide === i
                    ? "bg-red-600 border-red-600 scale-150"
                    : "border-slate-700 hover:border-red-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: GEOMETRIC CIRCULAR REVEAL */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center">
          <div className="absolute w-[110%] h-[110%] border border-slate-800 rounded-full animate-pulse-slow"></div>
          <div className="absolute w-[130%] h-[130%] border border-slate-900 rounded-full"></div>

          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-morph">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 1, ease: "anticipate" }}
                src={slides[currentSlide].image}
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700"
              />
            </AnimatePresence>
          </div>

          {/* Floating Machine Detail Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl hidden md:block border-l-4 border-red-600"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaPalette className="text-red-600" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Ink Density Analysis
              </span>
            </div>
            <p className="text-slate-900 font-serif italic text-lg tracking-tighter">
              True-Tone v.26 Technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM TICKER */}
      <div className="w-full bg-red-600 py-4 relative z-20 mt-auto">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20"
          >
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="text-white font-black italic text-[10px] tracking-[0.4em] uppercase opacity-90"
              >
                INDUSTRIAL LASER PRECISION • 2400 DPI OUTPUT • LARGE FORMAT PRINTING • UV COATING TECHNOLOGY •
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }

        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          33% { border-radius: 50% 50% 30% 70% / 50% 70% 30% 50%; }
          66% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
        }
        .animate-morph {
          animation: morph 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero5;