import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.webp";
import cartIcon from "../assets/img/cart-icon.png";
import searchIcon from "../assets/img/search.png";
import { useDispatch, useSelector } from "react-redux";
import phoneIcon from "../assets/img/phone.png";
import phoneIcon from "../assets/img/telephone.png";
import userIcon from "../assets/img/user-icon.png";
import { useState } from "react";
import { setSearchText } from "../utils/Redux Slices/searchTextSlice";

const Header = () => {
  const [searchTextRest, setSearchTextRest] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const cartItems = useSelector((store) => store.cart.items);
  let totalItems = 0;
  cartItems.forEach((item) => {
    totalItems += item.quantity;
  });

  const searchRestaurant = () => {
    dispatch(setSearchText(searchTextRest));
  };

  return (
    <div className="flex shadow-md bg-[#FFFFFF] sticky z-10 top-0 h-20">
      <div className="w-[80vw] h-full flex justify-between m-auto items-center">
        {/**Logo */}
        <div className="logo-container flex items-center">
          <Link to="/">
            <img className="h-14 rounded-md" src={Logo} alt="Logo" />
          </Link>
        </div>

        {/**Search For Restaurants and show only when on the "/" route */}
        {location.pathname === "/" && (
          <div className="flex items-center gap-2 ml-[102px]">
            <div>
              <input
                className="text-sm font-metropolis p-2 border border-solid border-grey w-[228px]"
                placeholder="Search for restaurants"
                value={searchTextRest}
                onChange={(e) => setSearchTextRest(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchRestaurant();
                  }
                }}
              />
            </div>
            <div className="cursor-pointer" onClick={searchRestaurant}>
              <img src={searchIcon} className="h-[20px] w-[20px]" />
            </div>
          </div>
        )}

        {/**Cart, Help and User section */}
        <div>
          <ul className="flex items-center h-full text-[#3d4152]">
            <li className="px-3">
              <Link to="/cart">
                <div className="flex gap-1">
                  <img src={cartIcon} alt="cart-icon" className="h-[20px]" />

                  <span
                    className={`relative bottom-[11px] right-[5px] bg-[#60b246] h-[20px] w-[20px] text-[13px] text-center rounded-full ${
                      totalItems === 0 && "invisible"
                    }`}
                  >
                    {totalItems}
                  </span>
                </div>
              </Link>
            </li>
            <li className="px-6">
              <Link to="/Contact">
                <img className="h-[27px]" src={phoneIcon} />
              </Link>
            </li>
            <li className="px-6">
              <Link to="/userinfo">
                <img className="h-5" src={userIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
