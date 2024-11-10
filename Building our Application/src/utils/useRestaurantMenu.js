import { useState, useEffect } from "react";
import { getRestaurantMenu } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let menu = await fetch(`${getRestaurantMenu}${resId}&catalog_qa=undefined`);
    menu = await menu.json();

    let restaurantDetails = {
      name: menu?.data?.cards[2]?.card?.card?.info?.name,
      costForTwoMessage:
        menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage,
      avgRating: menu?.data?.cards[2]?.card?.card?.info?.avgRating,
      totalRatingsString:
        menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString,
      cuisines: menu?.data?.cards[2]?.card?.card?.info?.cuisines,
      sla: menu?.data?.cards[2]?.card?.card?.info?.sla,
      locality: menu?.data?.cards[2]?.card?.card?.info?.locality,
      areaName: menu?.data?.cards[2]?.card?.card?.info?.areaName,
      aggregatedDiscountInfo:
        menu?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo,
    };

    const allDishes = [];

    extractMenuItems(menu?.data?.cards, allDishes);

    restaurantDetails.dishes = allDishes;
    setResInfo(restaurantDetails);
  };

  const extractMenuItems = (menuCards, allDishes) => {
    menuCards?.forEach((card) => {
      const groupedCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      if (groupedCards) {
        extractDishesFromMainCard(groupedCards, allDishes);
      }
    });
  };

  const extractDishesFromMainCard = (groupedCards, allDishes) => {
    groupedCards.forEach((cardObj) => {
      const dishArrayItemCards =
        cardObj.card?.card?.title !== "Recommended" &&
        cardObj.card?.card?.itemCards;
      const dishArrayCategory = cardObj?.card?.card?.categories;
      if (dishArrayItemCards) {
        extractDishes(dishArrayItemCards, allDishes);
      }
      if (dishArrayCategory) {
        dishArrayCategory.forEach((card) => {
          extractDishes(card?.itemCards, allDishes);
        });
      }
    });
  };

  const extractDishes = (dishArray, allDishes) => {
    dishArray.forEach((dish) => {
      allDishes.push(dish?.card?.info);
    });
  };

  return resInfo;
};

export default useRestaurantMenu;
