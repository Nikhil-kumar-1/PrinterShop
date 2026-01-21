import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaAward,
  FaPalette,
  FaSearchPlus,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FaBolt />,
    title: "Express Delivery",
    desc: "We understand deadlines. Get your high-quality prints delivered within 24-48 hours with our rapid response team.",
  },
  {
    icon: <FaAward />,
    title: "Certified Quality",
    desc: "ISO certified printing standards ensuring every pixel and color is calibrated to perfection for your brand.",
  },
  {
    icon: <FaSearchPlus />,
    title: "DPI Precision",
    desc: "Industry-leading 2400 DPI resolution that captures the finest details that ordinary printers simply miss.",
  },
  {
    icon: <FaPalette />,
    title: "True-Tone Colors",
    desc: "Our CMYK+ gamut expansion ensures that the colors you see on screen are exactly what you get on paper.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 1. SECTION DIVIDER (Upar wale section se alag dikhne ke liye) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 120L0 0L1200 120Z" fill="#F8F7F2"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">
              Why Priner
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
            Elevating your brand with <br />
            <span className="italic font-light text-red-600">
              unmatched precision.
            </span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group hover:border-red-600 transition-all duration-500 rounded-2xl"
            >
              {/* Animated Corner Border */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-transparent group-hover:border-red-600 rounded-tl-2xl transition-all duration-500" />

              <div className="w-16 h-16 bg-slate-50 text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Learn More <FaArrowRight />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATS STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 bg-slate-900 rounded-[2rem] flex flex-wrap justify-around items-center gap-10"
        >
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-1">99%</div>
            <div className="text-[9px] font-bold text-red-500 uppercase tracking-widest">
              Client Satisfaction
            </div>
          </div>
          <div className="w-[1px] h-10 bg-slate-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-1">24/7</div>
            <div className="text-[9px] font-bold text-red-500 uppercase tracking-widest">
              Production Support
            </div>
          </div>
          <div className="w-[1px] h-10 bg-slate-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-1">0%</div>
            <div className="text-[9px] font-bold text-red-500 uppercase tracking-widest">
              Color Mismatch
            </div>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[20rem] font-black text-slate-50 pointer-events-none -z-10">
        QUALITY
      </div>
    </section>
  );
};

export default WhyChooseUs;
