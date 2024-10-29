import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDessertRecipe } from "../features/recipes/recipeSlice";
import CardList from "../components/CardList";

function DessertRecipe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDessertRecipe());
  }, [dispatch]);

  return (
    <div className="bg-white mt-36 mb-40">
      <h2 className="text-4xl font-bold mb-14">Dessert Recipe</h2>
      <CardList type="dessert" />
    </div>
  );
}

export default DessertRecipe;
