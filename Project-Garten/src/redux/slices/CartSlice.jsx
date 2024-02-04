import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const isUnique = state.cart.every((el) => action.payload.id !== el.id);
      if (isUnique) {
        state.cart.push({
          ...action.payload,
          count: 1,
          total_price: action.payload.price,
          discount_total_price: action.payload.discont_price,
        });
      } else {
        state.cart = state.cart.map((el) => {
          return {
            ...el,
            count: ++el.count,
            total_price: el.price * el.count,
            discount_total_price: el.discont_price * el.count,
          };
        });
      }
    },

    removeProduct: (state, action) => {},

    incrementProduct: (state, action) => {
      state.cart = state.cart.map((el) => {
        if (action.payload === el.id) {
          return {
            ...el,
            count: ++el.count,
            total_price: el.price * el.count,
            discount_total_price: el.discont_price * el.count,
          };
        }
        return el;
      });
    },

    decrementProduct: (state, action) => {},
  },
});

export const cartSelector = (state) => state.cartProducts;
export const { addProduct, removeProduct, decrementProduct, incrementProduct } = cartSlice.actions;
export default cartSlice.reducer;
