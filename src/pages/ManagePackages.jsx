import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManagePackages = () => {
  const { user } = useContext(AuthContext);
  const [myPackages, setMyPackages] = useState([]);
  const navigate = useNavigate();
  // console.log(user.accessToken);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/my-packages?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => setMyPackages(res.data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This package will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/packages/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
          })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Package deleted!");
              setMyPackages(myPackages.filter((pkg) => pkg._id !== id));
            }
          });
      }
    });
  };

  const handleEdit = (id) => {
    navigate(`/update-package/${id}`);
  };

  return (
    <div className="py-10 bg-base-300/20">
      <div className="max-w-7xl mx-auto p-10 shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold mb-6">Manage My Packages</h2>
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra text-base">
            <thead>
              <tr className="text-base-content bg-base-200">
                <th>Tour</th>
                <th>Destination</th>
                <th>Price</th>
                <th>Departure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {myPackages.map((pkg) => (
                <tr key={pkg._id}>
                  <td>{pkg.tour_name}</td>
                  <td>{pkg.destination}</td>
                  <td>{pkg.price}</td>
                  <td>{pkg.departure_date}</td>
                  <td>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        className="btn btn-sm btn-primary btn-outline  w-full sm:w-auto"
                        onClick={() => handleEdit(pkg._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error btn-outline w-full sm:w-auto"
                        onClick={() => handleDelete(pkg._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {myPackages.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    No packages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePackages;
