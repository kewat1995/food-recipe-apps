import React, { useContext } from "react";
import { foodRecipe } from "../../context";
import RecipesItems from "../../components/RecipesItems";

const Home = () => {
  const { loading, recipeList } = useContext(foodRecipe);

  if (loading) return <div>Loading... please wait</div>;

  return (
    <div className="py-8 contaner mx-auto flex justify-center gap-10 flex-wrap">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipesItems key={item.id} item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-center text-black  font-extrabold text-xl">
            Nothing to show ? please somthing to search
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
