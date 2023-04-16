import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()

export const axiosClient = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:3001/api/",
});
