import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthenticateProvider";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
const OurGallery = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const url = "https://foodie-bite-server.vercel.app/allClientReviews";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      disable: window.innerWidth < 1024,
    });

    AOS.init();
    AOS.refresh();
  }, [url]);

  return (
    <>
      <Helmet>
        <title>Foodie Bite | Gallery</title>
      </Helmet>
      <div className="bg-[#F9F5EB]">
        <div className="text-center text-3xl font-mono font-semibold">
          Gallery of our customer reviews
        </div>
        <div className="bg-[#F9F5EB] h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12 lg:px-10">
                <h2 className="text-sm text-center font-bold text-gray-800 lg:text-3xl">
                  Gallery
                </h2>

                <p className="hidden max-w-screen-lg text-gray-500 md:block">
                  This is a section where our users have posted reviews about
                  our services
                </p>
                {!user ? (
                  <p className="text-md text-gray-900">
                    Want to write a review about us login now
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              {user && (
                <Link
                  to="/review"
                  className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                >
                  Write a review
                </Link>
              )}
            </div>
            <section data-aos="fade-up-right" className="">
              <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 lg:px-10">
                  {reviews.map((singleReview) => (
                    <GalleryCard
                      key={singleReview._id}
                      singleReview={singleReview}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGallery;
