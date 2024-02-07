import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const foodRecipe = createContext(null);

const FoodRecipeProvider = ({ children }) => {
  const [searchParam, setSearchparam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDatailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavorriteList] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchparam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchparam("");
    }
  };
  const handelFavoriteList = (getCurrentId) => {
    const copyfavoritelist = [...favoriteList];
    let index = copyfavoritelist.findIndex(
      (item) => item.id === getCurrentId.id
    );
    if (index === -1) {
      copyfavoritelist.push(getCurrentId);
    } else {
      copyfavoritelist.splice(index);
    }
    setFavorriteList(copyfavoritelist);
  };
  // console.log(favoriteList);
  return (
    <foodRecipe.Provider
      value={{
        searchParam,
        setSearchparam,
        handelSubmit,
        loading,
        recipeList,
        recipeDatailsData,
        setRecipeDetailsData,
        handelFavoriteList,
        favoriteList,
      }}
    >
      {children}
    </foodRecipe.Provider>
  );
};

export default FoodRecipeProvider;
