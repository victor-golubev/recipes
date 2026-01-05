import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.list.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
