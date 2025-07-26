import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdatePackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/packages/${id}`).then((res) => {
      setTour(res.data);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const updated = {
      tour_name: form.tour_name.value,
      duration: form.duration.value,
      price: parseInt(form.price.value),
      destination: form.destination.value,
    };

    axios
      .patch(`http://localhost:3000/packages/${id}`, updated, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Package updated!");
          navigate("/manageMyPackages");
        } else {
          toast.error("No changes made.");
        }
      })
      .finally(() => setLoading(false));
  };

  if (!tour) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow my-10">
      <h2 className="text-2xl font-bold mb-6">Update Tour Package</h2>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="tour_name"
          defaultValue={tour.tour_name}
          required
          className="input input-bordered"
        />
        <input
          name="duration"
          defaultValue={tour.duration}
          required
          className="input input-bordered"
        />
        <input
          name="price"
          defaultValue={tour.price}
          type="number"
          required
          className="input input-bordered"
        />
        <input
          name="destination"
          defaultValue={tour.destination}
          required
          className="input input-bordered"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary col-span-full"
        >
          {loading ? "Updating..." : "Update Package"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePackage;
