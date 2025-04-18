import { createSlice } from '@reduxjs/toolkit';

const handleCart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    },
    delCart(state, action) {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    },
    removeCart(state, action) {
      return state.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { addCart, delCart, removeCart } = handleCart.actions;
export default handleCart.reducer;
