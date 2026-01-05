import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.VITE_API_KEY;
const CACHE_TTL = 1000 * 60 * 60;

export const fetchPublicRecipes = createAsyncThunk(
  "recipes/fetchPublic",
  async (query) => {
    const cacheKey = `recipes_${query}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);

      if (Date.now() - timestamp < CACHE_TTL) {
        return data;
      }
    }

    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await res.json();

    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data, timestamp: Date.now() })
    );

    return data;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    public: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPublicRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.public = action.payload.recipes;
      })
      .addCase(fetchPublicRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
