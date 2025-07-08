// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import AdminRegister from "./pages/AdminRegister";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/admin/dashboard";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />{" "}
          {/* ✅ ADD THIS */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  console.log("App is loaded");
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
