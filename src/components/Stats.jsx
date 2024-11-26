import { Typography, Card } from "@material-tailwind/react";

function StatsCard({ count, title, description }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="gradient"
        className="text-3xl lg:text-4xl font-bold text-blue-gray-900 dark:text-[#FFFFFF]"
      >
        {count}
      </Typography>
      <hr className="mt-2 mb-4 w-full" />
      <Typography
        variant="h5"
        className="mt-1 font-bold text-blue-gray-900 dark:text-[#FFFFFF]"
      >
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "20,000+",
    title: "Delicious Recipes",
    description:
      "From quick meals to gourmet dishes, explore a world of flavors with our ever-growing collection.",
  },
  {
    count: "100+",
    title: "Cuisine Styles",
    description:
      "Discover flavors from around the globe with recipes spanning more than 100 diverse cuisine styles.",
  },
  {
    count: "70%",
    title: "Quick Recipes",
    description:
      "Save time with 70% of our recipes taking 30 minutes or less to prepare.",
  },
  {
    count: "24/7",
    title: "Recipe Access",
    description:
      "Anytime, anywhere—access YummiFy’s recipes from your phone, tablet, or computer.",
  },
];

function Stats() {
  return (
    <section className="bg-white dark:bg-[#121212] transition-colors duration-300 my-40 container mx-auto">
      <div className="lg:mb-24 mb-10">
        <Typography className="mb-4 text-blue-gray-900 dark:text-[#FFFFFF] !text-2xl font-bold lg:!text-4xl">
          The Recipe Hub Trusted by Foodies!
        </Typography>
        <Typography variant="lead" className="w-w-full !text-gray-500 max-w-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquam
          dicta et explicabo porro quasi! Harum enim
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        <Card
          className="bg-gray-100/50 dark:bg-[#181818] py-24 text-center px-4 rounded-lg"
          shadow={false}
        >
          <Typography
            variant="h1"
            className="!text-green-500 !leading-snug text-4xl lg:text-5xl"
          >
            500,000+
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mt-2 font-bold text-blue-gray-900 dark:text-[#FFFFFF]"
          >
            Satisfied Home Cooks Member
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-10 font-bold text-blue-gray-900 dark:text-[#FFFFFF]"
          >
            Happy Cooks
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          >
            Join a community of over 500,000 satisfied home cooks who trust
            YummiFy for meal inspiration.
          </Typography>
        </Card>
        <div className="lg:px-4">
          <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
