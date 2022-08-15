import React from "react";
import "./Header.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import GitHubIcon from "@material-ui/icons/GitHub";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          <h3>Xpensr</h3>
          <CreditCardIcon />
        </div>
        <div className="header-button">
          <a href="#/" className="header-btn">
            <GitHubIcon />
            <h3>Star</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
