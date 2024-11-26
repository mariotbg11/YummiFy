import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faDollarSign as solidDolarSign } from "@fortawesome/free-solid-svg-icons";
import { faFire as solidFire } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";

function CardItem({ image, title, price, cooks, likes, recipeId, onDelete }) {
  const [isHearted, setIsHearted] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check the recipes in the localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const hearted = savedRecipes.some((recipe) => recipe.recipeId === recipeId);
    setIsHearted(hearted);
  }, [recipeId]);

  const handleSaveRecipe = () => {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    if (isHearted) {
      // If the recipe hearted, delete from localStorage
      savedRecipes = savedRecipes.filter(
        (recipe) => recipe.recipeId !== recipeId
      );
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setModalMessage("Recipe removed from saved!"); // Show modal removed from Page Saved
      if (onDelete) {
        onDelete(recipeId); // Call onDelete function for updating recipes list on Page Saved
      }
    } else {
      // Add news to localStorage savedRecipes
      const recipeToSave = { image, title, price, cooks, likes, recipeId };
      savedRecipes.push(recipeToSave);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setModalMessage("Recipe added to saved"); // Show modal added to Page Saved
    }

    setIsHearted(!isHearted); // Toggle icon heart
    setShowModal(true); // Show modal when click icon heart
  };

  const navigate = useNavigate();

  const handleSeeRecipe = () => {
    navigate(`/recipe/${recipeId}`); // Menggunakan recipe.id dari data API
  };

  return (
    <Card className="w-full shadow-lg rounded-lg dark:bg-[#181818]">
      <CardHeader floated={false} className="rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-[225px] lg:h-[190px]"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-1 right-2  text-xl"
          onClick={handleSaveRecipe}
        >
          <FontAwesomeIcon icon={isHearted ? solidHeart : regularHeart} />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h6"
            className="font-medium h-[52px] w-full text-blue-gray-900 dark:text-[#FFFFFF] line-clamp-2"
          >
            {title}
          </Typography>
        </div>
        <div className="group mt-6 inline-flex flex-wrap items-center gap-3">
          <Tooltip
            content={`$${(price / 100).toFixed(2)} per serving`}
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <span className="flex justify-center items-center cursor-pointer h-[45.5px] w-[46px] rounded-full border border-gray-900/5 bg-gray-900/5 dark:bg-gray-900 p-3 text-gray-900 dark:text-white transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:dark:bg-gray-800 hover:!opacity-100 group-hover:opacity-70">
              <FontAwesomeIcon icon={solidDolarSign} />
            </span>
          </Tooltip>
          <Tooltip
            content={`ready in ${cooks} minutes`}
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <span className="flex justify-center items-center cursor-pointer h-[45.5px] w-[46px] rounded-full border border-gray-900/5 bg-gray-900/5 dark:bg-gray-900 p-3 text-gray-900 dark:text-white transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:dark:bg-gray-800 hover:!opacity-100 group-hover:opacity-70">
              <FontAwesomeIcon icon={solidFire} />
            </span>
          </Tooltip>
          <Tooltip
            content={`${likes} people likes`}
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <span className="flex justify-center items-center cursor-pointer h-[45.5px] w-[46px] rounded-full border border-gray-900/5 bg-gray-900/5 dark:bg-gray-900 p-3 text-gray-900 dark:text-white transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:dark:bg-gray-800 hover:!opacity-100 group-hover:opacity-70">
              <FontAwesomeIcon icon={solidThumbsUp} />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3 pb-4">
        <Button
          onClick={handleSeeRecipe}
          size="md"
          fullWidth={true}
          className="dark:bg-green-500"
        >
          See Recipe
        </Button>
      </CardFooter>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white w-full lg:w-1/4 mx-3 px-6 py-6 rounded-lg">
            <p className="text-sm py-4">{modalMessage}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default CardItem;
