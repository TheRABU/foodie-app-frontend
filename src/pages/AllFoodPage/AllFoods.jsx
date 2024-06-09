import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCollectionCard from "./FoodCollectionGrid/FoodCollectionCard";
import Skeleton from "../../components/Skeleton/Skeleton";
import axios from "axios";
const AllFoods = () => {
  const foodData = useLoaderData();
  const [foods, setFoods] = useState(foodData);
  const [Loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchInitialFoods();
  }, []);
  const fetchInitialFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/foods");
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching initial foods:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/foods?search=${searchValue}`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  if (Loading) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="h-full py-10 bg-slate-200">
        <h2 className="text-center text-7xl font-bold text-black">
          All <span className="text-red-500">foods</span>
        </h2>
        <div className="px-5 lg:px-28 w-full lg:max-w-screen mx-auto">
          {/* SEARCH BAR */}
          <>
            <div className="my-20">
              <div className="relative w-full  mx-auto bg-white rounded-full">
                <input
                  placeholder="Food name"
                  className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-red-200 focus:border-red-200"
                  type="text"
                  name="query"
                  id="query"
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <button
                  type="submit"
                  onClick={handleSearch}
                  className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-red-600 sm:px-6 sm:text-base sm:font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <svg
                    className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </>
        </div>
        {/* Foods Collection Grid */}
        <div className="mx-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 lg:px-20 gap-10">
          {Array.isArray(foods) && foods.length > 0 ? (
            foods.map((food) => (
              <FoodCollectionCard key={food._id} food={food} />
            ))
          ) : (
            <div className="text-center w-full col-span-full">
              <p className="text-xl text-gray-500">No results found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
