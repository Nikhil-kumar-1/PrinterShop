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

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/return" element={<ReturnPolicy />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
