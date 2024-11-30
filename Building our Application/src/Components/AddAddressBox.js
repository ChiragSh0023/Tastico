import { useState } from "react";
import homeIcon from "../assets/img/home.png";
import { addAddress } from "../utils/Redux Slices/userSlice";
import { useDispatch } from "react-redux";

const AddAddressBox = () => {
  const [editMode, setEditMode] = useState(false);
  const [type, setType] = useState("Home");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const saveDetails = () => {
    dispatch(addAddress({ type: type, address: address }));
    setType("Home");
    setAddress("");
    setEditMode(false);
  };

  return (
    <div className="w-80 cursor-pointer mr-6 mb-6 border border-dotted border-[#e9e9eb] hover:shadow-lg">
      <div
        className={`flex font-metropolis ${!editMode ? "p-7" : "px-7 pt-7"}`}
      >
        {!editMode && (
          <div>
            <img src={homeIcon} alt="home-icon" width="43px" />
          </div>
        )}

        <div className={`flex flex-col mt-[-2px] ${!editMode && "ml-5"}`}>
          {!editMode && (
            <div className="text-[#282c3f] text-base mb-1">
              Add a new address
            </div>
          )}

          {editMode && (
            <div className="flex text-[#282c3f] text-sm gap-2 mb-1">
              <div className="w-[80px]">Type:</div>
              <div>
                <select
                  className=""
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Home</option>
                  <option>Work</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {!editMode && (
            <div className="text-[#93959f] text-xs h-16 mb-8">
              You can add a new delivery address, and we’ll make sure your order
              reaches you there, fresh and on time!
            </div>
          )}

          {editMode && (
            <div className="flex flex-col gap-4 my-2">
              <div className="flex gap-2">
                <label className="w-[80px] text-sm">Address:</label>
                <textarea
                  className="flex-1 text-sm py-1 px-2 border border-solid border-[#366D8A] rounded-md"
                  value={address}
                  rows="3"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          )}

          {!editMode && (
            <div
              className="bg-white text-[#60b246] p-2 w-[132px] h-9 text-[14px] text-center tracking-[0.3px] font-metropolisBold border border-solid border-[#60b246]"
              onClick={() => {
                setEditMode(true);
              }}
            >
              ADD NEW
            </div>
          )}

          {editMode && (
            <div className="mt-2">
              <div
                className="bg-[#60b246] inline-block h-9 text-[#fff] pt-2 px-2 text-[12px] tracking-[0.3px] font-metropolisBold self-start"
                onClick={saveDetails}
              >
                SAVE
              </div>
              <div
                className="bg-[#60b246] inline-block h-9 text-[#fff] pt-2 px-2 text-[12px] tracking-[0.3px] font-metropolisBold self-start my-3 ml-3"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAddressBox;
