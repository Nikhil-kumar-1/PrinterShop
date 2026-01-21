import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaHeadset,
  FaMicrochip,
  FaArrowRight,
} from "react-icons/fa";

// Assume GetInTouch is imported from your components
import GetInTouch from "../Home/GetInTouch";

const ContactPage = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Direct Line",
      detail: "+1 (800) 456-7890",
      sub: "Mon-Sun, 24/7 Production Support",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      detail: "sales@printerdigital.com",
      sub: "Response within 2 hours",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Tech Hub",
      detail: "1560 Broadway",
      sub: " NY 10036 United States",
    },
  ];

  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. HERO SECTION - SYNCED WITH ABOUT/PRODUCT */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Support Center"
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
                Global Support Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Get in <br />
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                touch.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              Connect with our hardware engineers and print specialists. We
              deploy real-time monitoring to solve your production challenges
              instantly.
            </motion.p>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none">HELP</h2>
        </div>
      </section>

      {/* 2. CONTACT INFO GRID - SHARP INDUSTRIAL BORDERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 border-2 border-slate-900 shadow-2xl">
            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="p-12 border-r-2 border-slate-900 last:border-r-0 hover:bg-slate-50 transition-all group"
              >
                <div className="text-red-600 text-4xl mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                  {item.detail}
                </p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <GetInTouch />

      {/* 4. CTA / LOCATION - Machine Magic Style */}
      <section className="py-28 bg-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-[100px] font-black text-white leading-[0.8] uppercase mb-16 tracking-tighter">
            Visit the <br />{" "}
            <span className="font-serif italic font-light lowercase tracking-normal text-slate-900">
              innovation lab.
            </span>
          </h2>
          <button className="px-16 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#fff] hover:bg-white hover:text-slate-900 transition-all active:translate-y-2 active:shadow-none flex items-center gap-4 mx-auto">
            View on Map <FaArrowRight />
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

export default ContactPage;
