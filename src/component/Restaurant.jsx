import Card from "./Card";
import { useState, useEffect } from "react";

const Restaurant = ({ restaurants }) => {
  return (
    <>
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              imageUrl={restaurant.imageUrl}
              name={restaurant.name}
              type={restaurant.type}
            />
          );
        })}
    </>
  );
};

export default Restaurant;
