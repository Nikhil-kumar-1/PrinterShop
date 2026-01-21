import React from "react";
import HeroOneSection from "./Hero";
import AboutSection from "./AboutHome";
import HomeServices from "./ServiceHome";
import WhyChooseUs from "./WhyChooseUs";
import ContactSection from "./GetInTouch";
import ProductSection from "./Product";

const Home = () => {
  return(
    <>
    <HeroOneSection />
    <ProductSection />
    <AboutSection />
    <HomeServices />
    <WhyChooseUs />
    <ContactSection />
    </>
  );
};

export default Home;
