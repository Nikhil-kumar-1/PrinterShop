import React from "react";
import {
  FaArrowRight,
  FaPrint,
  FaCogs,
  FaShippingFast,
  FaPalette,
  FaFileInvoice,
  FaLayerGroup,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLayerGroup />,
    title: "Large Format",
    desc: "High-impact banners, vinyl wraps, and architectural signage with weather-resistant UV inks.",
    tag: "Outdoor & Display",
  },
  {
    icon: <FaPalette />,
    title: "UV High-Gloss",
    desc: "Premium spot UV and foil stamping that adds a luxurious tactile dimension to your branding.",
    tag: "Specialty Finish",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation",
    desc: "Smart color-correction and automated quality checks ensuring 100% accuracy in every batch.",
    tag: "Next-Gen Tech",
  },
  {
    icon: <FaFileInvoice />,
    title: "Bulk Commercial",
    desc: "High-speed offset printing for catalogs, brochures, and corporate stationery at scale.",
    tag: "Industrial",
  },
];

const HomeServices = () => {
  return (
    <section className="relative py-32 bg-[#FDFCF8] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[15rem] md:text-[20rem] font-black leading-none">
          PRINTS
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600">
                Our Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight"
            >
              Precision-Driven <br />
              <span className="italic font-light text-slate-400 underline decoration-red-100 decoration-8 underline-offset-[-2px]">
                Print Engineering
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-lg font-light leading-relaxed border-l-2 border-slate-100 pl-8"
          >
            We deploy the latest digital and offset technologies to deliver
            unmatched clarity and vibrant color accuracy for your brand.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4 border border-slate-200 shadow-2xl">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ backgroundColor: "#0f172a" }} // Slate-900 on hover
              className="group relative p-10 bg-white border-r border-b border-slate-200 transition-all duration-500 cursor-pointer overflow-hidden min-h-[420px] flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <div className="text-red-600 text-4xl mb-8 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block group-hover:text-red-400 transition-colors">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-500 text-sm font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </span>
                  <FaArrowRight className="text-slate-300 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
                </div>
                <motion.div className="h-[2px] bg-red-600 w-8 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Background Subtle Numbering */}
              <span className="absolute bottom-[-10px] right-[-10px] text-9xl font-black text-slate-100 opacity-0 group-hover:opacity-5 transition-opacity select-none pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="flex -space-x-3">
            {/* Simple visual of "trust" or "expert" icons */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center"
              >
                <FaPrint className="text-slate-400 text-xs" />
              </div>
            ))}
          </div>
          <p className="text-slate-500 font-medium text-center md:text-left">
            Looking for a custom print run or specialized substrate?
          </p>
          <button className="px-12 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-red-600 transition-all shadow-2xl hover:-translate-y-1">
            Talk to a Print Specialist
          </button>
        </motion.div>
      </div>

      {/* Subtle "Print Noise" Texture Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />
    </section>
  );
};

export default HomeServices;
