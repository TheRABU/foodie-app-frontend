import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import axios from "axios";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [data, isLoading, errpr] = useQuery({
  //   queryKey: ["search", searchValue],
  //   queryFn: async () => {
  //     return fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
  //       .then((res) => res.json())
  //       .then(console.log);
  //   },
  // });
  const { data, isLoading, error } = useQuery({
    queryKey: ["foods", searchValue],
    queryFn: async () => {
      const response = await axios.get(`/api/foods?search=${searchValue}`);
      return response.data;
    },
  });
  return (
    <>
      <div className="my-20">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="search"
              className="grow"
              placeholder="Search"
            />
            <div>
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </label> */}
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
        </form>
      </div>
      {isLoading && (
        <div className="text-center">
          <span className="text-5xl loading loading-bars loading-lg"></span>
        </div>
      )}
      {error && <div>Error occurred: {error.message}</div>}
    </>
  );
};

export default SearchBar;

{
  /*  */
}
