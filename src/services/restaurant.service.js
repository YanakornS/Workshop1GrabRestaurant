import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurant

const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};


//get restaurant By ID 
const getRestaurantById = async (id) => {
  //htpp://localhost/api/v1/auth/restuarants/1
  return await api.get(RESTO_API+`/${id}`);
};

//update a restaurant data
const editRestaurant = async (id, restaurant) => {
  return await api.put(RESTO_API + `/${id}`, restaurant);
};


//Delete a restaurant data
const deleteRestaurant = async (id) => {
  return await api.delete(RESTO_API + `/${id}`);
};

//Add a restaurant Data 
const insertRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurant,
  deleteRestaurant,
  insertRestaurant,
};
export default RestaurantService;
