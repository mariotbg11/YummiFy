import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPopularRecipe } from "../features/recipes/recipeSlice";
import CardList from "../components/CardList";

function PopularRecipe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularRecipe());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-14">Popular Recipe</h2>
      <CardList type="popular" />
    </div>
  );
}

export default PopularRecipe;
