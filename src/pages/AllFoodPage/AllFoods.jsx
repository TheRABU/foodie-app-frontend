import { useLoaderData } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import FoodCollectionCard from "./FoodCollectionGrid/FoodCollectionCard";

const AllFoods = () => {
  const foodData = useLoaderData();
  const [foods, setFoods] = useState(foodData);
  return (
    <>
      <div className="h-full py-10 bg-slate-200">
        <h2 className="text-center text-7xl font-bold text-black">
          All <span className="text-red-500">foods</span>
        </h2>
        <div className="px-5 lg:px-28 w-full lg:max-w-screen mx-auto">
          <SearchBar />
        </div>
        {/* Foods Collection Grid */}
        <div className="mx-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 lg:px-20 gap-10">
          {foods.map((food) => (
            <FoodCollectionCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
