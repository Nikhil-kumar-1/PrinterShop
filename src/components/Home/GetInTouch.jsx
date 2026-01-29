import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="relative bg-[#FDFCF8] overflow-hidden font-sans">
      {/* --- HERO HEADER --- */}
      <div className="relative w-full h-64 bg-[#0f172a] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0h60L30 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center z-10"
        >
          <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs mb-3 block">
            Available 24/7
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter">
            Connect with Us
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-16 pb-24">
        <div className="grid lg:grid-cols-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-slate-200">
          {/* LEFT: FORM SECTION */}
          <div className="lg:col-span-7 bg-[#0f172a] p-8 md:p-14 lg:p-20">
            <div className="mb-10">
              <h3 className="text-3xl font-serif text-white mb-2 italic">
                Send a Message
              </h3>
              <p className="text-slate-400 font-light">
                Expect a response from our experts within 12 hours.
              </p>
            </div>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-8 p-5 bg-green-500/10 border border-green-500/50 text-green-500 flex items-center gap-3"
                >
                  <FaCheckCircle />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Inquiry Received successfully
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-700 focus-within:border-red-600 transition-colors">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent py-3 text-white outline-none placeholder:text-slate-600"
                  />
                </div>
                <div className="relative border-b border-slate-700 focus-within:border-red-600 transition-colors">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent py-3 text-white outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="relative border-b border-slate-700 focus-within:border-red-600 transition-colors">
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-transparent py-3 text-white outline-none resize-none placeholder:text-slate-600"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-10 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-white hover:text-black"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Dispatch Message"}
                  </span>
                </button>
                <div className="flex gap-5">
                  {[<FaWhatsapp />, <FaLinkedin />, <FaInstagram />].map(
                    (icon, idx) => (
                      <button
                        key={idx}
                        className="text-slate-500 hover:text-white transition-colors text-xl"
                      >
                        {icon}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO & FACEBOOK CALL */}
          <div className="lg:col-span-5 bg-white flex flex-col">
            {/* Contact Details */}
            <div className="p-8 md:p-14 space-y-10 flex-grow">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-red-600"></div> Our Office
                </h4>
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-slate-300 mt-1" />
                  <p className="text-slate-800 font-serif italic text-lg leading-snug">
                    1560 Broadway, New York,
                    <br />
                    NY 10036 United States
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-red-600"></div> Direct Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-800 font-serif italic text-lg">
                    <FaPhoneAlt className="text-slate-300 text-sm" />{" "}
                    (844)449-9672
                  </div>
                  <div className="flex items-center gap-4 text-slate-800 font-serif italic text-lg">
                    <FaEnvelope className="text-slate-300 text-sm" />{" "}
                    hello@pulpmill.com
                  </div>
                </div>
              </div>
            </div>

            {/* EYE-CATCHING FACEBOOK CALL SECTION */}
            <div className="p-8 md:p-10 bg-slate-50 border-t border-slate-100">
              <div className="relative group overflow-hidden bg-white p-6 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#1877F2] p-3 text-white text-xl rounded-sm shadow-lg">
                    <FaFacebookF />
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-xs tracking-tighter text-slate-900">
                      Official Facebook Support
                    </h5>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                      Available 24/7 Toll-Free
                    </p>
                  </div>
                </div>

                <a
                  href="tel:(844)449-9672"
                  className="block w-full text-center"
                >
                  <div className="bg-slate-900 text-white py-4 px-2 hover:bg-red-600 transition-colors group relative">
                    <p className="text-2xl font-black tracking-tighter mb-1">
                      (844)449-9672
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                      <FaHeadset className="animate-bounce" /> Click to Call
                      Agent
                    </div>
                    {/* Pulse Effect */}
                    <span className="absolute inset-0 border-2 border-slate-900 animate-ping opacity-20 pointer-events-none"></span>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <FaClock /> 09:00 - 18:00
                </span>
                <span className="text-red-600">Priority Line</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
