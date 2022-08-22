import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Preview from "../components/Preview";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Preview />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
