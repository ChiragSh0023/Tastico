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
    // console.log(menu?.data?.cards);

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

    const allDishWithCategory = [];

    extractMenuItems(menu?.data?.cards, allDishWithCategory);

    restaurantDetails.dishes = allDishWithCategory;
    setResInfo(restaurantDetails);
  };

  const extractMenuItems = (menuCards, allDishWithCategory) => {
    menuCards?.forEach((card) => {
      const groupedCards = card?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      if (groupedCards) {
        extractDishesFromMainCard(groupedCards, allDishWithCategory);
      }
    });
  };

  const extractDishesFromMainCard = (groupedCards, allDishWithCategory) => {
    groupedCards.forEach((cardObj) => {
      const dishArrayItemCards =
        cardObj.card?.card?.title && cardObj?.card?.card?.itemCards;
      const dishArrayCategory =
        cardObj.card?.card?.title && cardObj?.card?.card?.categories;
      if (dishArrayItemCards) {
        extractDishes(cardObj.card.card, allDishWithCategory);
      } else if (dishArrayCategory) {
        extractDishesFromCategory(cardObj?.card?.card, allDishWithCategory);
      }
    });
  };

  const extractDishes = (dishArray, allDishWithCategory) => {
    let dishesArr = [];
    dishArray?.itemCards.forEach((dish) => {
      dishesArr.push(dish?.card?.info);
    });
    allDishWithCategory.push({
      title: dishArray?.title,
      dishes: dishesArr,
    });
  };

  const extractDishesFromCategory = (dishArray, allDishWithCategory) => {
    let categoryObj = {
      title: dishArray?.title,
      categories: [],
    };

    dishArray?.categories.forEach((dishCategory) => {
      let dishesArr = [];
      dishCategory?.itemCards.forEach((dish) => {
        dishesArr.push(dish?.card?.info);
      });
      const obj = {
        title: dishCategory?.title,
        dishes: dishesArr,
      };
      categoryObj.categories.push(obj);
    });

    allDishWithCategory.push(categoryObj);
  };

  return resInfo;
};

export default useRestaurantMenu;
