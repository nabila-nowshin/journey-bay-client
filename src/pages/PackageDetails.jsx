import { useLoaderData } from "react-router";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const PackageDetails = () => {
  const packageData = useLoaderData();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const {
    tour_name,
    image,
    guide_name,
    guide_photo,
    duration,
    departure_date,
    price,
    package_details,
    destination,
    departure_location,
    guide_contact_no,
    bookingCount,
  } = packageData;

  return (
    <div className="relative">
      <section className=" max-w-4xl mx-auto rounded-md my-12  overflow-hidden bg-gradient-to-tr from-blue-50 to-blue-100   shadow-md opacity-90 ">
        {/* Particles as the very bottom background */}
        {init && (
          <Particles
            id="package-details-particles"
            className="absolute inset-0 -z-30"
            options={{
              fullScreen: { enable: false },
              background: { color: "transparent" },
              particles: {
                number: { value: 10 },
                color: { value: "#000000" },
                size: {
                  value: 10,
                  random: { enable: true, minimumValue: 2 },
                },
                move: {
                  enable: true,
                  speed: 0.7,
                  direction: "none",
                  outModes: { default: "out" },
                },
                opacity: {
                  value: 0.2,
                  random: true,
                },
                shape: {
                  type: "triangle",
                },
              },
            }}
          />
        )}

        {/* Content container with relative positioning and highest z-index */}
        <div className="relative z-10  rounded-md p-6 backdrop-blur-xs">
          {/* Tour Image */}
          <img
            src={image}
            alt={tour_name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          {/* Name */}
          <h1 className="text-3xl font-bold mb-4">{tour_name}</h1>

          {/* Guide Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={guide_photo}
              alt={guide_name}
              className="w-14 h-14 rounded-full border"
            />
            <div>
              <p className="font-semibold">{guide_name}</p>
              <p className="text-sm text-gray-600">
                Contact: {guide_contact_no}
              </p>
            </div>
          </div>

          {/* Duration, Price */}
          <div className="flex flex-wrap gap-6 mb-6 text-lg">
            <p>
              🕒 <strong>Duration:</strong> {duration}
            </p>
            <p>
              💰 <strong>Price:</strong> ৳{price}
            </p>
          </div>

          {/* Full Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {package_details || "No description available."}
            </p>
          </div>

          {/* Booking Count */}
          <p className="mb-4 font-medium">
            Bookings so far: {bookingCount || 0}
          </p>

          {/* Departure Location + Date */}
          <p className="mb-2">
            <strong>Departure Location:</strong> {departure_location || "N/A"}
          </p>
          <p className="mb-6">
            <strong>Departure Date:</strong> {departure_date || "N/A"}
          </p>

          {/* Destination */}
          <p className="mb-6">
            <strong>Destination:</strong> {destination || "N/A"}
          </p>

          {/* Book Now Button */}
          <button
            onClick={() => alert("Booking feature coming soon!")}
            className="btn btn-primary  btn-outline rounded-full"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
