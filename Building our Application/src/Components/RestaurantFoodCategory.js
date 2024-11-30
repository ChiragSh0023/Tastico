import Accordion from "./Accordion";

const RestaurantCategory = ({
  menuItemCategory,
  expand,
  setShowIndex,
  resInfo,
}) => {
  return (
    <div>
      <Accordion
        menuItemCategory={menuItemCategory}
        expand={expand}
        setShowIndex={setShowIndex}
        resInfo={resInfo}
      />
      <div className="border-b-[16px] border-solid border=[#02060c80] h-4"></div>
    </div>
  );
};

export default RestaurantCategory;
