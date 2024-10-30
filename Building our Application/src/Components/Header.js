import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("UseEffect called!");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="nav-items">
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