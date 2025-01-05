import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="left-top">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Projects</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Gallery</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="left-bottom">
          &copy; 2025 Company Name
        </div>
      </div>
      <div className="footer-right">
        <div className="right-top">
          <a href="#" className="footer-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="footer-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="footer-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer-link">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="right-bottom">
          <a href="#">BUILT BY RUS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;