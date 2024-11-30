import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux Slices/cartSlice";
import userReducer from "./Redux Slices/userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
