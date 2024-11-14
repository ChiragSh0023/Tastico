import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import ShimmerMenu from "./ShimmerMenu";
import starImage from "../assets/img/star.png";
import offerImage from "../assets/img/offers.png";
import searchIcon from "../assets/img/search-icon.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import RestaurantCategory from "./RestaurantFoodCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resMenu = useRestaurantMenu(resId);

  const categoryRefs = useRef([]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  useEffect(() => {
    if (categoryRefs.current[0]) {
      categoryRefs.current[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [resMenu?.dishes]);

  useEffect(() => {
    if (categoryRefs.current[showIndex]) {
      categoryRefs.current[showIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showIndex]);

  if (resMenu === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cuisines,
    sla,
    locality,
    areaName,
    aggregatedDiscountInfo,
  } = resMenu;

  return (
    <div className="max-w-[50vw] m-auto my-16">
      <h1 className="font-bold text-2xl font-gilroyBold mb-2">{name}</h1>

      <div className="rounded-b-3xl bg-custom-gradient pb-4 px-4 text-sm">
        <div className="rounded-3xl border border-solid border-[##00000026] bg-white p-6">
          <div className="flex font-gilroyMedium font-bold text-base mb-1">
            <div className="mr-1">
              <img
                src={starImage}
                style={{ height: "15px" }}
                className="star-img"
              />
            </div>
            <div className="mr-1">
              {avgRating} ({totalRatingsString})
            </div>
            <div className="mr-1">•</div>
            <div className="mr-1">{costForTwoMessage}</div>
          </div>

          <div className="text-[#ff5200] font-gilroyBold mb-1">
            {cuisines.join(", ")}
          </div>

          <div className="font-gilroyBold mb-1">
            {sla?.minDeliveryTime} - {sla?.maxDeliveryTime} min
          </div>

          <div className="font-gilroyMedium">
            {locality}, {areaName}
          </div>
        </div>
      </div>

      {aggregatedDiscountInfo && (
        <div className="my-9">
          <div className=" text-xl font-gilroyBold">Deals for you!</div>

          <div>
            <div className="flex mt-3 overflow-x-auto res-discounts-container">
              {aggregatedDiscountInfo?.descriptionList.map((coupon, index) => {
                return (
                  <div
                    className="flex w-72 bg-[#ffffff00] border border-solid border-[#02060c26] rounded-2xl px-1 py-3 justify-start items-center mr-4 flex-none"
                    key={index}
                  >
                    <div>
                      <img
                        src={offerImage}
                        style={{ height: "48px", width: "48px" }}
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <div className="text-lg font-gilroyBold">
                        {coupon?.meta.includes(" | ")
                          ? coupon?.meta?.split(" | ")[0]
                          : coupon?.meta?.split("|")[0]}
                      </div>
                      <div className="text-sm font-gilroyMedium text-[#02060c73]">
                        {coupon?.meta.includes(" | ")
                          ? coupon?.meta?.split(" | ")[1]
                          : coupon?.meta?.split("|")[1]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="border-t-[16px] border-solid border-[#02060c0d]"></div>

      <div className="text-[#02060c99] font-gilroy text-xl text-center my-12">
        MENU 🍔
      </div>

      <div className="menu-continer">
        {resMenu.dishes.map((dish, i) => {
          return (
            <div key={dish.title} ref={(el) => (categoryRefs.current[i] = el)}>
              <RestaurantCategory
                menuItemCategory={dish}
                expand={i === showIndex ? true : false}
                setShowIndex={() => {
                  if (showIndex === i) {
                    setShowIndex(null);
                  } else {
                    setShowIndex(i);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
