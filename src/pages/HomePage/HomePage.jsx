import Banner from "../../components/Banner/Banner";
import Questions from "../../components/FAQ-Section/Questions";
import Team from "../../components/MeetOurTeam/Team";
import OfferServices from "../../components/ServiceWeOffer/OfferServices";
import Testimonial from "../../components/Testimonial/Testimonial";
import TopFoodSection from "../../components/TopFoodSection/TopFoodSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div className="py-3 lg:py-10 ">
          <Banner />
        </div>
        <div className="my-10">
          <TopFoodSection />
        </div>
        <div className="mx-auto">
          <Questions />
        </div>
        <div className="mx-auto px-5 md:px-28">
          <Testimonial />
        </div>
        <div className="mx-auto px-3 md:px-28">
          <OfferServices />
        </div>

        <div className="mx-auto px-3 md:px-20">
          <Team />
        </div>
      </div>
    </>
  );
};

export default HomePage;
