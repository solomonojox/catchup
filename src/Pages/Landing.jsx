import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Landing/HeroSection";
import FeaturesSection from "../Components/Landing/FeaturesSection";
import PricingSection from "../Components/Landing/PricingSection";
import TestimonialSection from "../Components/Landing/TestimonialSection";
import Footer from "../Components/Footer";
import FinalCTA from "../Components/Landing/FinalCTA";
// import heroImage from "./assets/hero-image.jpg"; // Make sure to have an image in the assets folder

const LandingPage = () => {
  function foo() {
    console.log('heklo');
  }

  console.log(typeof foo());
  return (
    <div className="">
      <Navbar />

      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default LandingPage;