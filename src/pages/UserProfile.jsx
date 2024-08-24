import React from "react";
import { useAuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const maskingString = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start > str.length ||
      end < 0 ||
      end > str.length ||
      start > end
    ) {
      return str;
    }
    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="User Profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Profile</h2>
          <p>
            <strong>UserID:</strong> {user.id}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Roles:</strong> {user.roles.join(", ")}
          </p>
          <p>
            <strong>Token:</strong>{" "}
            {maskingString(user.accessToken, 3, user.accessToken.length - 3)}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
