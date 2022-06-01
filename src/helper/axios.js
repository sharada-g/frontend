import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 2500,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
