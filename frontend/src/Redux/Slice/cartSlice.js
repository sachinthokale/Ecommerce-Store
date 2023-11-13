import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  items: JSON.parse(localStorage.getItem("cart")) || [],
  message: null,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequest: (state) => {
      state.loading = true;
    },
    cartSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;

      state.items.push(action.payload.item);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    cartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    increaseQuantitySlice: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
      }
    },
    decreaseQuantitySlice: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      }
    },
    deleteFromCart: (state, action) => {
      const itemId = action.payload;
      const updatedCartItems = state.items.filter((item) => item.id !== itemId);
      state.items = updatedCartItems;
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    },
  },
});
export const selectSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.total, 0);

export const {
  cartFailure,
  cartRequest,
  cartSuccess,
  increaseQuantitySlice,
  decreaseQuantitySlice,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
