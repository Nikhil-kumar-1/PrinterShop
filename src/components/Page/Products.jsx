import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "./CartContext";

const productsData = [
  {
    id: 1,
    category: "Printer",
    brand: "HP",
    name: "HP LaserJet Pro MFP M126nw",
    price: "269",
    specs: "Laser | Print Scan Copy | Wi-Fi",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTiAg0OK8wZhsOnZFN9D6CuzTsVIprmAuoMbBMGhvTSBi3wvQZOUDT9Qcvsz1m4tjOBhnkHHcKkUVjU86LgwUn7dunW0AkUMEyYHW9a-LthSiCdc9u8Fli4XYet4XiEK32DhO6ggQ&usqp=CAc",
  },
  {
    id: 2,
    category: "Printer",
    brand: "HP",
    name: "HP LaserJet Pro M404dn",
    price: "359",
    specs: "Monochrome Laser | Duplex",
    image:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06385614.png",
  },
  {
    id: 3,
    category: "Printer",
    brand: "Canon",
    name: "Canon PIXMA G3020",
    price: "199",
    specs: "Ink Tank | Print Scan Copy | Wi-Fi",
    image:
      "https://m.media-amazon.com/images/I/510un0jZqPL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 4,
    category: "Printer",
    brand: "Canon",
    name: "Canon imageCLASS MF3010",
    price: "229",
    specs: "Laser | Print Scan Copy",
    image:
      "https://m.media-amazon.com/images/I/61GxH8oe8yL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 5,
    category: "Printer",
    brand: "Epson",
    name: "Epson EcoTank L3250",
    price: "179",
    specs: "Ink Tank | Wi-Fi | Borderless",
    image:
      "https://m.media-amazon.com/images/I/31DKV8u49ZL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 6,
    category: "Printer",
    brand: "Brother",
    name: "Brother DCP-L2520D",
    price: "235",
    specs: "Laser | Print Scan Copy | Duplex",
    image: "https://m.media-amazon.com/images/I/61PX4h+IeuL._SX679_.jpg",
  },
  {
    id: 7,
    category: "Printer",
    brand: "Xerox",
    name: "Xerox WorkCentre 3025",
    price: "189",
    specs: "Laser MFP | Print Scan Copy",
    image: "https://m.media-amazon.com/images/I/51a1GoBdMgL._SX679_.jpg",
  },
  {
    id: 8,
    category: "Printer",
    brand: "Pantum",
    name: "Pantum P2500W",
    price: "115",
    specs: "Laser Printer | Wi-Fi",
    image: "https://m.media-amazon.com/images/I/61LIkiH3nrL._SX679_.jpg",
  },
];


const ProductPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart({ ...addedToCart, [product.id]: true });
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const filteredProducts =
    filter === "All"
      ? productsData
      : productsData.filter((p) => p.brand === filter);

  const categories = ["All", "HP", "Canon", "Epson", "Brother", "Xerox"];

  return (
    <div className="bg-[#FDFCF8] overflow-hidden">
      {/* 1. HERO SECTION - RESTORED ORIGINAL STYLE */}
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

        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none">EQUIP</h2>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <div className="sticky top-0 z-[80] bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between py-6 overflow-x-auto gap-4">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
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
            {filteredProducts.length} Units Available
          </p>
        </div>
      </div>

      {/* 3. PRODUCT GRID - FIXED USD & BUTTONS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-slate-900 shadow-2xl">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-white border-r-2 border-b-2 border-slate-900 overflow-hidden flex flex-col"
                >
                  <div className="relative h-64 bg-white p-6 overflow-hidden flex items-center justify-center">
                    <img
                      src={p.image}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      alt={p.name}
                    />
                    {addedToCart[p.id] && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        Added!
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2 block">
                      {p.brand}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-4 group-hover:text-red-600 transition-colors min-h-[40px]">
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-red-600 pl-3 mb-8">
                      {p.specs}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-baseline mb-6">
                        <span className="text-sm font-bold text-red-600 mr-1">
                          $
                        </span>
                        <span className="text-3xl font-black text-slate-900">
                          {p.price}
                        </span>
                      </div>

                      {/* ACTIONS STACKED FOR RESPONSIVENESS */}
                      <div className="flex flex-col gap-2">
                        <motion.button
                          onClick={() => handleAddToCart(p)}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                            addedToCart[p.id]
                              ? "bg-green-600 text-white"
                              : "bg-slate-900 text-white hover:bg-red-600"
                          }`}
                        >
                          {addedToCart[p.id] ? (
                            <>
                              <FaCheck /> Added
                            </>
                          ) : (
                            <>
                              <FaShoppingCart /> Add to Cart
                            </>
                          )}
                        </motion.button>

                        <button className="w-full flex items-center justify-center py-3 bg-slate-100 text-slate-900 text-[10px] font-black uppercase hover:bg-red-600 hover:text-white transition-all">
                          Details <FaChevronRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-[100px] font-black text-white leading-[0.8] uppercase mb-16 tracking-tighter">
            Witness the <br />{" "}
            <span className="font-serif italic font-light lowercase tracking-normal text-slate-900">
              machine magic.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-16 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#fff]">
              Request Quote
            </button>
            <button className="w-full sm:w-auto px-16 py-6 bg-white text-slate-900 font-black uppercase text-xs tracking-widest shadow-[10px_10px_0px_#0f172a]">
              View Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
