import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FoodCollectionCard = ({ food }) => {
  const { FoodName, FoodImage, FoodCategory, Price, _id } = food;
  return (
    <>
      <div className="w-full h-full max-w-xs flex-1  overflow-hidden bg-[#FEFBF6] rounded-lg shadow-2xl">
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
          <div className="py-2 flex-grow justify-end">
            <h1 className="block text-xl font-bold text-gray-800">
              {FoodName}
            </h1>
            <span className="badge text-white font-semibold badge-accent">
              BDT {Price}
            </span>
          </div>
          <div className="flex-grow justify-between mb-2">
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
    </>
  );
};
FoodCollectionCard.propTypes = {
  food: PropTypes.shape({
    FoodName: PropTypes.string.isRequired,
    FoodImage: PropTypes.string.isRequired,
    FoodCategory: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodCollectionCard;
