import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaEye,
  FaFileSignature,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. INDUSTRIAL HERO SECTION */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Secure Data Server"
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
                Your Security, Our Priority
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Privacy <br />
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                protocols.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              At PRINTERDIGITAL, we implement enterprise-grade security to
              protect your intellectual property and business data during every
              print run.
            </motion.p>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none">DATA</h2>
        </div>
      </section>

      {/* 2. CORE PRIVACY CONTENT */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Sidebar Sticky Navigation (Visual Only) */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="p-8 bg-[#020617] text-white border-l-8 border-red-600 shadow-2xl">
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">
                    Compliance Hub
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                    Our data management is ISO/IEC 27001 compliant, ensuring
                    highest standards of info-sec.
                  </p>
                  <button className="flex items-center gap-3 text-red-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors">
                    Download Full PDF <FaArrowRight />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-slate-900 flex flex-col items-center justify-center text-center">
                    <FaShieldAlt className="text-red-600 text-2xl mb-2" />
                    <span className="text-[9px] font-black uppercase text-slate-900 tracking-widest">
                      GDPR Ready
                    </span>
                  </div>
                  <div className="p-6 border-2 border-slate-900 flex flex-col items-center justify-center text-center">
                    <FaLock className="text-red-600 text-2xl mb-2" />
                    <span className="text-[9px] font-black uppercase text-slate-900 tracking-widest">
                      SSL Secure
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="space-y-24">
                {/* Information Collection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-[#020617] text-white flex items-center justify-center text-2xl">
                      <FaDatabase />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                      Information Collection
                    </h2>
                  </div>
                  <div className="space-y-6 text-slate-600 text-lg font-medium border-l-4 border-slate-100 pl-10 group-hover:border-red-600 transition-colors duration-500">
                    <p>
                      We collect essential business information required to
                      configure our industrial laser presses and fulfill custom
                      print orders. This includes business registration details,
                      contact metadata, and specialized design files.
                    </p>
                    <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600"></div> Vector
                        Artwork & Blueprints
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600"></div> Business
                        Credit Information
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600"></div> Machine
                        Configuration Logs
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Data Security & Storage */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-[#020617] text-white flex items-center justify-center text-2xl">
                      <FaServer />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                      Storage & Deletion
                    </h2>
                  </div>
                  <div className="space-y-6 text-slate-600 text-lg font-medium border-l-4 border-slate-100 pl-10 group-hover:border-red-600 transition-colors duration-500">
                    <p>
                      All design files are hosted on encrypted, firewalled
                      internal servers. To protect your trade secrets, we
                      implement a <strong>'Zero-Persistent'</strong> policy: all
                      production files are automatically purged from our local
                      machine buffers 30 days after job completion.
                    </p>
                    <p className="bg-slate-50 p-6 italic font-serif text-slate-500 border-r-4 border-slate-900">
                      "We maintain the confidentiality of your proprietary
                      designs as if they were our own hardware blueprints."
                    </p>
                  </div>
                </motion.div>

                {/* Third-Party Disclosure */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-[#020617] text-white flex items-center justify-center text-2xl">
                      <FaUserShield />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                      Third-Party Ethics
                    </h2>
                  </div>
                  <div className="space-y-6 text-slate-600 text-lg font-medium border-l-4 border-slate-100 pl-10 group-hover:border-red-600 transition-colors duration-500">
                    <p>
                      PRINTERDIGITAL does not participate in data brokerage.
                      Technical data is only shared with authorized machinery
                      partners (like HP Indigo or Heidelberg) for warranty
                      validation or specialized engineering support, and only
                      with your explicit consent.
                    </p>
                  </div>
                </motion.div>

                {/* Rights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-[#020617] text-white flex items-center justify-center text-2xl">
                      <FaFileSignature />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                      Your Rights
                    </h2>
                  </div>
                  <div className="space-y-6 text-slate-600 text-lg font-medium border-l-4 border-slate-100 pl-10 group-hover:border-red-600 transition-colors duration-500">
                    <p>
                      You reserve the right to request a complete audit of the
                      data we hold, or to request immediate permanent deletion
                      of all design assets post-delivery. Contact our{" "}
                      <strong>Compliance Officer</strong> at
                      legal@printerdigital.com for all data-related inquiries.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA: CONTACT LEGAL */}
      <section className="py-24 bg-red-600 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.8] uppercase mb-12 tracking-tighter">
            Any Security <br />{" "}
            <span className="font-serif italic font-light lowercase tracking-normal text-slate-900">
              questions?
            </span>
          </h2>
          <button className="px-16 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#fff] hover:bg-white hover:text-slate-900 transition-all active:translate-y-2 active:shadow-none">
            Contact Compliance Hub
          </button>
        </div>
      </section>

      {/* Texture Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1715059382493-213b706e95f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjaGluZXJ5JTIwcHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      />
    </div>
  );
};

export default PrivacyPolicy;
