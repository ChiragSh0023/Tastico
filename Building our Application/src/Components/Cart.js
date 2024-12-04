import { useDispatch, useSelector } from "react-redux";
import AddressBox from "../Components/AddressBox";
import locationIcon from "../assets/img/location-icon.png";
import CLOUDINARYBASEURL from "../utils/constants";
import emptyCartIcon from "../assets/img/empty-cart.png";
import doubleQuotes from "../assets/img/double-quotes.svg";
import {
  addItem,
  calculateTotal,
  clearCart,
  removeItem,
} from "../utils/Redux Slices/cartSlice";
import { Link } from "react-router-dom";
import vegIcon from "../assets/img/veg-icon.jpg";
import nonVegIcon from "../assets/img/nonveg-icon.webp";
import { useEffect, useRef } from "react";
import AddAddressBox from "./AddAddressBox";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const total = useSelector((store) => store.cart.total);
  const costForDelivery = 119;
  const platformFees = 8;
  const gst = 2 * (total * 0.025) + platformFees * 0.18;

  const dispatch = useDispatch();

  const heading = useRef(null);

  useEffect(() => {
    heading?.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  const handleAddItem = (menuItem) => {
    dispatch(addItem(menuItem));
  };

  const handleRemoveItem = (menuItem) => {
    dispatch(removeItem(menuItem));
  };

  const addresses = useSelector((store) => store.user.addresses);

  if (cartItems.length == 0) {
    return (
      <div className="flex flex-col font-metropolis h-[90vh] justify-center">
        <div>
          <img
            src={emptyCartIcon}
            alt="empty-cart"
            className="w-[271px] h-[256px] m-auto"
          />
        </div>

        <div className="text-[#535665] text-xl text-center font-metropolisBold my-2">
          Your cart is empty
        </div>

        <div className="text-[#7e808c] text-center font-xs my-2">
          You can go to home page to view more restaurants
        </div>

        <Link to="/">
          <div className="text-center bg-[#ff5200] cursor-pointer text-[#fff] uppercase px-5 py-3 w-fit m-auto my-2">
            See restaurants near you
          </div>
        </Link>
      </div>
    );
  }

  const { resCloudinaryImageId, resName, resLocality } = cartItems[0].resInfo;

  return (
    <div className="bg-[#e9ecee] overflow-hidden">
      <div className="flex w-[80vw] m-auto mt-8 mb-36 gap-5">
        {/**First Container */}
        <div className="bg-[#fff] w-[54vw] p-8  font-metropolis tracking-normal">
          <div className="flex items-center mb-2 text-[1.2rem] font-metropolisBold text-[#282c3f]">
            <img src={locationIcon} className="h-8 mr-1" />
            Choose a delivery address
          </div>
          <div className="text-[#7e808c] text-sm mb-9">
            Multiple addresses in this location
          </div>

          <div className="flex flex-wrap">
            {/**Address Box */}
            {addresses.map((address, i) => (
              <AddressBox
                key={i}
                type={address.type}
                address={address.address}
                mode="cart"
              />
            ))}
            <AddAddressBox />
          </div>
        </div>

        {/**Second Container for cart items */}
        <div className="w-[366px] bg-[#fff] font-metropolis">
          <div className="flex px-[30px] py-5" ref={heading}>
            {/**Heading and restaurant image */}
            <div>
              <img
                src={CLOUDINARYBASEURL + resCloudinaryImageId}
                alt="res-photo"
                className="h-[50px] w-[50px]"
              />
            </div>

            <div className="flex flex-col ml-[14px] min-h-[50px] justify-center">
              <div className="font-metropolisBold">{resName}</div>
              <div className="text-[#686b78] text-sm">{resLocality}</div>
            </div>
          </div>

          <div className="flex justify-center w-full max-h overflow-y-scroll overflow-x-hidden thin-scrollbar">
            {/** Third container for cart items */}
            <div>
              <div className="flex flex-col px-[30px] gap-5">
                {cartItems.map((item) => {
                  return (
                    <div className="flex font-metropolis items-center">
                      <div>
                        <img
                          className="h-4"
                          src={
                            item?.isVeg ||
                            item?.itemAttribute?.vegClassifier === "VEG"
                              ? vegIcon
                              : nonVegIcon
                          }
                          alt="veg-icon"
                        />
                      </div>

                      <div className="text-[13px] w-[40%] ml-4">
                        {item?.name}
                      </div>
                      <div className="flex border border-solid border-[#d4d5d9] text-[#60b246] h-[30px] items-center text-sm w-[78px] justify-around mx-3">
                        <div
                          className="cursor-pointer text-[medium]"
                          onClick={() => {
                            handleRemoveItem(item);
                          }}
                        >
                          -
                        </div>
                        <div>{item?.quantity}</div>
                        <div
                          className="cursor-pointer text-[medium]"
                          onClick={() => {
                            handleAddItem(item);
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div className=" text-[#535665] text-[13px] ml-4">
                        {((item?.price || item?.defaultPrice) / 100) *
                          item?.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/**fourth container for textarea */}
              <div className="mt-4 px-[30px] font-metropolis relative">
                <textarea
                  className="text-[#3d4152] text-[13px] bg-[#f9f9f9] pt-4 px-8 pb-4 w-full outline-none resize-none overflow-hidden"
                  placeholder="Any suggestions? We will pass it on..."
                  rows={1}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                ></textarea>
                <img
                  src={doubleQuotes}
                  alt="double_quotes"
                  className="h-4 absolute top-[17px] left-[38px] pointer-events-none"
                />
              </div>

              {/**Fifth container to opt in for no contact delivery */}
              <div className="px-[30px]">
                <div className="flex border border-solid border-[#a9abb2] cursor-pointer py-2 px-[15px] mt-3 mb-4 relative">
                  <div className="main mt-[1px]">
                    <input type="checkbox" />
                  </div>
                  <div className="flex flex-col ml-3 gap-1 text-[13px]">
                    <div className="text-[#3e4152] font-metropolisBold">
                      Opt in for No-contact Delivery
                    </div>
                    <div className="text-[#3e4152] opacity-60">
                      Unwell, or avoiding contact? Please select no-contact
                      delivery. Partner will safely place the order outside your
                      door (not for COD)
                    </div>
                  </div>
                </div>
              </div>

              {/**Sixth container for final bill */}
              <div className="flex flex-col text-[13px] font-metropolis gap-2 px-[30px]">
                <div className="text-[##282c3f]  font-metropolisBold">
                  Bill Details
                </div>

                <div className="flex text-[#686b78] justify-between opacity-90">
                  <div className="">Item Total</div>
                  <div className="">₹ {total.toFixed(2)}</div>
                </div>

                <div className="flex text-[#686b78] justify-between opacity-90">
                  <div className="">Delivery Fee | 13.5 kms</div>
                  <div className="">₹ {costForDelivery}</div>
                </div>

                {/**Separator */}
                <div className="my-3 border-b border-solid border-[#e9e9eb]"></div>

                <div className="flex text-[#686b78] justify-between opacity-90">
                  <div className="">Platform fee</div>
                  <div className="">₹ {platformFees}</div>
                </div>

                <div className="flex text-[#686b78] justify-between opacity-90">
                  <div className="">GST and Restaurant Charges</div>
                  <div className="">₹ {gst.toFixed(2)}</div>
                </div>

                <div className="my-3 border-y border-solid border-[black]"></div>
              </div>
            </div>
          </div>

          {/**final bill amount container */}
          <div className="flex justify-between h-[60px] items-center font-metropolisBold text-[#282c3f]  px-[25px]">
            <div>To Pay</div>
            <div>
              ₹ {Math.round(total + costForDelivery + platformFees + gst)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
