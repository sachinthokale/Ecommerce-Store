import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slice/authSlice.js";
import productSlice from "./Slice/productSlice.js";
import productOverviewSlice from "./Slice/productOverviewSlice.js";
import getUserSlice from "./Slice/getUserSlice.js";
import cartSlice from "./Slice/cartSlice.js";

const store = configureStore({
  reducer: {
    login: loginSlice,
    AllProduct: productSlice,
    productOverview: productOverviewSlice,
    userData: getUserSlice,
    cart: cartSlice,
  },
});

export default store;
