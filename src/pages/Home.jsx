import React from "react";
import HeroBanner from "./HeroBanner";
import FeaturedPackages from "./FeaturedPackages";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <FeaturedPackages></FeaturedPackages>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
