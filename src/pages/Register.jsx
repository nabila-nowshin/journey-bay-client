import { Link } from "react-router";

const Register = () => {
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

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars, 1 uppercase, 1 lowercase)"
            className="input input-bordered w-full"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Password must be at least 6 characters, include uppercase and lowercase letters"
            required
          />
          <input
            type="url"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider my-4">or</div>

        <button className="btn w-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
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
