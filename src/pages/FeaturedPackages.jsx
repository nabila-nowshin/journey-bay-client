import { Link } from "react-router";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthContext";

const FeaturedPackages = () => {
  const [packages, setPackages] = useState([]);
  const { loading } = use(AuthContext);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/packages")
      .then((res) => {
        const featured = res.data.slice(0, 6);
        setPackages(featured);
      })
      .catch((err) => {
        console.error("Failed to fetch packages:", err);
      });
  }, []);

  if (loading) return <Loader></Loader>;

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-20 animate-gradient-x bg-gradient-to-r from-sky-100 via-blue-300 to-indigo-400  opacity-30 blur-2xl"></div>

      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30 },
              color: { value: "#333333" },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.6 },
            },
          }}
        />
      )}

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-base-content mb-8">
          🌟 Featured Packages
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item._id}
              className="border border-base-300 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.025]"
            >
              <img
                src={item.image}
                alt={item.tour_name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 text-left space-y-3 text-base-content">
                <h3 className="text-xl font-bold">{item.tour_name}</h3>

                <div className="flex items-center gap-3">
                  <img
                    src={item.guide_photo}
                    alt={item.guide_name}
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <p className="text-sm font-medium">{item.guide_name}</p>
                </div>

                <p className="text-sm">🕒 {item.duration}</p>
                <p className="text-sm">🗓️ {item.departure_date}</p>
                <p className="text-lg font-bold text-primary">৳ {item.price}</p>

                <Link
                  to={`/packages/${item._id}`}
                  className="btn btn-outline btn-primary rounded-full outline-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/packages"
            className="inline-block px-6 py-3 rounded-lg bg-secondary text-secondary-content font-medium hover:brightness-110 transition"
          >
            Show All Packages →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackages;
