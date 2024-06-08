import { useEffect, useState } from "react";

import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFoodSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("dummyFoodData.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    <div className="h-screen text-center">
      <span className="text-5xl loading loading-bars loading-lg"></span>
    </div>;
  }
  return (
    <>
      <h3 className="text-center font-semibold text-5xl">
        Our Top <br />
        <span className="text-red-600">Food</span> Items
      </h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-12 md:px-24">
        {foodItems.slice(0, 6).map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/all-foods">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopFoodSection;
