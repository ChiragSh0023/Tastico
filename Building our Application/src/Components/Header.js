import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-items font-family">
        <ul>
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
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
