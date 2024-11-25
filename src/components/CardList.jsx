import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import SpinnerLoading from "./SpinnerLoading";
import ErrorAlert from "./ErrorAlert";
import imgPlaceholder from "../assets/images/img_placeholder.jpg";

function CardList({ type }) {
  const {
    popularRecipe,
    mainCourseRecipe,
    dessertRecipe,
    drinkRecipe,
    searchRecipe,
    loading,
    error,
  } = useSelector((state) => state.recipes);

  const dataRecipe =
    type === "popular"
      ? popularRecipe
      : type === "maincourse"
      ? mainCourseRecipe
      : type === "dessert"
      ? dessertRecipe
      : type === "drink"
      ? drinkRecipe
      : searchRecipe;

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[600px]">
        <SpinnerLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center  h-[600px] w-full md:w-[700px] mx-auto">
        <div className="w-full text-center rounded-lg">
          <ErrorAlert />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-[#121212] transition-colors duration-300">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
        {dataRecipe.map((recipe) => (
          <CardItem
            key={recipe.id}
            image={
              recipe.image && recipe.image.length > 0
                ? recipe.image
                : imgPlaceholder
            }
            title={recipe.title}
            price={recipe.pricePerServing}
            cooks={recipe.readyInMinutes}
            likes={recipe.aggregateLikes}
            recipeId={recipe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
