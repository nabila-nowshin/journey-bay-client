import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) {
    // not logged in → kick to login & remember current page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // logged in → render the protected component
  return children;
};

export default PrivateRoute;
