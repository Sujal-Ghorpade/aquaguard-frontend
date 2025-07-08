// src/api/axios.js
import axios from "axios";

export default axios.create({
  baseURL: "https://aquaguard-backend.onrender.com", // ✅ adjust this to your backend URL + API prefix
  headers: {
    "Content-Type": "application/json",
  },
});
