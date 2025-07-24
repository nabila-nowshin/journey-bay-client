import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { ThemeContext } from "../provider/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  const navLinkClasses = ({ isActive }) =>
    `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive ? "text-primary after:scale-x-100" : "text-base-content"
    }`;

  return (
    <div className=" w-full bg-base-100 shadow-md bg-opacity-90 backdrop-blur-md z-50">
      <div className="navbar bg-base-100  max-w-7xl mx-auto px-6 ">
        <div className="navbar-start">
          <Link to="/" className="text-3xl font-bold text-primary font-mulish">
            JourneyBay{" "}
          </Link>
        </div>

        {/* desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className=" px-1 flex items-center space-x-10 text-lg  text-gray-900">
            <li>
              <NavLink to={"/"} className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/packages"} className={navLinkClasses}>
                All Packages
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className={navLinkClasses}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Login Button */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"} className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/packages"} className={navLinkClasses}>
                  All Packages
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={navLinkClasses}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleTheme}
            className="btn btn-circle btn-primary hover:text-base-content
          "
          >
            {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
          <Link
            to="/login"
            className="ml-6 px-5 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-base-content transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
