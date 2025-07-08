import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div
    className="home-bg"
    style={{
      minHeight: "100vh",
      background: "url('/aquaguard-bg.jpg') no-repeat center center fixed",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div className="home-container center-mobile">
      <div className="water-droplets">
        <span className="droplet" style={{ left: '15%' }}></span>
        <span className="droplet" style={{ left: '35%' }}></span>
        <span className="droplet" style={{ left: '55%' }}></span>
        <span className="droplet" style={{ left: '75%' }}></span>
        <span className="droplet" style={{ left: '85%' }}></span>
      </div>
      <h2 className="home-title">Welcome to Water Purifier & Vacuum Cleaner Sales & Service.</h2>
      <p className="home-subtitle">Clean Water, Pure Life — Because Your Family Deserves the Best.</p>
      <Link to="/products" className="home-book-btn">
        View Products
      </Link>
    </div>
  </div>
);

export default Home;