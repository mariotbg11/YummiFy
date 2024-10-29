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

// fetching Main course recipe
export const fetchMainCourseRecipe = createAsyncThunk(
  "recipes/fetchMainCourseRecipe",
  async () => {
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=main course&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&number=16&apiKey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  }
);

// fetching Dessert recipe
export const fetchDessertRecipe = createAsyncThunk(
  "recipes/fetchDessertRecipe",
  async () => {
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=dessert&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&number=16&apiKey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  }
);

// fetching Drink recipe
export const fetchDrinkRecipe = createAsyncThunk(
  "recipes/fetchDrinkRecipe",
  async () => {
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=drink&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=true&number=16&apiKey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  }
);

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    popularRecipe: [],
    mainCourseRecipe: [],
    dessertRecipe: [],
    drinkRecipe: [],
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

    //Handle for Main Course Recipe
    builder
      .addCase(fetchMainCourseRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMainCourseRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.mainCourseRecipe = action.payload;
      })
      .addCase(fetchMainCourseRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    //Handle for Dessert Recipe
    builder
      .addCase(fetchDessertRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDessertRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.dessertRecipe = action.payload;
      })
      .addCase(fetchDessertRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    //Handle for Drink Recipe
    builder
      .addCase(fetchDrinkRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDrinkRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.drinkRecipe = action.payload;
      })
      .addCase(fetchDrinkRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  popularRecipe,
  mainCourseRecipe,
  dessertRecipe,
  drinkRecipe,
  loading,
  error,
} = recipeSlice.actions;

export default recipeSlice.reducer;
