import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomeLayout;
