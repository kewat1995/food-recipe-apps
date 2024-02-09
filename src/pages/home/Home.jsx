import { useContext } from "react";
import { foodRecipe } from "../../context";
import RecipesItems from "../../components/RecipesItems";
import Spinner from "../../components/Spinner";


const Home = () => {
  const { loading, recipeList } = useContext(foodRecipe);

  
  return (
    <div className="py-8 contaner mx-auto flex justify-center  gap-10 flex-wrap">
      
      
      {  recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipesItems key={item.id} item={item} />)
      ) : (
        <div>
          {loading && <div className="mt-6 mb-20"><Spinner/></div>}
          <p className="lg:text-4xl text-center text-black  font-extrabold text-xl">
            Nothing to show ? please furits name write here
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
