import RestaurantCard, { withOneLiteDelivery } from "./RestaurantCard";
import { Link } from "react-router-dom";

const SearchedRestaurants = ({ filteredRestaurants }) => {
  const RestaurantCardOneLite = withOneLiteDelivery(RestaurantCard);
  return (
    <div className="flex flex-col mb-16 mt-16">
      <div className="grid grid-cols-4 gap-y-9 w-full gap-x-6">
        {filteredRestaurants.map((restaurant) => (
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
  );
};

export default SearchedRestaurants;
