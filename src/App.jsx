import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/Page/About";
import ProductPage from "./components/Page/Products";
import ContactPage from "./components/Page/ContactUs";
import PrivacyPolicy from "./components/Page/Privacy";
import TermsOfUse from "./components/Page/Terms";
import ReturnPolicy from "./components/Page/Return";
import ScrollToTop from "./components/ScrollOnTop";
import { CartProvider } from "./components/Page/CartContext";
import CartPage from "./components/Page/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop /> {/* ✅ Router ke andar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
