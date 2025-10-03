import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice/cartSlice";
import likeSlice from "./like-slice/likeSlice";
import orderSlice from "./order-slice/orderSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    likeSlice,
    orderSlice,
  },
});
export default store;