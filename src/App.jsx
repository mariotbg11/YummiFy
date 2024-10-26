import NavbarWithSearch from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import AccordionFAQ from "./components/AccordionFAQ";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavbarWithSearch />
      <Hero />
      <CardList />
      <AccordionFAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
