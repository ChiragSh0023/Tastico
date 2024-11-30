import RestaurantCard, { withOneLiteDelivery } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import { getRestaurantURL } from "../utils/constants";
import rightArrow from "../assets/img/right-arrow.png";
import leftArrow from "../assets/img/left-arrow.png";
import { whatsOnYourMindDishBaseUrl } from "../utils/constants";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  // Creating a local state variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  const [dishOptions, setDishOptions] = useState([]);
  const [topRestChains, setTopRestChains] = useState([]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  const loggedInUser = useSelector((store) => store.user.name);

  const RestaurantCardOneLite = withOneLiteDelivery(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(getRestaurantURL);
    response = await response.json();
    const whatsOnYourMind =
      response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    const topRestChains =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants =
      response.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(restaurants);
    setDishOptions(whatsOnYourMind);
    setTopRestChains(topRestChains);
    setInitialListOfRestaurants(restaurants);
    setListOfRestaurants(restaurants);
  };

  const scrollContainerRef = useRef(null);
  const scrollContainerTopRestRef = useRef(null);

  const scrollRight = () => {
    scrollContainerRef?.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollContainerRef?.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scrollRightTopRest = () => {
    scrollContainerTopRestRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollLeftTopRest = () => {
    scrollContainerTopRestRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return initialListOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="w-[75vw] m-auto">
        {/**Whats on your mind */}
        <div className="m-auto font-gilroyBold text-2xl  my-8">
          <div className="flex justify-between">
            <div className="">{loggedInUser}, what's on your mind?</div>
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

          <div
            className="flex overflow-x-auto no-scollbar mt-4"
            ref={scrollContainerRef}
          >
            {dishOptions.length > 0 &&
              dishOptions.map((dish) => {
                return (
                  <div
                    className="flex flex-col flex-none pl-4 pr-6 cursor-pointer"
                    key={dish.id}
                  >
                    <div>
                      <img
                        src={whatsOnYourMindDishBaseUrl + dish.imageId}
                        className="w-[144px] h-[180px]"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="border border-solid border-[#02060c0d] my-12"></div>

        {/**Top restaurant chains in Jaipur */}
        <div className="flex flex-col">
          <div className="flex justify-between font-gilroyBold text-2xl mb-4">
            <div>Top restaurant chains in Jaipur</div>
            <div className="flex gap-3">
              <div
                className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
                onClick={scrollRightTopRest}
              >
                <img src={leftArrow} className="" alt="left-arrow" />
              </div>
              <div
                className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
                onClick={scrollLeftTopRest}
              >
                <img src={rightArrow} className="" alt="right-arrow" />
              </div>
            </div>
          </div>

          {/**Top Restaurant Chains in Jaipur */}
          <div
            className="flex overflow-x-auto no-scollbar gap-9 mt-9"
            ref={scrollContainerTopRestRef}
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

        <div className="border border-solid border-[#02060c0d] my-12"></div>

        {listOfRestaurants.length === 0 ? (
          <div className="w-[90vw] m-auto mb-4">No result found 😅</div>
        ) : (
          <div className="flex flex-col mb-16">
            <div className="font-gilroyBold text-2xl mb-12">
              Restaurants with online food delivery in Jaipur
            </div>
            <div className="grid grid-cols-4 gap-y-9 w-full gap-x-6">
              {listOfRestaurants.map((restaurant) => (
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
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
