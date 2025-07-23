import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-primary font-mulish">
          JourneyBay
        </Link>

        {/* Navigation */}
        <ul className="flex items-center space-x-10 text-lg  text-gray-900">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive ? "text-primary after:scale-x-100" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="ml-6 px-5 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
