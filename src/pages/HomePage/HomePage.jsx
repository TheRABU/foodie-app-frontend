import Banner from "../../components/Banner/Banner";
import Questions from "../../components/FAQ-Section/Questions";
import Team from "../../components/MeetOurTeam/Team";
import OfferServices from "../../components/ServiceWeOffer/OfferServices";
import Testimonial from "../../components/Testimonial/Testimonial";
import TopFoodSection from "../../components/TopFoodSection/TopFoodSection";

const HomePage = () => {
  return (
    <>
      <div className="py-10 bg-white">
        <Banner />
      </div>
      <div className="my-10">
        <TopFoodSection />
      </div>
      <div className="mx-auto">
        <Questions />
      </div>
      <div className="mx-auto px-28">
        <Testimonial />
      </div>
      <div className="mx-auto px-20 py-20">
        <Team />
      </div>
      <div className="mx-auto px-28 bg-white py-20">
        <OfferServices />
      </div>
    </>
  );
};

export default HomePage;
