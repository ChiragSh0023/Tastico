import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import { getRestaurantURL } from "../utils/constants";
import { useSelector } from "react-redux";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestaurantChains from "./TopRestaurantChains";
import RestaurantWithOnlineDelivery from "./RestaurantWithOnlineDelivery";
import SearchedRestaurants from "./SearchedRestaurants";

const Body = () => {
  // Creating a local state variable
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  const [dishOptions, setDishOptions] = useState([]);
  const [topRestChains, setTopRestChains] = useState([]);

  const searchTextRest = useSelector((store) => store.searchText.text);

  useEffect(() => {
    if (searchTextRest !== "") {
      const mergedRestaurants = [...initialListOfRestaurants, ...topRestChains];

      const filtered = mergedRestaurants.filter((restaurant, index, self) => {
        return (
          self.findIndex((r) => r?.info?.id === restaurant?.info?.id) ===
            index &&
          restaurant?.info?.name
            ?.toLowerCase()
            .includes(searchTextRest.toLowerCase())
        );
      });

      setFilteredRestaurants(filtered);
    }
  }, [searchTextRest]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  const loggedInUser = useSelector((store) => store.user.name);

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
  };

  return initialListOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="w-[75vw] m-auto">
        {searchTextRest === "" && (
          <div>
            {/**Whats on your mind */}
            <div>
              <WhatsOnYourMind
                loggedInUser={loggedInUser}
                dishOptions={dishOptions}
              />
            </div>

            <div className="border border-solid border-[#02060c0d] my-12"></div>

            {/**Top restaurant chains in Jaipur */}
            <div>
              <TopRestaurantChains topRestChains={topRestChains} />
            </div>

            <div className="border border-solid border-[#02060c0d] my-12"></div>

            {/**Restaurants for online food delivery */}
            <div>
              <RestaurantWithOnlineDelivery
                listOfRestaurants={initialListOfRestaurants}
              />
            </div>
          </div>
        )}

        {searchTextRest.length !== "" && (
          <div>
            <SearchedRestaurants filteredRestaurants={filteredRestaurants} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
