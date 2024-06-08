import Banner from "../../components/Banner/Banner";
import TopFoodSection from "../../components/TopFoodSection/TopFoodSection";

const HomePage = () => {
  return (
    <>
      <div className="py-10">
        <Banner />
      </div>
      <div>
        <TopFoodSection />
      </div>
    </>
  );
};

export default HomePage;
