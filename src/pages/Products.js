// src/pages/Products.js
import React, { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import Card from "../components/Card";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchTimeout = useRef();

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      if (!search) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    }, 400);
    return () => clearTimeout(searchTimeout.current);
  }, [search, products]);

  return (
    <div className="products-container">
      <div className="products-header-row">
        <div className="products-title-row">
          <h1 className="products-title">Our Products</h1>
        </div>
        <div className="products-search-row">
          <input
            type="text"
            className="products-search"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="products-clear-btn"
            onClick={() => setSearch("")}
            disabled={!search}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="products-grid">
        {filteredProducts.map((prod) => (
          <Card key={prod._id} item={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
