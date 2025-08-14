import React from "react";

const Testimonials = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">JourneyBay by the Numbers</h2>
        <div
          className="stats stats-vertical md:stats-horizontal gap-6 
                    bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg
                    transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgb(59,130,246)] outline-1"
        >
          <div className="stat">
            <div className="stat-title text-primary">Countries Covered</div>
            <div className="stat-value text-primary">15+</div>
            <div className="stat-desc">Across Bangladesh & beyond</div>
          </div>
          <div className="stat">
            <div className="stat-title text-secondary">Expert Guides</div>
            <div className="stat-value text-secondary">30+</div>
            <div className="stat-desc">Friendly & experienced</div>
          </div>
          <div className="stat">
            <div className="stat-title text-accent">Happy Customers</div>
            <div className="stat-value text-accent">1200+</div>
            <div className="stat-desc">And counting!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
