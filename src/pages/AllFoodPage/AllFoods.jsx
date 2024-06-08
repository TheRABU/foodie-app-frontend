import SearchBar from "../../components/SearchBar/SearchBar";

const AllFoods = () => {
  return (
    <>
      <div className="h-screen  bg-slate-200">
        <h2 className="text-center text-3xl font-bold text-white">All foods</h2>
        <div className="px-20 py-10 w-4/6 mx-auto">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default AllFoods;
