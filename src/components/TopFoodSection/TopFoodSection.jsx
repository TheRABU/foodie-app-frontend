import { useEffect, useState } from "react";

import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFoodSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    setTimeout(() => {
      <div className="h-screen text-center">
        <span className="text-5xl loading loading-bars loading-lg"></span>
      </div>;
    }, 500);
  }
  return (
    <>
      <h3 className="text-center font-semibold text-5xl">
        Our Top <br />
        <span className="text-[#FF004D]">Food</span> Items
      </h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-12 md:px-16 lg:px-32">
        {foodItems.slice(0, 6).map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/all-foods"
          className="px-5 py-5 font-medium bg-[#FF204E] hover:bg- hover:text-gray-200 text-[#FFF7F1] rounded-lg text-sm"
        >
          All foods
        </Link>
      </div>
    </>
  );
};

export default TopFoodSection;
