import React, { useContext } from "react";
import { foodRecipe } from "../../context";
import RecipesItems from "../../components/RecipesItems";

const Favorites = () => {
  const { favoriteList } = useContext(foodRecipe);
  return (
    <div className="py-8 contaner mx-auto flex justify-center gap-10 flex-wrap">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipesItems key={item.id} item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-center text-black  font-extrabold text-xl">
            Nothing to add more
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
