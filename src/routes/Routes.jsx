import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPackages from "../pages/AllPackages";
import About from "../pages/About";
import ForgotPassword from "../pages/ForgetPassword";
import MyBookings from "../pages/MyBookings";
import AddPackage from "../pages/AddPackage";
import ManagePackages from "../pages/ManagePackages";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../provider/PrivateRoute";
import PackageDetails from "../pages/PackageDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/packages",
        Component: AllPackages,
      },
      {
        path: "/packages/:id",
        element: (
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/packages/${params.id}`),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/forgetPassword",
        element: (
          <PrivateRoute>
            <ForgotPassword></ForgotPassword>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/addPackage",
        element: (
          <PrivateRoute>
            <AddPackage></AddPackage>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyPackages",
        element: (
          <PrivateRoute>
            <ManagePackages></ManagePackages>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
