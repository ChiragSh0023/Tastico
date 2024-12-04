import { useDispatch } from "react-redux";
import homeIcon from "../assets/img/home.png";
import otherIcon from "../assets/img/otherAddress.png";
import workIcon from "../assets/img/workIcon.png";
import { deleteAddress, editAddress } from "../utils/Redux Slices/userSlice";
import React, { useMemo, useState } from "react";

// Only Rerenders the component if the props change
const AddressBox = React.memo(({ type, address, mode }) => {
  const [editMode, setEditMode] = useState(false);
  const [typeSelected, setTypeSelected] = useState(type);
  const [addressSelected, setAddressSelected] = useState(address);

  const dispatch = useDispatch();

  const deleteCurrentAddress = () => {
    dispatch(deleteAddress(address));
  };

  const saveDetails = () => {
    dispatch(
      editAddress({
        oldAddress: address,
        newAddress: addressSelected,
        type: typeSelected,
      })
    );
    setEditMode(false);
  };

  const deliveryTime = useMemo(() =>
    Math.floor(Math.random() * (60 - 15 + 1) + 15)
  );

  return (
    <div className="w-80 cursor-pointer mr-6 mb-6 border border-solid border-[#e9e9eb] hover:shadow-lg font-metropolis">
      <div className={`flex ${editMode ? "px-7 pt-7" : "p-7"}`}>
        {!editMode && (
          <div>
            <img
              className="mt-1"
              src={
                type === "Home"
                  ? homeIcon
                  : type === "Other"
                  ? otherIcon
                  : workIcon
              }
              alt="home-icon"
              width={
                type === "Home" ? "15px" : type === "Work" ? "22px" : "20px"
              }
            />
          </div>
        )}

        <div className={!editMode && "ml-5"}>
          {!editMode && (
            <div>
              <div className="text-[#282c3f] text-base mb-1">{type}</div>
              <div className="text-[#93959f] text-xs h-16">{address}</div>
              <div className="text-xs mb-4">{deliveryTime} MINS</div>

              {/** From Cart Component */}
              {mode === "cart" && (
                <div className="bg-[#60b246] text-[#fff] p-2 w-[132px] h-9 text-[14px] text-center tracking-[0.3px] font-metropolisBold">
                  DELIVER HERE
                </div>
              )}

              {/**From UserInfo Component */}
              {mode === "userInfo" && (
                <div className="">
                  <span
                    className="text-[#ff5200] text-[14px] font-metropolisBold mr-5 cursor-pointer hover:text-[#282c3f]"
                    onClick={() => setEditMode(true)}
                  >
                    EDIT
                  </span>
                  <span
                    className="text-[#ff5200] text-[14px] font-metropolisBold mr-5 cursor-pointer hover:text-[#282c3f]"
                    onClick={deleteCurrentAddress}
                  >
                    DELETE
                  </span>
                </div>
              )}
            </div>
          )}

          {editMode && (
            <div className="flex flex-col gap-3">
              <div className="flex text-[#282c3f] text-sm">
                <div className="w-[80px]">Type:</div>
                <div>
                  <select
                    className=""
                    value={typeSelected}
                    onChange={(e) => setTypeSelected(e.target.value)}
                  >
                    <option>Home</option>
                    <option>Work</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex ext-[#282c3f] text-sm">
                <label className="w-[80px]">Address:</label>
                <textarea
                  type="text"
                  value={addressSelected}
                  className="text-sm px-2 border border-solid border-[#366D8A] rounded-md"
                  rows="3"
                  onChange={(e) => {
                    setAddressSelected(e.target.value);
                  }}
                />
              </div>

              <div className="mt-3">
                <div
                  className="bg-[#ff5200] inline-block h-9 text-[#fff] pt-2 px-2 text-[12px] tracking-[0.3px] font-metropolisBold"
                  onClick={saveDetails}
                >
                  SAVE
                </div>
                <div
                  className="bg-[#ff5200] inline-block h-9 text-[#fff] pt-2 px-2 text-[12px] tracking-[0.3px] font-metropolisBold my-3 ml-3"
                  onClick={() => {
                    setEditMode(false);
                    setAddressSelected(address);
                    setTypeSelected(type);
                  }}
                >
                  Cancel
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default AddressBox;
