import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  //2.Get Restaurant by ID

  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = { ...restaurant };

    try {
      const res = await fetch("http://localhost:3000/restaurant/"+id, {
        method: "PUT",
        body: JSON.stringify(updatedRestaurant),
      });
      if (res.ok) {
        alert("Restaurant updated successfully!");
        navigate("/Home");
      } else {
        console.log("Error updating restaurant");
      }
    } catch (err) {
      console.log(err.message);
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
              name="title"
              value={restaurant.title}
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
              name="img"
              value={restaurant.img}
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
