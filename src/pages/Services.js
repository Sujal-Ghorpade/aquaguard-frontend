// src/pages/Services.js
import React, { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import Card from "../components/Card";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const searchTimeout = useRef();

  useEffect(() => {
    api.get("/services").then((res) => {
      setServices(res.data);
      setFilteredServices(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      if (!search) {
        setFilteredServices(services);
      } else {
        setFilteredServices(
          services.filter((s) =>
            s.title.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    }, 400);
    return () => clearTimeout(searchTimeout.current);
  }, [search, services]);

  return (
    <div className="services-container">
      <div className="services-header-row">
        <div className="services-title-row">
          <h1 className="services-title">Our Services</h1>
        </div>
        <div className="services-search-row">
          <input
            type="text"
            className="services-search"
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="services-clear-btn"
            onClick={() => setSearch("")}
            disabled={!search}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="services-grid">
        {filteredServices.map((service) => (
          <Card key={service._id} item={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
