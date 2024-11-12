import starImage from "../assets/img/star.png";
import CLOUDINARYBASEURL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="flex flex-col w-60 p-2 hover:border border-solid border-[#f0f0f0] rounded">
      <img
        className="w-full h-48 mb-1 rounded-lg"
        src={CLOUDINARYBASEURL + cloudinaryImageId}
        alt="Domino's Pizza"
      />
      <div className="m-0.5">
        <h3 className="text-lg font-bold my-1">{name}</h3>
        <div className="flex text-sm my-1">
          <img className="w-3" src={starImage} alt="star" /> {avgRating} •{" "}
          {sla.slaString}
        </div>
        <h4 className="text-sm my-1">{costForTwo}</h4>
        <h4 className="text-sm my-1">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
