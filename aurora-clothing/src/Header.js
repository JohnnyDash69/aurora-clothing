import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "./assets/1.png"; // Ensure the logo is inside 'src/assets/'

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Aurora Clothing Logo" className="logo" />
        </Link>
        <h1>Aurora Clothing</h1>
      </div>
      <p>{isLoggedIn ? "Welcome back!" : "Please sign in"}</p>
      <Navigation />
    </header>
  );
};

export default Header;
