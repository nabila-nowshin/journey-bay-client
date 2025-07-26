// import { useContext, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import toast from "react-hot-toast";

// const AddPackage = () => {

// try {
//   const res = await fetch("http://localhost:3000/packages", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newPackage),
//   });

//   const data = await res.json();
//   if (data.insertedId) {
//     toast.success("Tour package added!");
//     form.reset();
//   } else {
//     toast.error("Failed to add package.");
//   }
// } catch (err) {
//   toast.error("Server error.");
// } finally {
//   setLoading(false);
// }

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
      .post("http://localhost:3000/packages", newPackage, {
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
    <section className="max-w-4xl mx-auto p-6 bg-white rounded shadow my-10">
      <h2 className="text-2xl font-bold mb-6">Add Tour Package</h2>
      <form
        onSubmit={handleAdd}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="tour_name"
          required
          placeholder="Tour Name"
          className="input input-bordered"
        />
        <input
          name="image"
          required
          placeholder="Image URL"
          className="input input-bordered"
        />
        <input
          name="duration"
          required
          placeholder="Duration"
          className="input input-bordered"
        />
        <input
          name="departure_location"
          required
          placeholder="Departure Location"
          className="input input-bordered"
        />
        <input
          name="destination"
          required
          placeholder="Destination"
          className="input input-bordered"
        />
        <input
          name="price"
          required
          type="number"
          placeholder="Price"
          className="input input-bordered"
        />
        <input
          name="departure_date"
          required
          type="date"
          className="input input-bordered"
        />
        <input
          name="contact_no"
          required
          placeholder="Contact No."
          className="input input-bordered"
        />
        <textarea
          name="package_details"
          required
          placeholder="Package Details"
          className="textarea textarea-bordered col-span-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary col-span-full"
        >
          {loading ? "Submitting..." : "Add Package"}
        </button>
      </form>
    </section>
  );
};

export default AddPackage;
