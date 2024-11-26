import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDetailRecipe } from "../features/recipes/recipeSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import imgPlaceholder from "../assets/images/img_placeholder.jpg";
import SpinnerLoading from "../components/SpinnerLoading";
import ErrorAlert from "../components/ErrorAlert";

function DetailRecipe() {
  const { detailRecipe, loading, error } = useSelector(
    (state) => state.recipes
  );

  const modifiedSummary = detailRecipe?.summary
    ? detailRecipe.summary.replace(
        /<a /g,
        '<a target="_blank" rel="noopener noreferrer" style="color: blue;" '
      )
    : "There is no description available for this recipe";

  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchDetailRecipe(recipeId));
    }
  }, [dispatch, recipeId]);

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
    <div className="bg-white dark:bg-[#121212] transition-colors duration-300 mt-36 mb-40">
      <div className="mx-auto w-full md:w-3/4">
        {detailRecipe ? (
          <>
            <h1 className="text-2xl lg:text-4xl font-bold mb-14 text-center">
              {detailRecipe.title}
            </h1>
            <img
              src={
                detailRecipe.image && detailRecipe.image.length > 0
                  ? detailRecipe.image
                  : imgPlaceholder
              }
              alt={detailRecipe.title}
              className="rounded-lg mx-auto mb-14 lg:w-[556px] lg:h-[370px]"
            />
            <p
              dangerouslySetInnerHTML={{ __html: modifiedSummary }}
              className="text-justify bg-green-50 dark:bg-[#181818] p-4 md:p-10 rounded-lg"
            ></p>

            {detailRecipe.extendedIngredients && (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ol>
                  {detailRecipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="list-inside list-disc">
                      <span className="font-bold">
                        {ingredient.measures.metric.amount}{" "}
                        {ingredient.measures.metric.unitShort}
                      </span>{" "}
                      - {ingredient.name}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {detailRecipe.analyzedInstructions?.[0]?.steps && (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                <div className="bg-green-50 dark:bg-[#181818] p-4 md:p-10 rounded-lg">
                  <ol>
                    {detailRecipe.analyzedInstructions[0].steps.map(
                      (instruction) => (
                        <li
                          key={instruction.id}
                          className="flex items-center gap-x-2 py-2 text-justify"
                        >
                          <span className="flex justify-center items-center h-[39.5px] w-[40px] px-4 py-2 bg-gray-300 dark:bg-green-50 rounded-full text-black">
                            {instruction.number}
                          </span>{" "}
                          {instruction.step}
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </div>
            )}

            <p className="mt-14">
              Read more on -{" "}
              <a
                href={detailRecipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              >
                {detailRecipe.creditsText}
              </a>
            </p>
          </>
        ) : (
          <p>There is no detail available for this recipe</p>
        )}
      </div>
    </div>
  );
}

export default DetailRecipe;
