import { Button, Typography, Input } from "@material-tailwind/react";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <>
      <header className="bg-white md:py-4">
        <div className="mt-16 w-full place-items-stretch">
          <div className="container mx-auto text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Hi there, Welcome!
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Discover{" "}
              <span className="text-green-500 leading-snug ">Delicious</span>{" "}
              Recipes, Made{" "}
              <span className="leading-snug text-green-500">Simple</span>!
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Craving something special? Let YummiFy guide you to the perfect
              recipe, we’ve got you covered!
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="flex w-full flex-col gap-2 md:flex-row">
                <Input color="gray" label="Search for a recipe" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  Find Recipe!
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mx-auto object-cover object-center w-full md:w-3/4 my-5 md:my-10 rounded-lg"
          src={heroImg}
          alt="foods on top of table image"
        />
      </header>
    </>
  );
}

export default Hero;
