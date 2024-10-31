import { Alert } from "@material-tailwind/react";

function NoRecipeSavedAlert() {
  return (
    <div className="flex flex-col justify-center items-center  h-[600px] w-full md:w-[700px] mx-auto">
      <Alert
        variant="ghost"
        className="flex flex-col justify-center items-center pl-16"
      >
        <span>No recipe saved available.</span>
      </Alert>
    </div>
  );
}

export default NoRecipeSavedAlert;
