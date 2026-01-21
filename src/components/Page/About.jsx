import React from "react";
import { motion } from "framer-motion";
import {
  FaPrint,
  FaUsers,
  FaHistory,
  FaGlobe,
  FaCogs,
  FaMicroscope,
  FaRobot,
  FaHandshake,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";

const AboutPage = () => {
  const stats = [
    { label: "Founded", value: "2010", icon: <FaHistory /> },
    { label: "Team", value: "85+", icon: <FaUsers /> },
    { label: "Clients", value: "1200+", icon: <FaGlobe /> },
    { label: "Machines", value: "45+", icon: <FaTools /> },
  ];

  return (
    <div className="bg-[#FDFCF8]  overflow-hidden">
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1715059382493-213b706e95f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjaGluZXJ5JTIwcHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full object-cover grayscale"
            alt="Machinery"
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
                Engineering Visual Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Beyond <br />
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                resolution.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              We deploy the latest digital and offset technologies to deliver
              unmatched clarity and vibrant color accuracy for your brand since
              2010.
            </motion.p>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none">ABOUT</h2>
        </div>
      </section>

      {/* 2. CORE STORY - HomeServices Style Typography */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="border-[15px] border-white shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Precision"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-600 p-12 text-white shadow-2xl hidden md:block">
                <p className="text-6xl font-black mb-2 leading-none">15+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Years of Mastery
                </p>
              </div>
            </motion.div>

            <div className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
                  Pioneering <br />
                  <span className="italic font-light text-slate-400 underline decoration-red-100 decoration-8 underline-offset-[-2px]">
                    Print Engineering
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                  At{" "}
                  <span className="font-bold text-slate-900">
                    Vrinda Digital
                  </span>
                  , we don't just print; we engineer visual experiences. Every
                  project is a testament to our commitment to precision and
                  innovation.
                </p>
                <div className="bg-white border-l-4 border-red-600 p-8 shadow-sm italic text-slate-500 text-xl font-serif">
                  "Our goal is to bridge the gap between traditional
                  craftsmanship and modern industrial demands."
                </div>
              </div>
              <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-all shadow-xl">
                The Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPACT STATS GRID - Industrial Border Style */}
      <section className="py-24 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-800">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-12 text-center border-r border-slate-800 last:border-r-0 hover:bg-white/5 transition-all group"
              >
                <div className="text-red-600 text-2xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE TECHNOLOGY - 3 Column Layout */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 border border-slate-200 shadow-2xl bg-white">
            {[
              {
                icon: <FaMicroscope />,
                title: "Precision",
                desc: "AI-calibrated systems for unmatched detail.",
                tag: "Accuracy",
              },
              {
                icon: <FaRobot />,
                title: "Innovation",
                desc: "Robotic workflows ensuring batch consistency.",
                tag: "Next-Gen",
                dark: true,
              },
              {
                icon: <FaHandshake />,
                title: "Partnership",
                desc: "Trust-based relations with global leaders.",
                tag: "Global",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className={`p-16 border-r border-slate-100 last:border-r-0 group transition-all duration-500 ${pillar.dark ? "bg-[#020617] text-white" : "hover:bg-slate-50"}`}
              >
                <div
                  className={`text-5xl mb-10 ${pillar.dark ? "text-red-500" : "text-red-600"} group-hover:scale-110 transition-transform`}
                >
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block">
                  {pillar.tag}
                </span>
                <h3
                  className={`text-3xl font-black uppercase mb-6 ${pillar.dark ? "text-white" : "text-slate-900"}`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${pillar.dark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - Machine Magic */}
      <section className="py-28 bg-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-[100px] font-black text-white leading-[0.8] uppercase mb-16 tracking-tighter">
            Witness the <br />{" "}
            <span className="font-serif italic font-light lowercase tracking-normal text-slate-900">
              machine magic.
            </span>
          </h2>
          <button className="px-16 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#fff] hover:bg-white hover:text-slate-900 transition-all active:translate-y-2 active:shadow-none">
            Request facility tour
          </button>
        </div>
      </section>

      {/* Texture Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />
    </div>
  );
};

export default AboutPage;
