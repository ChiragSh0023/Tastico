import vegIcon from "../assets/img/veg-icon.jpg";
import nonVegIcon from "../assets/img/nonveg-icon.webp";
import starRating from "../assets/img/item-rating.svg";
import { menuItemImageUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux Slices/cartSlice";
import SnackBar from "./Snackbar";
import { useState } from "react";

const MenuItem = (props) => {
  const { menuItem, resInfo } = props;
  const [snackbar, setSnackbar] = useState({ show: false, message: "" });

  const dispatch = useDispatch();

  const handleMenuItemClick = (menuItem) => {
    menuItem.resInfo = resInfo;
    dispatch(addItem(menuItem));

    setSnackbar({ show: true, message: "Item added successfully!" });

    setTimeout(() => {
      setSnackbar({ show: false, message: "" });
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-between my-3">
        <div className="flex flex-col gap-2 w-1/2">
          <div style={{ marginLeft: "-1px" }}>
            <img
              src={
                menuItem.itemAttribute.vegClassifier === "NONVEG"
                  ? nonVegIcon
                  : vegIcon
              }
              alt="veg-icon"
              height="17"
              width="17"
            />
          </div>
          <div className="font-gilroyBold text-[#02060cbf] text-lg font-bold">
            {menuItem?.name}
          </div>
          <div className="font-gilroyMedium text-base font-normal text-[#02060ceb]">
            ₹ {(menuItem?.price || menuItem.defaultPrice) / 100}
          </div>
          {menuItem?.ratings?.aggregatedRating?.rating && (
            <div className="flex font-gilroyBold text-sm text-[#116649]">
              <img src={starRating} style={{ height: "13px" }} />{" "}
              <div className="relative top-[-1px]">
                {menuItem?.ratings?.aggregatedRating?.rating}
              </div>
            </div>
          )}
          <div className="item-price" style={{ fontSize: "13px" }}>
            {menuItem?.description}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative h-36 w-36">
          {menuItem.imageId && (
            <img
              className="rounded-lg object-cover h-full w-full"
              src={menuItemImageUrl + menuItem.imageId}
            />
          )}
          <button
            onClick={() => {
              handleMenuItemClick(menuItem, resInfo);
            }}
            className={`border border-solid border-[#f0f0f0] w-28 rounded-lg h-9 text-center bg-white ${
              menuItem.imageId ? "absolute bottom-[-10px]" : ""
            }`}
          >
            <div className="font-gilroyBold text-[#1BA672] text-lg">ADD</div>
          </button>
        </div>
      </div>
      <div className="border-[0.5px] border-solid border-[#d3d3d] my-5"></div>

      {snackbar.show && <SnackBar message={snackbar.message} />}
    </>
  );
};

export default MenuItem;
