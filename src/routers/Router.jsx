import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const AddMenu = lazy(() => import("../pages/AddMenu"));
const Edit = lazy(() => import("../pages/EditMenu"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Layout = lazy(() => import("../component/Layout"));
const AdminLayout = lazy(() => import("../component/AdminLayout"));
const NotAllowed = lazy(() => import("../pages/NotAllowed"));
const ModOrAdminPage = lazy(() => import("../pages/ModOrAdminPage"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const UsePage = lazy(() => import("../pages/UsePage"));
const AdminPage = lazy(() => import("../pages/AdminPage"));

//import AdminPage from "../pages/AdminPage";
//import Home from "../pages/Home";
// import AddMenu from "../pages/AddMenu";
// import Edit from "../pages/EditMenu";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Layout from "../component/Layout";
// import AdminLayout from "../component/AdminLayout";
// import ModOrAdminPage from "../pages/ModOrAdminPage";
// import NotAllowed from "../pages/NotAllowed";
// import UserProfile from "../pages/UserProfile";
// import UsePage from "../pages/UsePage";

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
        element: (
          <AdminPage>
            <AddMenu />
          </AdminPage>
        ),
      },
      {
        path: "/Edit/:id",
        element: (
          <ModOrAdminPage>
            <Edit />
          </ModOrAdminPage>
        ),
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/NotAllowed",
        element: <NotAllowed />,
      },
      {
        path: "/UserProfile",
        element: (
          <UsePage>
            <UserProfile />
          </UsePage>
        ),
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
