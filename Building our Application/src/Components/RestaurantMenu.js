import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenu } from "../utils/constants";
import MenuItem from "./MenuItem";
import ShimmerMenu from "./ShimmerMenu";
import starImage from "../assets/img/star.png";
import offerImage from "../assets/img/offers.png";
import searchIcon from "../assets/img/search-icon.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  let [menu, setMenu] = useState(null);
  let [dishes, setDishes] = useState(null);
  let [filteredDishes, setFilteredDishes] = useState(null);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let menuItems = await fetch(
      getRestaurantMenu + resId + "&catalog_qa=undefined"
    );
    menuItems = await menuItems.json();
    setMenu(menuItems?.data);
    // console.log(menuItems?.data);
    setDishesItems(menuItems?.data);
  };

  const setDishesItems = (menu) => {
    const items =
      menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.itemCards ||
      menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        ?.itemCards ||
      menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories.flatMap(
        (obj) => obj.itemCards
      );
    const dishes = items.map((card) => {
      return card?.card?.info;
    });
    console.log(dishes);
    setDishes(dishes);
    setFilteredDishes(dishes);
  };

  const searchDishes = () => {
    if (searchText === "") {
      setFilteredDishes(dishes);
    } else {
      const filteredDishesOnSearch = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDishes(filteredDishesOnSearch);
      console.log(filteredDishesOnSearch);
    }
  };

  if (!menu) return <ShimmerMenu />;

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
  } = menu?.cards[2]?.card?.card?.info;

  return (
    <div className="main-menu-component">
      <h1 className="res-heading  font-family-bold">{name}</h1>

      <div className="res-info-container">
        <div className="res-info">
          <div className="res-rating font-family-bold margin-b">
            <div className="res-info-items">
              <img src={starImage} className="star-img" />
            </div>
            <div className="res-info-items">
              {avgRating} ({totalRatingsString})
            </div>
            <div className="res-info-items">•</div>
            <div className="res-info-items">{costForTwoMessage}</div>
          </div>

          <div className="res-info-cuisines margin-b font-family-bold">
            {cuisines.join(", ")}
          </div>

          <div className="res-delivery font-family-bold margin-b">
            {sla?.minDeliveryTime} - {sla?.maxDeliveryTime} min
          </div>

          <div className="res-branch-location font-family">
            {locality}, {areaName}
          </div>
        </div>
      </div>

      {aggregatedDiscountInfo && (
        <div className="res-discounts-main-container">
          <div className="res-discounts-heading font-family-bold">
            Deals for you!
          </div>

          <div>
            <div className="res-discounts-container">
              {aggregatedDiscountInfo?.descriptionList.map((coupon) => {
                return (
                  <div className="res-discounts-card">
                    <div>
                      <img src={offerImage} height="48px" width="48px" />
                    </div>
                    <div className="show-offer-details">
                      <div className="coupon-description font-family-bold">
                        {coupon?.meta?.split(" | ")[0]}
                      </div>
                      <div className="coupon-name font-family-bold">
                        {coupon?.meta?.split(" | ")[1]?.replace("code", "")}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="separator"></div>

      <div className="menu-heading">MENU 🍔</div>

      <div className="search-input-container">
        <input
          className="search-menu-input"
          placeholder="Search for dishes..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <img src={searchIcon} className="search-icon" onClick={searchDishes} />
      </div>

      <div className="menu-continer">
        {filteredDishes.map((dish) => (
          <MenuItem menuItem={dish} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
