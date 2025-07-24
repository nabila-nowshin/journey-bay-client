import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.prefilledEmail || "");
  //console.log(email);

  const handleReset = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    resetPassword(emailValue)
      .then(() => {
        // Password reset email sent!
        toast.success("Reset email sent! Check your inbox.");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-yellow-900">
          Forgot Your Password?
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block mb-1 text-yellow-800 font-semibold">
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-full text-yellow-900 font-semibold"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-yellow-900">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="text-yellow-700 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
