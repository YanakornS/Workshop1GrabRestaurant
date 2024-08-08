import React, { useState, useEffect } from "react";
import Search from "./../component/Search";
import Header from "./../component/Header";
import Restaurant from "./../component/Restaurant";
import RestaurantService from "../services/restaurant.service";

//คล้ายกับหน้า App.jsxเเต่ต่างกันเเค่ชื่อเอาCodeในนั้นมาใส่ได้เลยเวลาเปิดหน้าเเรกจะขึ้น/Home ดีกว่าไม่มีหน้าเเรกให้เลือกทำไว้สำหรับใช้ Navbar ใน อนาคต
function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();
        console.log(response);
        if (response.status === 200) {
          setRestaurants(response.data);
          setfilterRestaurant(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurants();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/restaurant")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((response) => {
  //       setRestaurants(response);
  //       setfilterRestaurant(response);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  // const addRestaurant = (newRestaurant) => {
  //   setRestaurants([...restaurants, newRestaurant]);
  //   setFilterRestaurant([...restaurants, newRestaurant]);
  // };

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
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
export default Home;
