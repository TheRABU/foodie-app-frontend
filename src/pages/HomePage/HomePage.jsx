import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Questions from "../../components/FAQ-Section/Questions";
import Team from "../../components/MeetOurTeam/Team";
import OfferServices from "../../components/ServiceWeOffer/OfferServices";
import Testimonial from "../../components/Testimonial/Testimonial";
import TopFoodSection from "../../components/TopFoodSection/TopFoodSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      disable: window.innerWidth < 1024,
    });

    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Helmet>
        <title>Foodie Bite | Home page</title>
      </Helmet>
      <div className="bg-[#FFFFFF]">
        <div data-aos="slide-up" className="py-3 lg:py-10 ">
          <Banner />
        </div>
        <div data-aos="fade-up" className="my-10">
          <TopFoodSection />
        </div>
        <div className="mx-auto">
          <Questions />
        </div>
        <div className="mx-auto px-5 md:px-28">
          <Testimonial />
        </div>
        <div data-aos="slide-up" className="mx-auto px-3 md:px-28">
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
