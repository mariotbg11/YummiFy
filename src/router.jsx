import { createBrowserRouter } from "react-router-dom";
import PopularRecipe from "./pages/PopularRecipe";
import MainCourseRecipe from "./pages/MainCourseRecipe";
import HomeLayout from "./layout/HomeLayout";
import MenuRecipeLayout from "./layout/MenuRecipeLayout";

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
    element: <MenuRecipeLayout />, // Layout Menu Recipe (Main Course, Dessert, Drink, Saved)
    children: [
      {
        path: "/main-course",
        element: <MainCourseRecipe />, // Route to Main Course Recipe
      },
    ],
  },
]);

export default router;
