import NavbarWithSearch from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavbarWithSearch />
      <Hero />
      <CardList />
    </div>
  );
}

export default App;
