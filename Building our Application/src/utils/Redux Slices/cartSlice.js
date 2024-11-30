const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (
        state.items.length > 0 &&
        action?.payload?.resInfo?.resName != state.items[0]?.resInfo?.resName
      ) {
        state.items.length = 0;
        state.total = 0;
      }
      // mutating the state here
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log(current(state.items));
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity -= 1;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.total = 0;
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (sum, item) =>
          sum + ((item.price || item.defaultPrice) / 100) * item.quantity,
        0
      );
    },
  },
});

export const { addItem, removeItem, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
