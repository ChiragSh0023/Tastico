import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "User",
    email: "",
    addresses: [
      {
        type: "Home",
        address: "21/172, Kaveri Path, Mansarovar, Jaipur",
      },
    ],
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    addAddress: (state, action) => {
      state.addresses.push({
        type: action.payload.type,
        address: action.payload.address,
      });
    },
    editAddress: (state, action) => {
      console.log(current(state.addresses));

      const { oldAddress, newAddress, type } = action.payload;

      const itemIndex = state.addresses.findIndex(
        (item) => item.address === oldAddress
      );

      if (itemIndex !== -1) {
        state.addresses[itemIndex] = {
          type: type,
          address: newAddress,
        };
      }

      console.log(current(state.addresses));
    },
    deleteAddress: (state, action) => {
      console.log(current(state.addresses));
      const itemIndex = state.addresses.findIndex(
        (item) => item.address === action.payload
      );

      if (itemIndex !== -1) {
        state.addresses.splice(itemIndex, 1);
      }
      console.log(current(state.addresses));
    },
  },
});

export const {
  updateName,
  updateEmail,
  addAddress,
  editAddress,
  deleteAddress,
} = userSlice.actions;

export default userSlice.reducer;
