import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    FoodName,
    FoodImage,
    FoodCategory,
    Price,
    MadeBy,
    FoodOrigin,
    Description,
    _id,
  } = food;
  return (
    <div className="w-full max-w-xs flex-1  overflow-hidden bg-white rounded-lg shadow-2xl">
      <div className="cursor-pointer">
        <img
          className="object-cover w-full h-56"
          src={FoodImage}
          alt="avatar"
        />
      </div>
      <div className="p-2">
        <div className="py-2 flex justify-between">
          <a
            href="#"
            className="block text-xl font-bold text-gray-800"
            tabIndex={0}
            role="link"
          >
            {FoodName}
          </a>
          <div className="badge text-white font-semibold badge-accent">
            BDT {Price}
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-md font-bold text-gray-700 ">
            Category: {FoodCategory}
          </span>
        </div>
        <div className="flex justify-between">
          <button className="btn rounded-3xl bg-red-600 hover:bg-yellow-400 text-white font-semibold">
            Order Now
          </button>
          <Link to={`/single-food/${_id}`}>
            <button className="btn rounded-lg bg-blue-600 hover:bg-indigo-700 text-white font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
