import CardItem from "./CardItem";

function CardList() {
  return (
    <div className="mt-32 mb-36 w-full">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default CardList;
