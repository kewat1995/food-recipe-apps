import { useContext } from "react";
import { Link } from "react-router-dom";
import { foodRecipe } from "../context";

const Navbar = () => {
  const { searchParam, setSearchparam, handelSubmit } = useContext(foodRecipe);

  return (
    <nav className="flex justify-between items-center py-8 container flex-col mx-auto sm:flex-row gap-5 sm:gap-0  ">
      <h2>
        <Link to="/">FoodRecipe</Link>
      </h2>
      <form onSubmit={handelSubmit}>
        <input
          className="bg-white/75 p-3 px-8 rounded-full shadow-lg sm:w-96 outline-none shadow-red-100 focus:shadow-red-200 border "
          type="text "
          placeholder="Enter food items name..."
          name="search"
          value={searchParam}
          onChange={(e) => setSearchparam(e.target.value)}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link to="/" className="text-black hover:text-red-700 ">
            home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="text-black hover:text-red-700">
            favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
