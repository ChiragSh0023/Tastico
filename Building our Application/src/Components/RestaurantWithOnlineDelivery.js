import { Link } from "react-router-dom";
import RestaurantCard, { withOneLiteDelivery } from "./RestaurantCard";

const RestaurantWithOnlineDelivery = ({ listOfRestaurants }) => {
  const RestaurantCardOneLite = withOneLiteDelivery(RestaurantCard);
  return (
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
  );
};
export default RestaurantWithOnlineDelivery;
