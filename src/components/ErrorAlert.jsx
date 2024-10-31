import { Alert } from "@material-tailwind/react";

function ErrorAlert() {
  return (
    <div className="flex justify-center items-center rounded-lg">
      <Alert
        color="red"
        className="flex flex-col justify-center items-center pl-16"
      >
        Something went wrong, unable to load content. Please try again later...
      </Alert>
    </div>
  );
}

export default ErrorAlert;
