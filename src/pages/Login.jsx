import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div
        className="max-w-md w-full bg-white/30   
  backdrop-blur-md       
  border border-white/50 rounded-xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to JourneyBay
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider my-4">or</div>

        <button className="btn w-full border border-gray-300 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-base-content">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
