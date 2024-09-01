import starImage from "../assets/star.png";
import CLOUDINARYBASEURL from "../utils/constans";

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
      <h3 className="res-name margin">{name}</h3>
      <div className="margin">
        <img className="rating" src={starImage} alt="star" /> {avgRating} •{" "}
        {sla.slaString}
      </div>
      <h4 className="res-cuisines margin">{costForTwo}</h4>
      <h4 className="res-cuisines margin">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
