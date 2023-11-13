// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], message: "" },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    productError: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage, setProducts, productError } = productSlice.actions;
export default productSlice.reducer;
