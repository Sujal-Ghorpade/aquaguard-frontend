// src/api/axios.js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api", // ✅ adjust this to your backend URL + API prefix
  headers: {
    "Content-Type": "application/json",
  },
});
