import vegIcon from "../assets/img/veg-icon.jpg";
import nonVegIcon from "../assets/img/nonveg-icon.webp";
import starRating from "../assets/img/item-rating.svg";
import { menuItemImageUrl } from "../utils/constants";

const MenuItem = (props) => {
  const { menuItem } = props;
  console.log(menuItem);
  return (
    <>
      <div className="menu-item">
        <div className="item-description">
          <div className="veg-img" style={{ marginLeft: "-1px" }}>
            <img
              src={menuItem.isVeg ? vegIcon : nonVegIcon}
              alt="veg-icon"
              height="17"
              width="17"
            />
          </div>
          <div className="item-name">{menuItem?.name}</div>
          <div className="item-price">
            ₹ {(menuItem?.price || menuItem.defaultPrice) / 100}
          </div>
          <div className="item-rating">
            <img src={starRating} height="13" />{" "}
            {menuItem?.ratings?.aggregatedRating?.rating}
          </div>
          <div className="item-price" style={{ fontSize: "13px" }}>
            {menuItem?.description}
          </div>
        </div>
        <div className="item-image-btn">
          {menuItem.imageId && (
            <img
              src={menuItemImageUrl + menuItem.imageId}
              height="144"
              width="156"
            />
          )}
          <button className="item-add-btn">
            <div className="item-btn-text">Add</div>
          </button>
        </div>
      </div>
      <div className="line-separator"></div>
    </>
  );
};

export default MenuItem;
