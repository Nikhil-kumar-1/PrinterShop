import React from "react";
import { Link } from "react-router-dom"; // React Router Link import kiya
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlus,
  FaSearchDollar,
  FaMicrochip,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    brand: "HP ENTERPRISE",
    name: "DesignJet Z9+ Pro",
    price: "4,595",
    specs: "2400 DPI | 9-INK SYSTEM",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },
  {
    id: 2,
    brand: "EPSON PRO",
    name: "SureColor P9000",
    price: "3,495",
    specs: "44-INCH | ULTRACHROME HDX",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },
  {
    id: 3,
    brand: "CANON IMAGE",
    name: "PROGRAF PRO-4100",
    price: "4,995",
    specs: "LUCIA PRO INK | WI-FI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 4,
    brand: "BROTHER IND.",
    name: "GTXpro Textile",
    price: "15,400",
    specs: "DTG PRINT | CMYK+W",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },
];

const ProductSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 1. BLACK CHAIN BORDER */}
      <div className="absolute top-0 left-0 w-full h-4 bg-slate-900 flex items-center overflow-hidden opacity-90">
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white/20 font-black text-[10px] tracking-tighter"
            >
              <span>VRINDA INDUSTRIAL SYSTEMS</span>
              <FaMicrochip />
              <span>HEAVY DUTY PRESS</span>
              <div className="w-20 h-[1px] bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-1 bg-red-600" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-red-600">
                Hardware Fleet
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Machines.
              </span>
            </h2>
          </div>

          {/* Corrected Explore More Button with Link */}
          <Link to="/products">
            <motion.button
              whileHover={{ backgroundColor: "#000", color: "#fff" }}
              className="group px-10 py-5 border-4 border-slate-900 text-slate-900 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-6 transition-all"
            >
              Explore More{" "}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-slate-900">
          {products.map((item) => (
            <Link key={item.id} to="/products">
              <motion.div
                className="relative p-0 bg-white border-r-2 border-b-2 border-slate-900 group cursor-pointer overflow-hidden h-full"
              >
                {/* Image Area */}
                <div className="relative h-72 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Product Hover Info */}
                  <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-slate-900 text-white p-4">
                      <FaPlus className="text-red-500" />
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
                      {item.brand}
                    </span>
                    <FaSearchDollar className="text-slate-300 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-4 group-hover:tracking-wider transition-all">
                    {item.name}
                  </h3>

                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 border-l-2 border-red-600 pl-3">
                    {item.specs}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="text-3xl font-black text-slate-900">
                      <span className="text-sm align-top mr-1 font-bold text-red-600">
                        $
                      </span>
                      {item.price}
                    </div>
                    <div className="w-12 h-[2px] bg-slate-200 group-hover:w-20 group-hover:bg-red-600 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-b-4 border-slate-900 pb-10">
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] max-w-sm mb-6 md:mb-0">
            * All prices in USD. International shipping and local taxes
            calculated at checkout. Industrial installation included.
          </p>
          <Link to="/contact">
            <button className="bg-red-600 text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-[8px_8px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;