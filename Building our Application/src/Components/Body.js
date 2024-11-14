import RestaurantCard, { withOneLiteDelivery } from "./RestaurantCard";
import { useContext, useEffect, useMemo, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import { getRestaurantURL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Creating a local state variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  let [filterMode, setFilterMode] = useState(false);
  let [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  const RestaurantCardOneLite = withOneLiteDelivery(RestaurantCard);

  const { loggedInUser, updateUserName } = useContext(UserContext);
  let [userNameText, setUserNameText] = useState(loggedInUser);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setUserNameText(loggedInUser);
  }, [loggedInUser]);

  const fetchData = async () => {
    let response = await fetch(getRestaurantURL);
    response = await response.json();
    const restaurants =
      response.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(restaurants);
    setInitialListOfRestaurants(restaurants);
    setListOfRestaurants(restaurants);
  };

  const toggleFilter = () => {
    filterMode = !filterMode;
    let filteredRestaurants = initialListOfRestaurants;
    if (filterMode) {
      filteredRestaurants = initialListOfRestaurants.filter(
        (restaurant) => restaurant?.info?.avgRating >= 4.5
      );
    }
    setListOfRestaurants(filteredRestaurants);
    setFilterMode(filterMode);
    setSearchText("");
  };

  const searchInRestaurants = () => {
    const searchedRestaurants = initialListOfRestaurants.filter((restuarant) =>
      restuarant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(searchedRestaurants);
  };

  const onInputClick = () => {
    updateUserName(userNameText);
  };

  return initialListOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="w-[90vw] m-auto my-8 flex justify-between">
        <div>
          <input
            type="text"
            className="border mr-2 border-black px-2 py-1 text-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e?.target?.value);
            }}
          />

          <button
            className="border border-solid border-grey py-1 px-2 mx-2 text-sm rounded-lg"
            onClick={searchInRestaurants}
          >
            Search
          </button>

          <button
            className="border border-solid border-grey py-1 px-2 mx-2 text-sm rounded-lg"
            onClick={toggleFilter}
          >
            {filterMode ? "Get All Restaurants" : "Get Top Rated Restaurants"}
          </button>
        </div>
        <div className="flex">
          <input
            type="text"
            value={userNameText}
            className="border mr-2 border-black px-2 py-1 text-sm"
            onChange={(e) => {
              setUserNameText(e.target.value);
            }}
          />
          <button
            className="border border-solid border-grey py-1 px-2 mx-2 text-sm rounded-lg"
            onClick={onInputClick}
          >
            Update Username
          </button>
        </div>
      </div>

      {listOfRestaurants.length === 0 ? (
        <div className="w-[90vw] m-auto mb-4">No result found 😅</div>
      ) : (
        <div className="flex flex-wrap gap-x-28 gap-y-12 w-[90vw] m-auto my-8">
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
      )}
    </div>
  );
};

export default Body;
