import NavbarWithSearch from "./components/Navbar";
import Hero from "./components/Hero";
import CardItem from "./components/CardItem";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavbarWithSearch />
      <Hero />
      <CardItem />
    </div>
  );
}

export default App;
