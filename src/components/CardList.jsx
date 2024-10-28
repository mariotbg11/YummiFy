import { useSelector } from "react-redux";
import CardItem from "./CardItem";

function CardList({ type }) {
  const { popularRecipe, mainCourseRecipe, loading, error } = useSelector(
    (state) => state.recipes
  );

  const dataRecipe = type === "popular" ? popularRecipe : mainCourseRecipe;

  return (
    <div className="w-full">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
        {dataRecipe.map((recipe) => (
          <CardItem key={recipe.id} image={recipe.image} title={recipe.title} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
