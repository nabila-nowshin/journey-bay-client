import React from "react";
import HeroBanner from "./HeroBanner";
import FeaturedPackages from "./FeaturedPackages";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <FeaturedPackages></FeaturedPackages>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
