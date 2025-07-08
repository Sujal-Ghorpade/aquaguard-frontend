import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Shree Gurudev Datta</div>
      <button
        className="navbar-hamburger"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        onClick={handleHamburgerClick}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <div
        className={`navbar-links${menuOpen ? ' show' : ''}`}
        id="navbar-links"
        role="menu"
      >
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/products" onClick={handleLinkClick}>Products</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        <Link to="/admin/login" onClick={handleLinkClick}>Admin Login</Link>
        <Link to="#" tabIndex="-1" aria-hidden="true" style={{visibility: 'hidden', pointerEvents: 'none'}}></Link>
      </div>
    </nav>
  );
};

export default Navbar;
