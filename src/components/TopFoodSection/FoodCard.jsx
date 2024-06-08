const FoodCard = ({ food }) => {
  const {
    FoodName,
    FoodImage,
    FoodCategory,
    Price,
    MadeBy,
    FoodOrigin,
    Description,
  } = food;
  return (
    <div className="w-full max-w-xs p-2 overflow-hidden bg-white rounded-lg shadow-lg">
      <div>
        <img
          className="object-cover w-full h-56"
          src={FoodImage}
          alt="avatar"
        />
      </div>

      <div className="py-5 flex justify-between">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800"
          tabIndex={0}
          role="link"
        >
          {FoodName}
        </a>
        <div className="badge text-black font-bold badge-accent">
          BDT {Price}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-md font-bold text-gray-700 ">
          Category: {FoodCategory}
        </span>
      </div>
      <div className="flex justify-between">
        <button className="btn  bg-red-600 text-white font-semibold">
          Order Now
        </button>
        <button className="btn bg-blue-600 text-white font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
