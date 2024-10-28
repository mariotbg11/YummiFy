import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AccordionFAQ from "../components/AccordionFAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavigationBar />
      <Hero />
      <Stats />
      <Outlet />
      <AccordionFAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomeLayout;
