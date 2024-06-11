import { useState } from "react";

const Un = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        id="decrement-btn"
        onClick={handleDecrement}
        className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>
      <span id="counter" className="text-4xl font-bold mx-4">
        {counter}
      </span>
      <button
        id="increment-btn"
        onClick={handleIncrement}
        className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v12M6 12h12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Un;
