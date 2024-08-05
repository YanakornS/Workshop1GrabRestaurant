import React from "react";
import { useAuthContext } from "../context/AuthContext";
//import { useNavigate } from "react-router-dom";




const UserProfile = () => {
  const { logout } = useAuthContext(); // ดึงฟังก์ชัน logout จาก context
  //const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // เรียกใช้ฟังก์ชัน logout
    //navigate("/Login"); // ใช้ navigate เพื่อเปลี่ยนเส้นทางไปที่หน้า Login
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
