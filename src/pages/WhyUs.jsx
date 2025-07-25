import React from "react";

const WhyUs = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose JourneyBay?</h2>
        <p className="mb-10 text-base-content/80">
          Trusted by hundreds of travelers across Bangladesh. Here's why they
          love us!
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-base-200 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Expert Guides</h3>
            <p>Each tour is led by local experts who know every hidden gem.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Affordable Prices</h3>
            <p>Top destinations with budget-friendly packages.</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Secure Booking</h3>
            <p>
              Easy, fast, and secure booking system with instant confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
