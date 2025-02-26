import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/legal">Legal</Link>
        </li>
        <li>
          <Link to="/interest-calculator">Interest Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
