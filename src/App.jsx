import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FoodRecipeProvider from "./context";

function App() {
  return (
    <FoodRecipeProvider>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Outlet />
      </div>
    </FoodRecipeProvider>
  );
}

export default App;
