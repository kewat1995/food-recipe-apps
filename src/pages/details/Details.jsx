import  { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { foodRecipe } from "../../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDatailsData,
    setRecipeDetailsData,
    handelFavoriteList,
    favoriteList,
  } = useContext(foodRecipe);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    };

    getRecipeDetails();
  
  }, [id, setRecipeDetailsData]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 rounded-xl overflow-hidden group">
          <img
            src={recipeDatailsData?.recipe.image_url}
            alt="recipe-details"
            className="w-full h-full object-cover block  group-hover:scale-105 duration-300 "
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-cyan-700 font-medium">
          {recipeDatailsData?.recipe.publisher}
        </span>
        <h3 className="truncate text-black font-bold text-2xl">
          {recipeDatailsData?.recipe.title}
        </h3>
        <div>
          <button
            onClick={() => handelFavoriteList(recipeDatailsData?.recipe)}
            className=" p-2 px-6 shadow-lg uppercase rounded-lg border-2  text-white bg-violet-500 hover:bg-violet-600 "
          >
            {favoriteList &&
            favoriteList.length > 0 &&
            favoriteList.findIndex(
              (item) => item.id === recipeDatailsData?.recipe?.id
            ) !== -1
              ? "Remove From List"
              : "Save the List"}
          </button>
        </div>
        <div>
          <span className="font-bold text-2xl text-black">Ingredients:</span>
          <ul className="flex flex-col">
            {recipeDatailsData?.recipe?.ingredients.map((item,index) => (
              
              <li key={index} className="flex flex-row gap-1">
                <span className="text-black font-medium text-2xl">
                  {item.quantity} {item.unit}
                </span>
                <span className="text-black font-medium text-2xl">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
