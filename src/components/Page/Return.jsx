import React from "react";
import { motion } from "framer-motion";
import {
  FaUndo,
  FaTools,
  FaCheckDouble,
  FaBoxOpen,
  FaMicroscope,
  FaArrowRight,
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Quality Control"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-[2px] bg-red-600"></div>
              <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[11px]">
                Quality Guarantee
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Refund & <br />{" "}
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                returns.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              Our policy is built on precision. If the output doesn't match the
              digital specs, we make it right through hardware recalibration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. RETURN GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 border-4 border-slate-900 shadow-2xl">
            {/* Box 1 */}
            <div className="bg-white p-16 border-r-4 border-slate-900 group">
              <FaBoxOpen className="text-red-600 text-5xl mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                Hardware Fleet
              </h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                Purchased industrial printers can be returned within 15 business
                days. The unit must remain in its original factory crate with
                less than 100 test impressions. A 20% industrial restocking fee
                applies.
              </p>
              <div className="flex gap-4">
                <span className="bg-slate-100 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Unused
                </span>
                <span className="bg-slate-100 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Original Crate
                </span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#020617] p-16 text-white group">
              <FaMicroscope className="text-red-500 text-5xl mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
                Custom Print Runs
              </h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                Custom prints are engineered to your business specs and are
                non-refundable. However, we offer a{" "}
                <strong>'Precision Audit'</strong>—if spectral analysis confirms
                a color shift exceeding 1.5 ΔE, we provide a full reprint.
              </p>
              <button className="flex items-center gap-3 text-red-500 font-black uppercase text-xs tracking-widest hover:text-white transition-all">
                Request Quality Audit <FaArrowRight />
              </button>
            </div>
          </div>

          {/* 100% Assurance Banner */}
          <div className="mt-20 p-12 bg-red-600 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <FaCheckDouble className="text-white text-6xl opacity-40" />
              <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">
                The Precision <br /> Promise.
              </h4>
            </div>
            <p className="text-red-100 font-medium max-w-md italic">
              "If our industrial laser presses fail to meet the agreed-upon DPI
              resolution, we will either recalibrate your hardware at no cost or
              issue a 100% technical credit."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;
