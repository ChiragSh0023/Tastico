import starImage from "../assets/img/star.png";
import CLOUDINARYBASEURL from "../utils/constants";
import oneLite from "../assets/img/one-lite.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, areaName, cuisines } =
    resData?.info;

  return (
    <div className="flex flex-col w-60 p-2 hover:border border-solid border-[#f0f0f0] rounded hover:shadow-lg">
      <img
        className="w-full h-48 mb-1 rounded-lg"
        src={CLOUDINARYBASEURL + cloudinaryImageId}
        alt="Domino's Pizza"
      />
      <div className="m-0.5">
        <h3 className="text-lg font-bold my-1 font-gilroySemiBold">{name}</h3>
        <div className="flex my-1 text-base font-gilroy">
          <img className="w-[20px] h-[20px] mr-1" src={starImage} alt="star" />{" "}
          <div className="mr-1">{avgRating}</div>
          <div className="font-gilroyMedium">• {sla.slaString}</div>
        </div>
        <div className="text-sm font-gilroy text-[#02060c99]">
          {cuisines.join(", ")}
          <div className="text-sm font-gilroy text-[#02060c99]">{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export const withOneLiteDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <img src={oneLite} alt="one-lite" className="absolute h-6 rounded-md" />

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
