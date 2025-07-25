import { use } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const navigate = useNavigate();

  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    use(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const password = e.target.password.value;

    // 🔐 Password must be ≥6 chars, 1 upper, 1 lower
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!uppercase || !lowercase || !minLength) {
      let msg = "<strong>Password must:</strong><ul style='text-align:left'>";
      if (!uppercase) msg += "<li>Include at least one UPPERCASE letter</li>";
      if (!lowercase) msg += "<li>Include at least one lowercase letter</li>";
      if (!minLength) msg += "<li>Be at least 6 characters long</li>";
      msg += "</ul>";
      Swal.fire({ icon: "error", title: "Invalid Password", html: msg });
      return;
    }

    createUser(email, password)
      .then(() =>
        updateUserProfile({ displayName: name, photoURL: url }).then(() =>
          auth.currentUser.reload()
        )
      )
      .then(() => {
        setUser({ ...auth.currentUser });
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Redirecting to Home...",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        })
      );
  };

  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => navigate("/"));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div
        className="
          max-w-md w-full bg-white/30
          backdrop-blur-md
          border border-white/50 rounded-xl shadow-xl p-8
        "
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 chars, 1 uppercase, 1 lowercase)"
            className="input input-bordered w-full"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Password must be at least 6 characters, include uppercase and lowercase letters"
            required
          />
          <input
            type="url"
            placeholder="Photo URL"
            name="url"
            className="input input-bordered w-full"
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider my-4">or</div>

        <button
          className="btn w-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-base-content">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
