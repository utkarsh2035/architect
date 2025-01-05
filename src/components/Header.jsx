import React, { useState } from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Left Side: Spinning Circle */}
      <div
        className={`menu-circle ${menuOpen ? "open" : "close"}`}
        onClick={toggleMenu}
      >
        ☰
      </div>

      {/* Menu Items */}
      <div
        className={`menu-options ${menuOpen ? "show-options" : "hide-options"}`}
      >
        <ul>
          <li>Home</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>

      {/* Right Section: Admin and Contact */}
      <div className="right-section">
        <button className="contact-button">Contact Us</button>
        <button className="contact-button">Admin access</button>
      </div>
    </header>
  );
};

export default Header;
