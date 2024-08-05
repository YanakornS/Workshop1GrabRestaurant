import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import  router  from "./routers/Router.jsx";
import Navbar from "./component/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);