import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const getRestaurantURL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  let restList = [];
  // Creating a local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoadingState(true);
    const data = await fetch(getRestaurantURL);
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setLoadingState(false);
  };

  return loadingState ? (
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
        <button
          className="search-btn"
          onClick={() => {
            //  Filter the restaurant cards and update the UI
            if (searchText !== "") {
              setFilterMode(true);
              const searchedRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant?.info?.name
                    .normalize("NFD")
                    .toLowerCase()
                    .includes(searchText.normalize("NFD").toLowerCase());
                }
              );
              setSearchText("");
              setFilteredRestaurant(searchedRestaurants);
            } else {
              setFilteredRestaurant(listOfRestaurants);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        {!filterMode ? (
          <button
            className="filter-btn"
            onClick={() => {
              const topRatedRestaurants = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              );
              setFilteredRestaurant(topRatedRestaurants);
              setFilterMode(true);
            }}
          >
            Get Top Rated Restaurants
          </button>
        ) : (
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
              setFilterMode(false);
            }}
          >
            Get All Restaurants
          </button>
        )}
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
