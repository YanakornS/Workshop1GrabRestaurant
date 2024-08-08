import Home from "../pages/Home";
import AddMenu from "../pages/AddMenu";
import Edit from "../pages/EditMenu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../component/Layout";
import AdminLayout from "../component/AdminLayout";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/AddMenu",
        element: <AddMenu />,
      },
      {
        path: "/Edit/:id",
        element: <Edit />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        element: <div>dashboard</div>,
      },
    ],
  },
]);

export default router;
