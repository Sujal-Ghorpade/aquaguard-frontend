import React, { useState } from "react";
import api from "../api/axios";
import "./AddServiceForm.css";

const AddServiceForm = ({ token, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(
      "/services",
      { title, description, imageUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    setDescription("");
    setImageUrl("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="add-service-form">
      <h2 className="form-title">Add Service</h2>
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
        Add Service
      </button>
    </form>
  );
};

export default AddServiceForm; // ✅ default export
