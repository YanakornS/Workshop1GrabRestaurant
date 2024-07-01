import Home from "../pages/Home";
import AddMenu from "../pages/AddMenu";
import Edit from "../pages/EditMenu";


import { createBrowserRouter} from "react-router-dom";

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
]);
  export default router;