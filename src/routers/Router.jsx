
import Home from "../pages/Home";
import AddMenu from "../pages/AddMenu";
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
      path: "/addMenu",
      element: <AddMenu />,
    }
  ]);
  export default router;