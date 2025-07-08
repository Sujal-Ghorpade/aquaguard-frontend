import React, { useState } from "react";
import api from "../api/axios";
import "./AddProductForm.css";

const AddProductForm = ({ token, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(
      "/products",
      { title, description, price, imageUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2 className="form-title">Add Product</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
        required
      ></textarea>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-input"
        required
      />
      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="form-input"
        required
      />
      <button
        type="submit"
        className="form-button"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm; // ✅ default export
