import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
import Tokenservice from "./token.services";

const instance = axios.create({
  baseURL: baseURL, // Corrected here
  headers: {
    "Content-Type": "application/json",
  },
});

//add interceptor to request object
 instance.interceptors.request.use((config)=>{
  const token = Tokenservice.getLocalAccessToken();
 if(token){
  config.headers['x-access-token'] = token;
 }
 return config;
},(error) =>{
  return Promise.reject(error);
}
);



export default instance;
