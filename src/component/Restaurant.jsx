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
              id ={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              type={restaurant.type}
            />
          );
        })}
    </>
  );
};

export default Restaurant;