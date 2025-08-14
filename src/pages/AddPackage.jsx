import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const AddPackage = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newPackage = {
      tour_name: form.tour_name.value,
      image: form.image.value,
      duration: form.duration.value,
      departure_location: form.departure_location.value,
      destination: form.destination.value,
      price: form.price.value,
      departure_date: form.departure_date.value,
      package_details: form.package_details.value,
      contact_no: form.contact_no.value,
      guide_name: user?.displayName,
      guide_photo: user?.photoURL,
      guide_email: user?.email,
    };

    axios
      .post("https://journey-bay-server.vercel.app/packages", newPackage, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Tour package added!");
          form.reset();
          setLoading(false);
        } else {
          toast.error("Failed to add package.");
        }
      });
  };
  return (
    <div className="bg-base-300/20 py-10">
      <div className="max-w-4xl mx-auto p-10 bg-base-100 rounded-2xl shadow-lg ">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Add Tour Package
        </h2>
        <form
          onSubmit={handleAdd}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
        >
          <div className="form-control">
            <input
              name="tour_name"
              required
              placeholder="Tour Name"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="image"
              required
              placeholder="Image URL"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="duration"
              required
              placeholder="Duration (e.g., 3 Days 2 Nights)"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="departure_location"
              required
              placeholder="Departure Location"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="destination"
              required
              placeholder="Destination"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="price"
              required
              type="number"
              min="0"
              placeholder="Price (in BDT)"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="departure_date"
              required
              type="date"
              className="input input-bordered bg-base-200 w-full"
            />
          </div>
          <div className="form-control">
            <input
              name="contact_no"
              required
              placeholder="Contact No."
              className="input input-bordered bg-base-200 w-full"
            />
          </div>

          <div className="form-control col-span-full">
            <textarea
              name="package_details"
              required
              placeholder="Package Details"
              rows={4}
              className="textarea textarea-bordered bg-base-200 w-full"
            />
          </div>

          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full md:w-auto px-10"
            >
              {loading ? "Submitting..." : "Add Package"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
