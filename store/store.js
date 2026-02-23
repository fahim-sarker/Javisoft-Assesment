import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/product/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
