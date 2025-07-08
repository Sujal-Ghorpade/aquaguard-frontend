import React, { useContext, useEffect, useState, useRef } from "react";
import api from "../api/axios";
import Card from "../components/Card";
import AddProductForm from "../components/AddProductForm";
import AddServiceForm from "../components/AddServiceForm";
import { AuthContext } from "../context/AuthContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { token, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchTimeout = useRef();

  const fetchData = async () => {
    const [prods, servs] = await Promise.all([
      api.get("/products"),
      api.get("/services"),
    ]);
    setProducts(prods.data);
    setServices(servs.data);
    setFilteredProducts(prods.data);
  };

  useEffect(() => {
    fetchData();
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

  const deleteItem = async (type, id) => {
    await api.delete(`/${type}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header-row">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="admin-dashboard-logout"
        >
          Logout
        </button>
      </div>
      <div className="admin-dashboard-forms-row equal-height-forms">
        <AddProductForm token={token} onSuccess={fetchData} />
        <AddServiceForm token={token} onSuccess={fetchData} />
      </div>
      <div className="admin-dashboard-products-header">
        <h2 className="admin-dashboard-section">Products</h2>
        <div className="admin-dashboard-search-group">
          <input
            type="text"
            className="admin-dashboard-search"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="admin-dashboard-clear-btn"
            onClick={() => setSearch("")}
            disabled={!search}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="admin-dashboard-grid">
        {filteredProducts.map((p) => (
          <Card
            key={p._id}
            item={p}
            isAdmin
            onDelete={(id) => deleteItem("products", id)}
          />
        ))}
      </div>
      <h2 className="admin-dashboard-section">Services</h2>
      <div className="admin-dashboard-grid">
        {services.map((s) => (
          <Card
            key={s._id}
            item={s}
            isAdmin
            onDelete={(id) => deleteItem("services", id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
