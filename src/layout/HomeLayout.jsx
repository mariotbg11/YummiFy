import { Outlet } from "react-router-dom";
import DarkLightToggle from "../components/DarkLightToggle";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AccordionFAQ from "../components/AccordionFAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { useTheme } from "../context/ThemeContext";

function HomeLayout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <NavigationBar isDark={isDark} />
      <DarkLightToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <Stats />
      <Outlet />
      <AccordionFAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomeLayout;
