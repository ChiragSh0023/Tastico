import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-items font-family">
        <ul>
          <li>Online Status - {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
