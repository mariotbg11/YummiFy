import { createBrowserRouter } from "react-router-dom";
import PopularRecipe from "./pages/PopularRecipe";
import HomeLayout from "./layout/HomeLayout";

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
]);

export default router;
