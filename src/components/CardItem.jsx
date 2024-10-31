import { useState, useEffect } from "react";
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

function CardItem({ image, title, recipeId, onDelete }) {
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
      const recipeToSave = { image, title, recipeId };
      savedRecipes.push(recipeToSave);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setModalMessage("Recipe added to saved"); // Show modal added to Page Saved
    }

    setIsHearted(!isHearted); // Toggle icon heart
    setShowModal(true); // Show modal when click icon heart
  };

  return (
    <Card className="w-full shadow-lg rounded-lg">
      <CardHeader floated={false} color="blue-gray" className="rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-[190px]"
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
            color="blue-gray"
            className="font-medium h-[52px] w-full line-clamp-2"
          >
            {title}
          </Typography>
        </div>
        <div className="group mt-6 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="$129 per night">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3 pb-4">
        <Button size="md" fullWidth={true}>
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
