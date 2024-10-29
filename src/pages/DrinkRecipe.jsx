import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDrinkRecipe } from "../features/recipes/recipeSlice";
import CardList from "../components/CardList";

function DrinkRecipe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinkRecipe());
  }, [dispatch]);

  return (
    <div className="bg-white mt-36 mb-40">
      <h2 className="text-4xl font-bold mb-14">Drink Recipe</h2>
      <CardList type="drink" />
    </div>
  );
}

export default DrinkRecipe;