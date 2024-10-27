import { useSelector } from "react-redux";
import CardItem from "./CardItem";

function CardList() {
  const { popularRecipe, loading, error } = useSelector(
    (state) => state.recipes
  );

  return (
    <div className="w-full">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
        {popularRecipe.map((recipe) => (
          <CardItem key={recipe.id} image={recipe.image} title={recipe.title} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
