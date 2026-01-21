import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaHistory,
  FaMicrochip,
  FaQuoteRight,
  FaPrint,
  FaFillDrip,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ years: 15, projects: 1200, clients: 500 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-0 bg-[#FDFCF8] overflow-hidden">
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute top-10 left-[-5%] text-[12rem] md:text-[15rem] font-black text-slate-200/30 select-none pointer-events-none uppercase tracking-tighter">
        Digital
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          {/* LEFT: THE VISUAL STACK */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80"
                alt="High-End Printer"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 border-l-4 border-red-600 shadow-xl">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">
                  {counts.years}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Years of Precision
                </p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-8 w-full h-full bg-red-600/5 -z-10 rotate-3 border border-red-100" />
            <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-slate-900 shadow-2xl -z-10 -rotate-6 flex items-end p-6">
              <FaPrint className="text-white/10 text-7xl" />
            </div>
          </div>

          {/* RIGHT: THE CONTENT */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-red-600"></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  Inside Priner
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
                Turning Pixels <br />
                <span className="italic font-light text-slate-500 text-4xl md:text-6xl">
                  into Masterpieces.
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Since our inception,{" "}
                <span className="font-bold text-slate-900 underline decoration-red-600 decoration-2 underline-offset-4">
                  Priner
                </span>{" "}
                has pushed the boundaries of what's possible in print. We don't
                just put ink on paper; we bring your vision to life with
                industry-leading 2400 DPI precision.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
                {[
                  { icon: <FaFillDrip />, title: "Vibrant", val: "CMYK+" },
                  { icon: <FaMicrochip />, title: "Smart", val: "AI-Tech" },
                  { icon: <FaAward />, title: "Quality", val: "100%" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="border-l border-slate-200 pl-4 group hover:border-red-600 transition-colors"
                  >
                    <div className="text-red-600 mb-2 group-hover:scale-110 transition-transform">
                      {f.icon}
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      {f.val}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {f.title}
                    </div>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-5 text-slate-900 font-black uppercase tracking-[0.2em] text-xs hover:text-red-600 transition-all">
                The Printing Process{" "}
                <FaArrowRight className="text-red-600 group-hover:translate-x-2 transition-all" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. TRANSITION DIVIDER */}
      <div className="relative w-full h-32 md:h-48 mt-20">
        <div className="absolute inset-0 bg-[#0f172a] rounded-t-[50%_100%] scale-x-125 translate-y-8" />

        {/* Floating Quality Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 -top-12 z-30 bg-white p-8 shadow-2xl border-t-4 border-red-600 text-center max-w-lg w-[90%]"
        >
          <FaQuoteRight className="text-red-50/50 text-6xl absolute top-2 right-4 -z-10" />
          <h3 className="text-xl font-serif italic text-slate-800 mb-2">
            "We don't just print, we preserve your legacy in every dot."
          </h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Our Commitment to Excellence
          </p>
        </motion.div>
      </div>

      {/* 3. DARK SLIDE-IN TEXT (Services Preview) */}
      <div className="bg-[#0f172a] w-full py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-20 overflow-hidden whitespace-nowrap"
        >
          <div className="flex animate-marquee gap-20">
            {[1, 2].map((i) => (
              <span
                key={i}
                className="text-white font-black text-4xl md:text-6xl tracking-[0.3em] opacity-10 uppercase"
              >
                Ultra-HD Print • UV Finishing • 24/7 Support • Large Format •
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Printer Texture Overlay (Subtle dots like print CMYK) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/micro-carbon.png')`,
        }}
      />
    </section>
  );
};

export default AboutSection;
