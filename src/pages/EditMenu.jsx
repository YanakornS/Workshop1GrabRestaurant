import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantService from "../services/restaurant.service";

const EditMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  // Get Restaurant by ID
  useEffect(() => {
      RestaurantService.getRestaurantById(id).then((response)=>{
        if(response.status === 200){
          setRestaurant(response.data);
        }
      }
      )
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = { ...restaurant };
    try {
      const response = await RestaurantService.editRestaurant(id,restaurant);
      if(response.status === 200){
        Swal.fire({
          title: " Restaurant Update",
          text: response.data.message,
          icon:"success",
        });
        navigate("/Home")
      }
    } catch (error) {
      Swal.fire({
        title :"Restaurant Update",
        text: error?.response?.data?.message || error.message,
        icon:"error",
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-96 bg-base-100 shadow-xl m-2 p-4 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              type="text"
              name="name"
              value={restaurant.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block">Type:</label>
            <input
              type="text"
              name="type"
              value={restaurant.type}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={restaurant.imageUrl}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Update Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenu;
