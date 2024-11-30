import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateName, updateEmail } from "../utils/Redux Slices/userSlice";
import AddressBox from "./AddressBox";
import AddAddressBox from "./AddAddressBox";

const UserInfo = () => {
  const loggedInUser = useSelector((store) => store.user.name);
  const userMail = useSelector((store) => store.user.email);
  const addresses = useSelector((store) => store.user.addresses);

  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(loggedInUser);
  const [email, setEmail] = useState(userMail);

  useEffect(() => {
    setName(loggedInUser);
    setEmail(userMail);
  }, [loggedInUser, userMail]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const saveDetails = () => {
    dispatch(updateName(name));
    dispatch(updateEmail(email));
    setEditMode(false);
  };

  return (
    <div className="bg-[#366D8A]">
      <div className="w-[80vw] m-auto">
        <div className=" text-[32px] text-white font-metropolisBold p-8">
          Your Profile
        </div>

        <div className="flex flex-col bg-white py-4">
          <div className="font-metropolisBold text-[20px] px-8 py-4">
            Profile Section
          </div>

          <div className="flex font-metropolis gap-10 px-8 py-4 text-[16px]">
            <div className="">Name:</div>
            {editMode && (
              <div>
                <input
                  type="text"
                  value={name}
                  className="px-2 border border-solid border-[#366D8A] rounded-md"
                  onChange={onChangeName}
                />
              </div>
            )}
            {!editMode && <div className="">{name}</div>}
          </div>

          {!editMode && email && (
            <div className="flex  font-metropolis gap-10 px-8 py-4 text-[16px]">
              <div className="">Email:</div>
              <div className="">{email}</div>
            </div>
          )}

          {editMode && (
            <div className="flex  font-metropolis gap-10 px-8 py-4 text-[16px]">
              <div className="">Email:</div>
              <div className="">
                <input
                  type="email"
                  value={email}
                  className="px-2 border border-solid border-[#366D8A] rounded-md"
                  onChange={onChangeEmail}
                />
              </div>
            </div>
          )}

          <div className="px-8 py-4">
            {!editMode && (
              <div
                className="border border-solid border-[#366D8A] py-2 px-5 text-[14px] inline-block font-metropolisBold cursor-pointer text-[#366D8A] hover:bg-[#366D8A] hover:text-white"
                onClick={() => {
                  setEditMode(true);
                }}
              >
                EDIT PROFILE
              </div>
            )}
            {editMode && (
              <div>
                <div
                  className="border border-solid border-[#366D8A] py-2 px-5 text-[14px] inline-block font-metropolisBold cursor-pointer text-[#366D8A] hover:bg-[#366D8A] hover:text-white"
                  onClick={() => {
                    saveDetails();
                  }}
                >
                  SAVE
                </div>
                <div
                  className="border border-solid border-[#366D8A] py-2 px-5 text-[14px] inline-block font-metropolisBold cursor-pointer text-[#366D8A] hover:bg-[#366D8A] hover:text-white ml-3"
                  onClick={() => {
                    setName(loggedInUser);
                    setEmail(userMail);
                    setEditMode(false);
                  }}
                >
                  Cancel
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="font-metropolisBold text-[20px] px-8 py-4">
              Manage Addresses
            </div>

            <div className="flex flex-wrap px-8 py-4 gap-7">
              {/**Address Box */}
              {addresses.map((address, i) => (
                <AddressBox
                  key={i}
                  type={address.type}
                  address={address.address}
                  mode="userInfo"
                />
              ))}
              <AddAddressBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
