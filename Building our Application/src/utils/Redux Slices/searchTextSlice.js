import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "searchText",
  initialState: {
    text: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setSearchText } = searchTextSlice.actions;

export default searchTextSlice.reducer;
