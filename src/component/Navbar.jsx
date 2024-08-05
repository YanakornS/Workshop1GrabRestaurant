import React from "react";
import Header from "./Header";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const {user} = useAuthContext(); // เปลี่ยนจาก null เป็นอ็อบเจ็กต์ที่แทนข้อมูลผู้ใช้

  return (
    <div className="navbar bg-base-100 mt-5 mb-10 h-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/AddMenu">AddMenu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center h-10">
        <a href="/" className="btn btn-ghost text-xl align-middle h-24">
          <Header />
        </a>
      </div>
      <div className="navbar-end">
        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <a href="/login">
              <LoginButton />
            </a>
            <a href="/register">
              <RegisterButton />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
