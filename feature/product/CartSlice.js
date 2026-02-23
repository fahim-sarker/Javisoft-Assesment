import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromStorage: (state) => {
      if (typeof window !== "undefined") {
        const cart = localStorage.getItem("cartItems");
        state.cartItems = cart ? JSON.parse(cart) : [];
      }
    },

    addToSingleCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        state.cartItems.push(action.payload);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => !(item._id === action.payload.id),
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addToSingleCart,
  removeFromCart,
  clearCart,
  loadCartFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
