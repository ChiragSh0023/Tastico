import starImage from "../assets/img/star.png";
import CLOUDINARYBASEURL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="card-image margin-b"
        src={CLOUDINARYBASEURL + cloudinaryImageId}
        alt="Domino's Pizza"
      />
      <h3 className="res-name font-family-bold margin">{name}</h3>
      <div className="margin rating font-family">
        <img className="star-img" src={starImage} alt="star" /> {avgRating} •{" "}
        {sla.slaString}
      </div>
      <h4 className="res-cuisines margin font-family-regular ">{costForTwo}</h4>
      <h4 className="res-cuisines margin font-family-regular ">
        {cuisines.join(", ")}
      </h4>
    </div>
  );
};

export default RestaurantCard;
