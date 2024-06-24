import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((res) => {
        return res.json();
      })
      .then((restaurant) => {
        setRestaurants(restaurant);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants && restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
          />
        ))}
    </div>
  );
};

export default Restaurant;
