import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddMenu = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    Swal.bindClickHandler();

    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).bindClickHandler('data-swal-toast-template');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRestaurant = { title, type, img };

    try {
      const res = await fetch("http://localhost:3000/restaurant", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRestaurant),
      });
      const data = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Restaurant added successfully',
        });
        setTitle("");
        setType("");
        setImg("");
        navigate("/");
      } else {
        Swal.fire({
          icon: 'error',
          title: `Error: ${data.message}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: `Error: ${err.message}`,
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

      <template id="my-template">
        <swal-title>Restaurant added successfully!</swal-title>
        <swal-icon type="success"></swal-icon>
        <swal-button type="confirm">OK</swal-button>
      </template>

      <template id="my-toast-template">
        <swal-title>Action was successful!</swal-title>
        <swal-icon type="success"></swal-icon>
      </template>
    </div>
  );
};

export default AddMenu;
