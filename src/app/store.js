import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipes/recipesSlice";
import productsReducer from "../features/products/productsSlice";

const preloadedState = {
  recipes: {
    list: [],
    public: [],
  },
  products: {
    list: [],
  },
};

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    products: productsReducer,
  },
  preloadedState,
});
