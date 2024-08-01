import Home from "../pages/Home";
import AddMenu from "../pages/AddMenu";
import Edit from "../pages/EditMenu";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
]);
export default router;
