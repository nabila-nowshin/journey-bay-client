import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Fetch packages on searchTerm change
  useEffect(() => {
    axios
      .get(`http://localhost:3000/packages?search=${searchTerm}`)
      .then((res) => setPackages(res.data))
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <section className="min-h-screen px-6 py-12 bg-base-200">
      <h1 className="text-4xl font-bold text-center mb-8">
        Explore All Tour Packages
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by package or destination..."
          className="input input-bordered w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

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
      {packages.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No packages match your search.
        </p>
      )}
    </section>
  );
};

export default AllPackages;
