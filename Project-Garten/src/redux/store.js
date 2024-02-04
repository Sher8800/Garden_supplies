import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    cartProducts: CartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});
