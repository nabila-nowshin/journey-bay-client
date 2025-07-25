import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedPackages = () => {
  const [packages, setPackages] = useState([]);

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-base-content">
        🌟 Featured Packages
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => (
          <div
            key={item._id}
            className="bg-base-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-base-300"
          >
            <img
              src={item.image}
              alt={item.tour_name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 space-y-2 text-base-content">
              <h3 className="text-xl font-semibold">{item.tour_name}</h3>

              <div className="flex items-center gap-3">
                <img
                  src={item.guide_photo}
                  alt={item.guide_mame}
                  className="w-8 h-8 rounded-full object-cover border"
                />
                <p className="text-sm font-medium">{item.guide_name}</p>
              </div>

              <p className="text-sm">🕒 {item.duration}</p>
              <p className="text-sm">🗓️ {item.departure_date}</p>
              <p className="text-lg font-bold text-primary">৳ {item.price}</p>

              <Link
                to={`/packages/${item._id}`}
                className="inline-block mt-2 px-4 py-2 bg-primary text-primary-content rounded-lg hover:brightness-110"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-10">
        <Link
          to="/packages"
          className="inline-block bg-secondary text-secondary-content px-6 py-3 rounded-lg hover:brightness-110"
        >
          Show All Packages →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackages;
