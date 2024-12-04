import { useRef } from "react";
import leftArrow from "../assets/img/left-arrow.png";
import rightArrow from "../assets/img/right-arrow.png";
import { whatsOnYourMindDishBaseUrl } from "../utils/constants";

const WhatsOnYourMind = ({ loggedInUser, dishOptions }) => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    scrollContainerRef?.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollContainerRef?.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="m-auto font-gilroyBold text-2xl  my-8">
      <div className="flex justify-between">
        <div className="">{loggedInUser}, what's on your mind?</div>
        <div className="flex gap-3">
          <div
            className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
            onClick={scrollRight}
          >
            <img src={leftArrow} className="" alt="left-arrow" />
          </div>
          <div
            className="h-[24px] w-[24px] p-1 rounded-full bg-[#02060c26] flex justify-center items-center cursor-pointer"
            onClick={scrollLeft}
          >
            <img src={rightArrow} className="" alt="right-arrow" />
          </div>
        </div>
      </div>

      <div
        className="flex overflow-x-auto no-scollbar mt-4"
        ref={scrollContainerRef}
      >
        {dishOptions.length > 0 &&
          dishOptions.map((dish) => {
            return (
              <div
                className="flex flex-col flex-none pl-4 pr-6 cursor-pointer"
                key={dish.id}
              >
                <div>
                  <img
                    src={whatsOnYourMindDishBaseUrl + dish.imageId}
                    className="w-[144px] h-[180px]"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
