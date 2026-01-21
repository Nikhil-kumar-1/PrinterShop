import React from "react";
import { motion } from "framer-motion";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaArrowLeft,
  FaPrint,
  FaTools,
} from "react-icons/fa";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const handleQuantityChange = (id, currentQuantity, delta) => {
    updateQuantity(id, currentQuantity + delta);
  };

  const formatPrice = (priceString) => {
    return parseFloat(priceString.replace(/,/g, ""));
  };

  // EMPTY CART STATE
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFCF8] overflow-hidden">
        {/* HERO SECTION FOR EMPTY CART */}
        <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaShoppingCart
                size={80}
                className="mx-auto text-red-600/30 mb-8"
              />
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
                Fleet{" "}
                <span className="font-serif italic font-light text-red-600 lowercase tracking-normal">
                  empty.
                </span>
              </h1>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                Your industrial machinery selection is currently empty. Start
                building your high-performance fleet today.
              </p>
              <Link to="/products">
                <button className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs shadow-[8px_8px_0px_#fff] hover:bg-white hover:text-slate-900 transition-all">
                  Browse Catalog
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCF8] overflow-hidden min-h-screen">
      {/* 1. INDUSTRIAL HERO SECTION (The One You Requested) */}
      <section className="relative pt-48 pb-32 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Hardware Hub"
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
                Procurement & Logistics
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Fleet <br />
              <span className="font-serif italic font-light text-red-600 lowercase tracking-normal text-6xl md:text-[100px]">
                hub.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-10 items-center border-l-2 border-red-600/30 pl-8"
            >
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  Total Units
                </p>
                <p className="text-white text-3xl font-black">{cartCount}</p>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  Est. Capital
                </p>
                <p className="text-white text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  ${cartTotal.toLocaleString()}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none text-white">
          <h2 className="text-[20rem] font-black leading-none uppercase">
            Cart
          </h2>
        </div>
      </section>

      {/* 2. MAIN CART CONTENT */}
      <div className="container mx-auto px-6 relative z-10 -mt-10 mb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* CART ITEMS LIST */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center bg-white p-6 border-2 border-slate-900 shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
                Selected Hardware
              </h3>
              <button
                onClick={clearCart}
                className="text-[10px] font-black uppercase text-red-600 hover:underline"
              >
                Flush All Units
              </button>
            </div>

            <div className="bg-white border-2 border-slate-900 shadow-2xl divide-y-2 divide-slate-100">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col md:flex-row items-center p-8 gap-8 group"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="w-full md:w-48 h-32 bg-slate-100 overflow-hidden border border-slate-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="flex-grow space-y-2">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                      {item.brand}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 uppercase leading-none">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {item.specs}
                    </p>
                    <p className="text-lg font-black text-slate-900 pt-2">
                      ${formatPrice(item.price).toLocaleString()}
                    </p>
                  </div>

                  {/* QUANTITY & ACTIONS */}
                  <div className="flex items-center gap-6 border-l-0 md:border-l-2 border-slate-100 pl-0 md:pl-8">
                    <div className="flex items-center border-2 border-slate-900">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity, -1)
                        }
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="w-10 text-center font-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity, 1)
                        }
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 text-slate-300 hover:text-red-600 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-red-600 transition-all mt-4"
            >
              <FaArrowLeft /> Back to Production Line
            </Link>
          </div>

          {/* ORDER SUMMARY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#020617] text-white p-10 shadow-[20px_20px_0px_#dc2626] border border-slate-800">
              <h2 className="text-2xl font-black uppercase mb-10 border-b border-white/10 pb-4 tracking-tighter flex items-center gap-3">
                <FaTools className="text-red-600 text-sm" /> Logistics Info
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span>Unit Subtotal</span>
                  <span className="text-white">
                    ${cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span>Industrial Tax</span>
                  <span className="text-white italic">Calculating...</span>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-1">
                      Total Payload
                    </p>
                    <h3 className="text-4xl font-black tracking-tighter">
                      ${cartTotal.toLocaleString()}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase pb-1">
                    USD
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs shadow-xl transition-all"
                >
                  Verify Selection & Checkout
                </motion.button>
                <button className="w-full py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all">
                  Request Technical Quote
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.3em]">
                  Authorized Engineering Dealer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
