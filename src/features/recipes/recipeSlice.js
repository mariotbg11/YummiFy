import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetching Popular recipe
export const fetchPopularRecipe = createAsyncThunk(
  "recipes/fetchPopularRecipe",
  async () => {
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?number=8&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&apiKey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.recipes;
  }
);

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    popularRecipe: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //Handle for Popular Recipe
    builder
      .addCase(fetchPopularRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.popularRecipe = action.payload;
      })
      .addCase(fetchPopularRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { popularRecipe, loading, error } = recipeSlice.actions;

export default recipeSlice.reducer;
