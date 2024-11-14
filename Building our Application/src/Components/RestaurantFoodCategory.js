import Accordion from "./Accordion";

const RestaurantCategory = ({ menuItemCategory, expand, setShowIndex }) => {
  const { title, categories } = menuItemCategory;

  if (!categories) {
    return (
      <div>
        <Accordion
          menuItemCategory={menuItemCategory}
          expand={expand}
          setShowIndex={setShowIndex}
        />
        <div className="border-b-[16px] border-solid border=[#02060c80] h-4"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="font-gilroyBold text-lg mt-6">{title}</div>
      <div>
        {categories.map((category, i) => {
          return (
            <div key={category?.title}>
              <Accordion
                menuItemCategory={category}
                expand={expand}
                setShowIndex={setShowIndex}
              />
              <div className="border-[0.5px] border-solid border-[#d3d3d]"></div>
            </div>
          );
        })}
      </div>
      <div className="border-b-[16px] border-solid border=[#02060c80] h-4"></div>
    </div>
  );
};

export default RestaurantCategory;
