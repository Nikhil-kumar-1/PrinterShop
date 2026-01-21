import React from "react";
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaGavel,
  FaRegCheckCircle,
  FaExclamationTriangle,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";

const TermsOfUse = () => {
  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Legal Agreement"
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
                Contractual Framework
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Terms of <br />{" "}
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                operation.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              Governing the precision, logistics, and technical execution of
              industrial-grade printing projects since 2010.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[18rem] font-black leading-none">LEGAL</h2>
        </div>
      </section>

      {/* 2. TERMS CONTENT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-20">
              {/* Point 01 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-red-600/20 transition-colors">
                    01
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    Production Timelines
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-900 pl-8 group-hover:border-red-600 transition-all">
                  All lead times provided are "Industrial Estimates." While we
                  maintain a 98% on-time record, PRINTERDIGITAL is not liable
                  for delays caused by machine recalibration, substrate
                  shortages, or international logistics disruptions.
                </p>
              </div>

              {/* Point 02 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-red-600/20 transition-colors">
                    02
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    Technical Proofing
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-900 pl-8 group-hover:border-red-600 transition-all">
                  Once a "Final Print Command" is authorized, no modifications
                  can be made to the vector designs. It is the customer's
                  responsibility to ensure DPI settings and CMYK profiles match
                  our technical submission guidelines.
                </p>
              </div>

              {/* Point 03 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-red-600/20 transition-colors">
                    03
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    Intellectual Rights
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-900 pl-8 group-hover:border-red-600 transition-all">
                  PRINTERDIGITAL reserves the right to refuse any job that
                  violates patent laws or contains unauthorized industrial
                  blueprints. By submitting files, you certify you hold the 100%
                  legal right to reproduce the design.
                </p>
              </div>
            </div>

            {/* Sticky Summary Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-10 bg-[#020617] text-white border-b-8 border-red-600 shadow-2xl">
                <FaGavel className="text-red-600 text-4xl mb-6" />
                <h3 className="text-xl font-black uppercase mb-6 tracking-widest">
                  Compliance Summary
                </h3>
                <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-widest">
                  <li className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-red-600" /> B2B
                    Contractual Base
                  </li>
                  <li className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-red-600" /> Jurisdiction:
                    Gujarat
                  </li>
                  <li className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-red-600" /> 2026 Updated
                    Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
