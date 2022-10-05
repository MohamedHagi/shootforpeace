import React, { useState } from "react";
import logo from "../images/sfp_logo.png";
import { Link } from 'react-router-dom';

function Header() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="sfp-nav">
      <div className="sfp-nav-container">
        <div className="sfp-logo">
          <a href="/" className="sfp-logo-link">
            <img src={logo} alt="sfp logo"></img>
          </a>
        </div>
        <div className="sfp-menu-container">
          <div className="sfp-menu-element">
            <div
              className={isActive ? "hamburger" : "hamburger open"}
              onClick={handleToggle}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>

            </div>
          </div>
        </div>
      </div>
      <div className={isActive ? "sub-menu" : "sub-menu open"}>
        <div className="menu-item">
          <a href="/about" className="menu-link">
            About
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="https://shootforpeace.com/shop" target="_blank">
            Shop
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="/stories">
            Stories
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="/services">
            Services
          </a>
        </div>
      </div>
      <div class="scroll">
        <div class="m-scroll">

          <span>
            You're amazing. Don't let anyone tell you otherwise.
        </span>
          <span>
            You're amazing. Don't let anyone tell you otherwise.
        </span>
          <span>
            You're amazing. Don't let anyone tell you otherwise.
        </span>
          <span>
            You're amazing. Don't let anyone tell you otherwise.
        </span>
          <span>
            You're amazing. Don't let anyone tell you otherwise.
        </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
