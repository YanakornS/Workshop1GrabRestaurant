import App from "../App";
import { Add } from "../pages/Add";
import Home from "../pages/Home";
import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "",
      element: <App />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    
  ]);
  export default router;