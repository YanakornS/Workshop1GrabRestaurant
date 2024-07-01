import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";


const AddMenu = ({}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const newRestaurant = { title, type, img };

  try {
    const res = await fetch("http://localhost:3000/restaurant", {
      method: "POST",
      body: JSON.stringify(newRestaurant),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Restaurant added Successfully!")
      console.log(data);
      setTitle("");
      setType("");
      setImg("");
      navigate("/");
    } else {
      console.log("Error:", data.message);
      
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={img}
              onChange={(e) => setImg(e.target.value)}
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
