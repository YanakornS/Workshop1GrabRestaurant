import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import RestaurantService from '../services/restaurant.service';


const AddMenu = () => {
  const [name, setname] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRestaurant = { name, type, imageUrl };

    try {
      const res = await RestaurantService.insertRestaurant(newRestaurant);// ใช้ RestaurantService
      if (res.status === 200) {
        // ตรวจสอบสถานะการตอบกลับ
        Swal.fire({
          icon: "success",
          title: "Restaurant added successfully",
          text: "The restaurant has been added successfully!",
        });
        setname("");
        setType("");
        setImageUrl("");
        navigate("/");
      } else {
        const data = await res.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error: ${data.message}`,
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error: ${err.message}`,
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-96 bg-base-100 shadow-xl m-2 p-4 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Title:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block">Type:</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block">Image URL:</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddMenu;
