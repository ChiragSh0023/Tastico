import { useState } from "react";
import MenuItem from "./MenuItem";
import downArrow from "../assets/img/down-arrow.png";
import upArrow from "../assets/img/up-arrow.png";

const Accordion = ({ menuItemCategory, expand, setShowIndex, resInfo }) => {
  const { title, dishes } = menuItemCategory;

  const togglePanel = () => {
    setShowIndex();
  };

  return (
    <div>
      {/** Accordion Header */}
      <div className="" onClick={togglePanel}>
        <button className="w-full flex justify-between items-center">
          <div className="font-gilroyBold text-lg mt-6 mb-4">
            {title} ({dishes?.length})
          </div>
          <div>
            <img
              className="w-3"
              src={expand ? upArrow : downArrow}
              alt="down-arrow"
            />
          </div>
        </button>
      </div>

      {/** Accrodion Body */}
      {expand && (
        <div>
          {dishes.map((dish) => {
            return (
              <MenuItem menuItem={dish} key={dish?.id} resInfo={resInfo} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
