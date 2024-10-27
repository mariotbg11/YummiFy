import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipes/recipeSlice";

export default configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
