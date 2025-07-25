import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/bookings?email=${user.email}`)
        .then((res) => setBookings(res.data))
        .catch((err) => {
          toast.error("Failed to load bookings");
          console.error(err);
        });
    }
  }, [user]);

  const handleConfirm = async (id) => {
    try {
      await axios
        .patch(`http://localhost:3000/bookings/${id}`, {
          status: "completed",
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success("Booking confirmed!");
            setBookings((prev) =>
              prev.map((booking) =>
                booking._id === id
                  ? { ...booking, status: "completed" }
                  : booking
              )
            );
          }
        });
    } catch (err) {
      toast.error("Could not update booking");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 my-10 bg-base-100 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-primary mb-6">
        My Bookings ({bookings.length})
      </h2>

      {bookings.length === 0 ? (
        <p className="text-base-content text-lg min-h-[50vh]">
          No bookings found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th>Tour Name</th>
                <th>Guide</th>
                <th>Contact</th>
                <th>Departure</th>
                <th>From → To</th>
                <th>Note</th>
                <th>Status</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td className="font-medium">{booking.tour_name}</td>
                  <td>{booking.guide_name}</td>
                  <td>{booking.guide_email}</td>
                  <td>{booking.departure_date}</td>
                  <td>
                    {booking.departure_location} → {booking.destination}
                  </td>
                  <td>{booking.notes || "—"}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "completed"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {booking.status === "pending" ? (
                      <button
                        onClick={() => handleConfirm(booking._id)}
                        className="btn btn-sm btn-primary"
                      >
                        Confirm
                      </button>
                    ) : (
                      <span className="text-success font-semibold">✓</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
