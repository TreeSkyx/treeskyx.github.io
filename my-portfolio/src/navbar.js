// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Change the 'Home' link to link to the root path */}
        <div className="logo"><Link to="/" style={{ color: 'white', textDecoration: "none"}}>Home</Link></div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
