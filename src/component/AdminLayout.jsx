import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
//import Footer from "./Footer";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div className="h-screen">
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default AdminLayout;
