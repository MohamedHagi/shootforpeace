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
              className={isActive ? "hamburger-menu" : "hamburger-menu open"}
              onClick={handleToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={isActive ? "sub-menu" : "sub-menu open"}>
        <div className="menu-item">About</div>
        <div className="menu-item"> Contact Us</div>
        <div className="menu-item"> Shop</div>
        <div className="menu-item"> Home</div>
      </div>
      <div class="bar">
        <span class="bar_content">
          You're amazing. Don't let anyone tell you otherwise.You're amazing.
          Don't let anyone tell you otherwise. You're amazing. Don't let anyone
          tell you otherwise.
        </span>
      </div>
    </div>
  );
}

export default Header;
