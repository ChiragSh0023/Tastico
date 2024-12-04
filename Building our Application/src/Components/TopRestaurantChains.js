import { useRef } from "react";
import leftArrow from "../assets/img/left-arrow.png";
import rightArrow from "../assets/img/right-arrow.png";
import RestaurantCard, { withOneLiteDelivery } from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurantChains = ({ topRestChains }) => {
  const scrollContainer = useRef(null);

  const RestaurantCardOneLite = withOneLiteDelivery(RestaurantCard);

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between font-gilroyBold text-2xl mb-4">
        <div>Top restaurant chains in Jaipur</div>
        <div className="flex gap-3">
          <div
            className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
            onClick={scrollRight}
          >
            <img src={leftArrow} className="" alt="left-arrow" />
          </div>
          <div
            className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
            onClick={scrollLeft}
          >
            <img src={rightArrow} className="" alt="right-arrow" />
          </div>
        </div>
      </div>

      {/**Top Restaurant Chains in Jaipur */}
      <div
        className="flex overflow-x-auto no-scollbar gap-9 mt-9"
        ref={scrollContainer}
      >
        {topRestChains.length > 0 &&
          topRestChains.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
              >
                {restaurant?.info?.badges?.imageBadges?.length > 0 ? (
                  <RestaurantCardOneLite resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
