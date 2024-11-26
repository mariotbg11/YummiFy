import { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import NoRecipeSavedAlert from "../components/NoRecipeSavedAlert";

function SavedRecipe() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Ambil data saved recipes dari localStorage
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(recipes);
  }, []);

  const handleDeleteRecipe = (recipeId) => {
    setSavedRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.recipeId !== recipeId)
    );
  };

  return (
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300 mt-36 mb-40">
      <h2 className="text-2xl lg:text-4xl font-bold mb-14">Saved Recipe</h2>
      {savedRecipes.length > 0 ? (
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {savedRecipes.map((recipe) => (
            <CardItem
              key={recipe.recipeId}
              image={recipe.image}
              title={recipe.title}
              price={recipe.price}
              cooks={recipe.cooks}
              likes={recipe.likes}
              recipeId={recipe.recipeId}
              onDelete={handleDeleteRecipe}
            />
          ))}
        </div>
      ) : (
        <NoRecipeSavedAlert />
      )}
    </div>
  );
}

export default SavedRecipe;
