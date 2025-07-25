import React from "react";
import tourGuide from "../assets/tourGuide.jpg";
import aboutBG from "../assets/aboutBg.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="relative min-h-screen  py-16 px-6 overflow-hidden">
      {/* Lottie Full Background */}

      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <Lottie
          animationData={aboutBG}
          loop={true}
          // style={{ height: 300 }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.1)] z-10"></div>

      {/* Content with glass effect */}
      <div className="relative max-w-5xl mx-auto rounded-3xl p-12 shadow-lg ">
        <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
          About JourneyBay
        </h1>

        <p className="text-lg text-base-content/90 leading-relaxed max-w-3xl mx-auto mb-10 text-center">
          At JourneyBay, we believe travel is more than a destination — it’s an
          experience that creates lasting memories. Founded with passion and
          expertise, our mission is to connect you with the best tours, expert
          guides, and unforgettable adventures across Bangladesh and beyond.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-12 items-center justify-center">
          {/* Image or illustration */}
          <img
            src={tourGuide}
            alt="JourneyBay Team"
            className="rounded-xl shadow-lg w-full md:w-1/2 mb-8 md:mb-0"
          />

          {/* Text content */}
          <div className="max-w-xl text-base-content/90 space-y-6">
            <p>
              Our carefully curated packages are designed with you in mind,
              offering a mix of adventure, culture, and relaxation. Whether it’s
              trekking the hills of Bandarban, exploring the serene Sundarbans,
              or lounging on the sandy beaches of Cox’s Bazar, JourneyBay is
              your trusted companion.
            </p>

            <p>
              Our team of passionate travel experts and local guides ensure that
              every trip is safe, enjoyable, and tailored to your needs. We are
              committed to sustainability, cultural respect, and delivering
              exceptional customer service.
            </p>

            <p className="font-semibold text-primary">
              Ready to explore? Your next adventure starts here!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
