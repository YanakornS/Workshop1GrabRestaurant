import React from "react";
import Swal from "sweetalert2";

const Card = ({ id, img, title, type }) => {

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/restaurant/${id}`, {
            method: "DELETE",
          });
          if (res.ok) {
            Swal.fire(
              'Deleted!',
              `Restaurant id=${id} has been deleted.`,
              'success'
            ).then(() => {
              window.location.reload();
            });
          } else {
            const data = await res.json();
            Swal.fire(
              'Error!',
              `Error deleting restaurant: ${data.message}`,
              'error'
            );
          }
        } catch (err) {
          Swal.fire(
            'Error!',
            `Error deleting restaurant: ${err.message}`,
            'error'
          );
        }
      }
    });
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="card w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img
            src={img} // ใช้ prop img แทน URL ที่เขียนตรงนี้
            alt={title} // ใช้ prop title เป็น alt text
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <a href={`/edit/${id}`} className="btn bg-orange-600">
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
