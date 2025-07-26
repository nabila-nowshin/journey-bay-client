import { useLoaderData } from "react-router";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { use, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const PackageDetails = () => {
  const packageData = useLoaderData();
  const [init, setInit] = useState(false);
  const { user } = use(AuthContext);
  const [localBookingCount, setLocalBookingCount] = useState(
    packageData.bookingCount || 0
  );

  //   console.log(user.accessToken);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const {
    _id,
    tour_name,
    image,
    guide_name,
    guide_email,
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

  const handleBooking = (e) => {
    e.preventDefault();
    const notes = e.target.notes?.value || "";

    const bookingInfo = {
      tour_id: _id,
      tour_name: tour_name,
      guide_name: guide_name,
      guide_email: guide_email,
      buyer_email: user.email,
      buyer_name: user.displayName,
      booking_date: new Date(),
      departure_date: departure_date,
      departure_location,
      destination,
      notes,
      status: "pending",
    };

    try {
      axios
        .post("http://localhost:3000/bookings", bookingInfo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => {
          if (res.data.insertedId || res.data.acknowledged) {
            toast.success("Booking confirmed!");
            setLocalBookingCount((prev) => prev + 1);
            document.getElementById("my_modal_5").close();
          } else {
            toast.error("Booking failed. Please try again.");
          }
        });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

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
            Bookings so far: {localBookingCount || 0}
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
            className="btn btn-primary btn-outline rounded-full"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Book Now
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-base-100 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Confirm Your Booking
              </h3>

              <form
                method="dialog"
                className="space-y-4"
                onSubmit={handleBooking}
              >
                {/* Tour Name (disabled) */}
                <div>
                  <label className="label font-medium text-base-content">
                    Tour Package
                  </label>
                  <input
                    type="text"
                    value={tour_name}
                    disabled
                    className="input input-bordered w-full font-medium bg-base-200 text-gray-900"
                  />
                </div>

                {/* Price (disabled) */}
                <div>
                  <label className="label font-medium text-base-content">
                    Price
                  </label>
                  <input
                    type="text"
                    value={price}
                    disabled
                    className="input input-bordered w-full font-medium bg-base-200 text-gray-900"
                  />
                </div>

                {/* Buyer name */}
                <div>
                  <label className="label font-medium text-base-content">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    disabled
                    className="input input-bordered w-full font-medium bg-base-200 text-gray-900"
                  />
                </div>

                {/* Buyer email */}
                <div>
                  <label className="label font-medium text-base-content">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="input input-bordered w-full font-medium bg-base-200 text-gray-900"
                  />
                </div>

                {/* Booking Date */}
                <div>
                  <label className="label font-medium text-base-content">
                    Booking Date
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString()}
                    disabled
                    className="input input-bordered w-full font-medium bg-base-200 text-gray-900"
                  />
                </div>

                {/* Special Note */}
                <div>
                  <label className="label font-medium text-base-content">
                    Special Note (optional)
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Any preferences or notes?"
                    name="notes"
                  ></textarea>
                </div>

                {/* Actions */}
                <div className="modal-action flex justify-between">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full px-6"
                  >
                    Book Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
