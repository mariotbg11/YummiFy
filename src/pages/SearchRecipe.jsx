import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchRecipe } from "../features/recipes/recipeSlice";
import CardList from "../components/CardList";

function SearchRecipe() {
  const { foodKeyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (foodKeyword) {
      dispatch(fetchSearchRecipe(foodKeyword));
    }
  }, [dispatch, foodKeyword]);

  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300 mt-36 mb-40">
      <h2 className="text-4xl font-bold mb-14">{foodKeyword} Recipe</h2>
      <CardList type="searchrecipe" />
    </div>
  );
}

export default SearchRecipe;
