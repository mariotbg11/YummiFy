import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMainCourseRecipe } from "../features/recipes/recipeSlice";
import CardList from "../components/CardList";

function MainCourseRecipe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainCourseRecipe());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300 mt-36 mb-40">
      <h2 className="text-4xl font-bold mb-14">Main Course Recipe</h2>
      <CardList type="maincourse" />
    </div>
  );
}

export default MainCourseRecipe;
