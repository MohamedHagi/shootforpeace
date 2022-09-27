import React, { useState } from "react";
import logo from "../images/sfp_logo.png";

function Header() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="sfp-nav">
      <div className="sfp-nav-container">
        <div className="sfp-logo">
          <img src={logo} alt="sfp logo"></img>
        </div>
        <div className="sfp-menu-container">
          <div className="sfp-menu-element">
            <div
              className={isActive ? "hamburger" : "hamburger open"}
              onClick={handleToggle}
            >
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>

            </div>
          </div>
        </div>
      </div>
      <div className={isActive ? "sub-menu" : "sub-menu open"}>
        <div className="menu-item">
          <a className="menu-link" href="#">
            About
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="#">
            Shop
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="#">
            Stories
          </a>
        </div>
        <div className="menu-item">
          {" "}
          <a className="menu-link" href="#">
            Rentals
          </a>
        </div>
      </div>
      <div class="bar">
        <span class="bar_content">
          You're amazing. Don't let anyone tell you otherwise. You're amazing.
          Don't let anyone tell you otherwise. You're amazing. Don't let anyone
          tell you otherwise.
        </span>
      </div>
    </div>
  );
}

export default Header;
