import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-md bg-pink-100">
      <div className="logo-container">
        <Link to="/">
          <img className="w-32" src={Logo} alt="Logo" />
        </Link>
      </div>

      <div>
        <ul className="flex items-center h-full">
          <li className="px-4">Online Status - {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">🙋‍♂️, {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
