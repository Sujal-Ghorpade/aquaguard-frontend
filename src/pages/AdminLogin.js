import React, { useState, useContext } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/admin/login", { username, password });
      login(res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form
        onSubmit={handleLogin}
        className="admin-login-form"
      >
        <h1 className="admin-login-title">Admin Login</h1>
        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="admin-login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-login-input"
          required
        />
        <button
          type="submit"
          className="admin-login-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
