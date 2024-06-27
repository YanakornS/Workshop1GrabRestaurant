
import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Header from "./component/Header";
import Restaurant from "./component/Restaurant";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setfilterRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
        <Header />
        <Search
          restaurants={restaurants}
          setfilterRestaurant={setfilterRestaurant}
        />
        <div className="container flex flex-row flex-wrap items-center justify-center">
          <Restaurant restaurants={filterRestaurant} />
        </div>
      </div>
    </>
  );
}

export default App;