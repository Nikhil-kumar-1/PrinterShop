import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaMicrochip,
  FaShoppingCart,
  FaCheck,
} from "react-icons/fa";
import { useCart } from "../Page/CartContext"; // Ensure CartContext path is correct

const products = [
  {
    id: 1,
    brand: "HP",
    name: "HP LaserJet Pro MFP M126nw",
    price: "269",
    specs: "Laser | Print Scan Copy | Wi-Fi",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTiAg0OK8wZhsOnZFN9D6CuzTsVIprmAuoMbBMGhvTSBi3wvQZOUDT9Qcvsz1m4tjOBhnkHHcKkUVjU86LgwUn7dunW0AkUMEyYHW9a-LthSiCdc9u8Fli4XYet4XiEK32DhO6ggQ&usqp=CAc",
  },
  {
    id: 2,
    brand: "HP",
    name: "HP LaserJet Pro M404dn",
    price: "359",
    specs: "Monochrome Laser | Duplex",
    image:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06385614.png",
  },
  {
    id: 3,
    brand: "Canon",
    name: "Canon PIXMA G3020",
    price: "199",
    specs: "Ink Tank | Print Scan Copy | Wi-Fi",
    image:
      "https://m.media-amazon.com/images/I/510un0jZqPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 4,
    brand: "Canon",
    name: "Canon imageCLASS MF3010",
    price: "229",
    specs: "Laser | Print Scan Copy",
    image:
      "https://m.media-amazon.com/images/I/61GxH8oe8yL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 5,
    brand: "Epson",
    name: "Epson EcoTank L3250",
    price: "179",
    specs: "Ink Tank | Wi-Fi | Borderless",
    image:
      "https://m.media-amazon.com/images/I/31DKV8u49ZL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 6,
    brand: "Brother",
    name: "Brother DCP-L2520D",
    price: "235",
    specs: "Laser | Print Scan Copy | Duplex",
    image: "https://m.media-amazon.com/images/I/61PX4h+IeuL._SX679_.jpg",
  },
  {
    id: 7,
    brand: "Xerox",
    name: "Xerox WorkCentre 3025",
    price: "189",
    specs: "Laser MFP | Print Scan Copy",
    image: "https://m.media-amazon.com/images/I/51a1GoBdMgL._SX679_.jpg",
  },
  {
    id: 8,
    brand: "Pantum",
    name: "Pantum P2500W",
    price: "115",
    specs: "Laser Printer | Wi-Fi",
    image: "https://m.media-amazon.com/images/I/61LIkiH3nrL._SX679_.jpg",
  },
];
const ProductSection = () => {
  const { addToCart } = useCart() || {}; // Safe check
  const [added, setAdded] = useState({});

  const handleAdd = (e, item) => {
    e.preventDefault(); // Prevents Link navigation
    if (addToCart) {
      addToCart(item);
      setAdded((prev) => ({ ...prev, [item.id]: true }));
      setTimeout(
        () => setAdded((prev) => ({ ...prev, [item.id]: false })),
        2000,
      );
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* 1. MARQUEE BORDER */}
      <div className="absolute top-0 left-0 w-full h-4 bg-slate-900 flex items-center overflow-hidden z-20">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white/40 font-black text-[9px] uppercase tracking-widest"
            >
              <span>VRINDA INDUSTRIAL SYSTEMS</span> <FaMicrochip />
              <span>HEAVY DUTY FLEET 2026</span>{" "}
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-red-600" />
              <span className="text-xs font-black uppercase tracking-widest text-red-600">
                Hardware Fleet
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Precision <br /> <span className="text-red-600">Machines.</span>
            </h2>
          </div>
          <Link to="/products">
            <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase text-xs tracking-widest flex items-center gap-6 shadow-[8px_8px_0px_#ef4444] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              The Catalog <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-slate-900 shadow-2xl">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border-r-2 border-b-2 border-slate-900 group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-slate-50 overflow-hidden flex items-center justify-center p-8">
                <img
                  src={item.image}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={item.name}
                />
              </div>

              {/* Info Area */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-black uppercase text-red-600 mb-2">
                  {item.brand}
                </span>
                <h3 className="text-lg font-black text-slate-900 uppercase leading-tight mb-4 min-h-[44px]">
                  {item.name}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-red-600 pl-3 mb-8">
                  {item.specs}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-3xl font-black text-slate-900">
                    <span className="text-xs align-top mr-1 font-bold text-red-600">
                      $
                    </span>
                    {item.price}
                  </div>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={(e) => handleAdd(e, item)}
                    className={`p-4 transition-all ${added[item.id] ? "bg-green-600" : "bg-slate-900 hover:bg-red-600"} text-white`}
                  >
                    {added[item.id] ? <FaCheck /> : <FaShoppingCart />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS For Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ProductSection;
