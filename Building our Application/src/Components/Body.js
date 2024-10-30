import RestaurantCard from "./RestaurantCard";
import { useEffect, useMemo, useState } from "react";
import Shimmer from "./Shimmer";

const getRestaurantURL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8763189&lng=75.7518921&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  // Creating a local state variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  let [filterMode, setFilterMode] = useState(false);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(getRestaurantURL);
    response = await response.json();
    const restaurants =
      response.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button className="search-btn" onClick={searchInRestaurants}>
          Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={toggleFilter}>
          {filterMode ? "Get All Restaurants" : "Get Top Rated Restaurants"}
        </button>
      </div>

      {listOfRestaurants.length === 0 ? (
        <div className="no-result">No result found 😅</div>
      ) : (
        <div className="restaurant-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
