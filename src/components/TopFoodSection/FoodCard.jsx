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
    <div className="w-full max-w-xs flex-1  overflow-hidden bg-[#FEFBF6] rounded-lg shadow-2xl">
      <Link to={`/single-food/${_id}`}>
        <div className="cursor-pointer">
          <img
            className="object-cover w-full h-56"
            src={FoodImage}
            alt="avatar"
          />
        </div>
      </Link>

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
          <Link to={`/purchase/${_id}`}>
            <button className="btn rounded-3xl bg-[#B70404] hover:bg-[#F9FBE7] text-white hover:text-[#040D12] font-semibold">
              Order Now
            </button>
          </Link>

          <Link to={`/single-food/${_id}`}>
            <button className="btn rounded-lg bg-[#0D1282] hover:bg-indigo-700 text-white font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
