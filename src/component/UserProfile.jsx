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
              src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.15752-9/455351962_1222935558717090_1544837432053514304_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=GDG_FziVimsQ7kNvgFJ9eIR&_nc_ht=scontent.fbkk17-1.fna&oh=03_Q7cD1QFCoaOzNPxYrTBCMISerpX0Jr9bxCCcnbrL9vsLgvVMWQ&oe=66EE550A"
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
