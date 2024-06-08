import { useEffect, useState } from "react";

import FoodCard from "./FoodCard";

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

  const handleViewMore = () => {
    history.push("/all-foods");
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8 mx-auto px-12 md:px-20">
        {foodItems.slice(0, 6).map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleViewMore}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          View More
        </button>
      </div>
    </>
  );
};

export default TopFoodSection;
