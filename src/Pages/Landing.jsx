import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Landing/HeroSection";
import FeaturesSection from "../Components/Landing/FeaturesSection";
import PricingSection from "../Components/Landing/PricingSection";
import TestimonialSection from "../Components/Landing/TestimonialSection";
import Footer from "../Components/Footer";
// import FinalCTA from "../Components/Landing/FinalCTA";
import ContactSection from "../Components/Landing/ContactSection";
import OurClients from "../Components/Landing/OurClients";
import { Contact2 } from "../Components/Landing/Contact2";
import ReferSection from "../Components/Landing/ReferSection";
import { StatsSection } from "../Components/Landing/StartsSection";
import DownloadSection from "../Components/Landing/DownloadSection";
// import heroImage from "./assets/hero-image.jpg"; // Make sure to have an image in the assets folder

const LandingPage = () => {
  function foo() {
    console.log('heklo');
  }

  console.log(typeof foo());
  return (
    <div className="">
      <div className="sticky z-50 top-0">
        <Navbar />
      </div>

      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <StatsSection />
      <ReferSection />
      <PricingSection />
      <Contact2 />
      <TestimonialSection />
      {/* <FinalCTA /> */}
      <OurClients />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;