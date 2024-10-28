import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function MenuRecipeLayout() {
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MenuRecipeLayout;
