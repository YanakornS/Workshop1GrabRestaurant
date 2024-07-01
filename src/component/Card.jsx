import React from "react";


const Card = ({ id, img, title, type }) => {
 
  const handleDelete = async (id) => {
    try {
      const res = await fetch("http://localhost:3000/restaurant/" +id, {
        method: "DELETE",
        
      });
      const data = await res.json();
      if (res.ok) {
        alert("Restaurant id="  + id + " Is DELETE");
        window.location.reload();
        
      } else {
        console.log("Error:", data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
 return (
    <div>
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
            <button  className="btn btn-error" onClick={()=>handleDelete(id)}>
              Delete
            </button>
            <a href={`/edit/${id}`} className="btn bg-orange-600">
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Card;