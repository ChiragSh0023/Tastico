const ShimmerMenu = () => {
  return (
    <div className="flex justify-between w-[40vw] m-auto my-16">
      <div className="flex flex-col  gap-3">
        <div className="h-52 w-52 bg-[#f0f0f0]"></div>
        <div className="h-2 w-full bg-[#f0f0f0]"></div>
        <div className="h-2 w-[50%] bg-[#f0f0f0]"></div>
      </div>
      <div className="flex flex-col  gap-3">
        <div className="h-52 w-52 bg-[#f0f0f0]"></div>
        <div className="h-2 w-full bg-[#f0f0f0]"></div>
        <div className="h-2 w-[50%] bg-[#f0f0f0]"></div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
