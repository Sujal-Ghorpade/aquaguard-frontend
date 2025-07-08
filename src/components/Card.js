// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ item, onDelete, isAdmin }) => (
  <div className="card">
    <img
      src={item.imageUrl}
      alt={item.title}
      className="card-image"
    />
    <div className="card-content">
      <h2 className="card-title">{item.title}</h2>
      <p className="card-description">{item.description}</p>
      {item.price && (
        <p className="card-price">Price: 9{item.price}</p>
      )}
      {isAdmin && (
        <div className="card-actions">
          <button
            onClick={() => onDelete(item._id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  </div>
);

export default Card;
