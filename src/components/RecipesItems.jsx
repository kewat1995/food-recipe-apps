/* eslint-disable react/prop-types */



import  { Link } from "react-router-dom";


const RecipesItems = ({ item }) => {
  return (
    <div className="flex flex-col overflow-hidden w-80 text-white/75 shadow-lg rounded-2xl gap-5 border-2 border-white p-5">
      <div className=" h-40 flex justify-center overflow-hidden rounded-xl text-center">
        <img
          src={item?.image_url}
          alt="recipes-items"
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="truncate text-black font-bold text-xl">{item?.title}</h3>
        <Link
          to={`/recipe-items/${item?.id}`}
          className="text-blue-500 p-3 mt-5 px-8 inline-block rounded-lg text-sm font-medium  tracking-wider border-2 borred-blue-500"
        >
          Go to the Recipes details
        </Link>
      </div>
    </div>
  );
};

export default RecipesItems;
