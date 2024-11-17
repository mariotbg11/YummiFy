import { createBrowserRouter } from "react-router-dom";
import PopularRecipe from "./pages/PopularRecipe";
import MainCourseRecipe from "./pages/MainCourseRecipe";
import DessertRecipe from "./pages/DessertRecipe";
import DrinkRecipe from "./pages/DrinkRecipe";
import SavedRecipe from "./pages/SavedRecipe";
import HomeLayout from "./layout/HomeLayout";
import MenuRecipeLayout from "./layout/MenuRecipeLayout";
import SearchRecipe from "./pages/SearchRecipe";
import DetailRecipe from "./pages/DetailRecipe";

const router = createBrowserRouter([
  {
    element: <HomeLayout />, // Layout Home
    children: [
      {
        path: "/",
        element: <PopularRecipe />, // Route to Home/Popular Recipe
      },
    ],
  },
  {
    element: <MenuRecipeLayout />, // Layout Menu Recipe (Main Course, Dessert, Drink, Saved, Detail)
    children: [
      {
        path: "/main-course",
        element: <MainCourseRecipe />, // Route to Main Course Recipe
      },
      {
        path: "/dessert",
        element: <DessertRecipe />, // Route to Dessert Recipe
      },
      {
        path: "/drink",
        element: <DrinkRecipe />, // Route to Drink Recipe
      },
      {
        path: "/saved",
        element: <SavedRecipe />, // Route to Saved Recipe
      },
      {
        path: "/search/:foodKeyword",
        element: <SearchRecipe />,
      },
      {
        path: "recipe/:recipeId",
        element: <DetailRecipe />,
      },
    ],
  },
]);

export default router;
