import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux Slices/cartSlice";
import userReducer from "./Redux Slices/userSlice";
import searchTextReducer from "./Redux Slices/searchTextSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    searchText: searchTextReducer,
  },
});

export default appStore;
