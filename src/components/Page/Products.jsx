import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPrint,
  FaShoppingCart,
  FaChevronRight,
  FaFilter,
  FaTools,
  FaHistory,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const productsData = [
  // --- PRODUCTION DIGITAL PRESS ---
  {
    id: 1,
    category: "Production",
    brand: "HP INDIGO",
    name: "15K Digital Press",
    price: "245,000",
    specs: "7-Color | 1200 DPI",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },
  {
    id: 2,
    category: "Production",
    brand: "HEIDELBERG",
    name: "Versafire LV",
    price: "185,000",
    specs: "CMYK+W | Specialty Toner",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },
  {
    id: 3,
    category: "Production",
    brand: "RICOH",
    name: "Pro C7200x",
    price: "95,500",
    specs: "5th Color Station | 360gsm",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },
  {
    id: 4,
    category: "Production",
    brand: "XEROX",
    name: "Iridesse Production",
    price: "210,000",
    specs: "Metallic Inks | Ultra HD",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 5,
    category: "Production",
    brand: "KONICA MINOLTA",
    name: "AccurioPress C14000",
    price: "160,000",
    specs: "140ppm | Intelligent Quality",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },

  // --- LARGE FORMAT ---
  {
    id: 6,
    category: "Large Format",
    brand: "EPSON",
    name: "SureColor P20000",
    price: "11,995",
    specs: "64-inch | 10-Color Ink",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },
  {
    id: 7,
    category: "Large Format",
    brand: "CANON",
    name: "imagePROGRAF PRO-6100",
    price: "12,495",
    specs: "60-inch | LUCIA PRO Ink",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 8,
    category: "Large Format",
    brand: "MIMAKI",
    name: "UCJV300-160",
    price: "22,500",
    specs: "UV LED Print & Cut",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },
  {
    id: 9,
    category: "Large Format",
    brand: "ROLAND",
    name: "TrueVIS VG3-640",
    price: "18,900",
    specs: "Eco-Solvent | FlexFire",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },
  {
    id: 10,
    category: "Large Format",
    brand: "HP",
    name: "Latex 800 W",
    price: "29,000",
    specs: "White Ink | Eco-Conscious",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },

  // --- INDUSTRIAL TEXTILE ---
  {
    id: 11,
    category: "Textile",
    brand: "BROTHER",
    name: "GTXpro B Bulk",
    price: "25,000",
    specs: "DTG | Industrial Heads",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },
  {
    id: 12,
    category: "Textile",
    brand: "KORNIT",
    name: "Atlas MAX",
    price: "350,000",
    specs: "3D Print | Sustainable",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 13,
    category: "Textile",
    brand: "EPSON",
    name: "Monna Lisa 8000",
    price: "145,000",
    specs: "Direct-to-Fabric | 8-Color",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },
  {
    id: 14,
    category: "Textile",
    brand: "MIMAKI",
    name: "TS330-1600",
    price: "24,000",
    specs: "Sublimation Transfer",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },
  {
    id: 15,
    category: "Textile",
    brand: "D.GEN",
    name: "Papyrus Arete",
    price: "88,000",
    specs: "High Speed Transfer",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },

  // --- 3D & SPECIALTY ---
  {
    id: 16,
    category: "Specialty",
    brand: "STRATASYS",
    name: "J850 Prime",
    price: "220,000",
    specs: "Full Color 3D | PANTONE",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 17,
    category: "Specialty",
    brand: "FORMLABS",
    name: "Form 3L Industrial",
    price: "10,999",
    specs: "Large Format SLA",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
  },
  {
    id: 18,
    category: "Specialty",
    brand: "HP",
    name: "Multi Jet Fusion 5200",
    price: "285,000",
    specs: "Final Part Production",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
  },
  {
    id: 19,
    category: "Specialty",
    brand: "MARKFORGED",
    name: "X7 Carbon Fiber",
    price: "69,000",
    specs: "Continuous Fiber Reinf.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
  },
  {
    id: 20,
    category: "Specialty",
    brand: "ROLAND",
    name: "VersaSTUDIO MPX-90",
    price: "4,500",
    specs: "Metal Engraving",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
];

const ProductPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  const categories = [
    "All",
    "Production",
    "Large Format",
    "Textile",
    "Specialty",
  ];

  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. HERO SECTION - SYNCED WITH ABOUT PAGE */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1715059382493-213b706e95f3?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover grayscale"
            alt="Printing Fleet"
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
                High-Performance Fleet 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              The <br />
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                catalog.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light border-l-2 border-red-600/30 pl-8"
            >
              Explore our industrial-grade machinery designed for unmatched
              durability and pixel-perfect accuracy.
            </motion.p>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none">EQUIP</h2>
        </div>
      </section>

      {/* 2. FILTER BAR - SHARP & STICKY */}
      <div className="sticky top-0 z-[80] bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between py-6 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase hidden lg:block tracking-widest">
            {filteredProducts.length} Heavy-Duty Units Available
          </p>
        </div>
      </div>

      {/* 3. PRODUCT GRID - SHARP BORDERS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-slate-900 shadow-2xl">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-white border-r-2 border-b-2 border-slate-900 overflow-hidden"
                >
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    <img
                      src={p.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      alt={p.name}
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2 block">
                      {p.brand}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-4 group-hover:text-red-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-red-600 pl-3 mb-8">
                      {p.specs}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-slate-900">
                        <span className="text-sm align-top mr-1 font-bold text-red-600">
                          $
                        </span>
                        {p.price}
                      </span>
                      <button className="bg-slate-900 text-white p-4 group-hover:bg-red-600 transition-colors">
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-24 bg-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-[100px] font-black text-white leading-[0.8] uppercase mb-16 tracking-tighter">
            Witness the <br />{" "}
            <span className="font-serif italic font-light lowercase tracking-normal text-slate-900">
              machine magic.
            </span>
          </h2>
          <button className="px-16 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#fff] hover:bg-white hover:text-slate-900 transition-all active:translate-y-2 active:shadow-none">
            Request Quote
          </button>
        </div>
      </section>

      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />
    </div>
  );
};

export default ProductPage;
