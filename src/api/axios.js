// src/api/axios.js
import axios from "axios";

export default axios.create({
  baseURL: "https://aquaguard-backend-irld.onrender.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});
