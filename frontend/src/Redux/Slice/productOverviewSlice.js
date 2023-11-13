// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productOIverviewSlice = createSlice({
  name: "productsOverview",
  initialState: { data: null },
  reducers: {
    setProductOverview: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProductOverview } = productOIverviewSlice.actions;
export default productOIverviewSlice.reducer;
