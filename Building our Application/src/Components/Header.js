import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.webp";
import cartIcon from "../assets/img/cart-icon.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import phoneIcon from "../assets/img/phone.png";
import phoneIcon from "../assets/img/telephone.png";
import userIcon from "../assets/img/user-icon.png";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const loggedInUser = useSelector((store) => store.user.name);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md bg-[#FFFFFF] sticky z-10 top-0 h-20">
      <div className="logo-container">
        <Link to="/">
          <img className="h-20" src={Logo} alt="Logo" />
        </Link>
      </div>

      <div>
        <ul className="flex items-center h-full text-[#3d4152]">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              <div className="flex gap-1">
                <img src={cartIcon} alt="cart-icon" className="h-[20px]" />
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
              </div>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">
              <img className="h-[27px]" src={phoneIcon} />
            </Link>
          </li>
          <li className="px-4">
            <Link to="/userinfo">
              <img className="h-5" src={userIcon} />
            </Link>
          </li>
          <li className="px-4">🙋‍♂️, {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
