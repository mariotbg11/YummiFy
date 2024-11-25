import { Outlet } from "react-router-dom";
import DarkLightToggle from "../components/DarkLightToggle";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { useTheme } from "../context/ThemeContext";

function MenuRecipeLayout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavigationBar isDark={isDark} />
      <DarkLightToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MenuRecipeLayout;
