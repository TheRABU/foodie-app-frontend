import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { AuthContext } from "../../providers/AuthenticateProvider";

import Swal from "sweetalert2";
import axios from "axios";
import LoadFoodReviewCard from "./LoadFoodReviewCard";
const SingleFoodPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const foodData = useLoaderData();
  const [singleFood, setSingleFood] = useState(foodData);
  const [userReviews, setUserReviews] = useState([]);
  const {
    _id,
    FoodName,
    FoodImage,
    FoodCategory,
    Price,
    MadeBy,
    FoodOrigin,
    Description,
    Quantity,
  } = singleFood;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:5000/foodReview/${_id}`);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error("Got an error:", err.response?.data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const url = `http://localhost:5000/foodReview/${_id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setUserReviews(res.data);
      } catch (err) {
        console.error("Got an error:", err.response?.data);
      }
    };

    fetchData();
  }, [url]);

  // post review
  const addReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = FoodName;
    const userEmail = user?.email;
    const userPic = user?.photoURL;
    const review = form.review.value;
    const reviewRatings = parseFloat(form.reviewRatings.value);

    const payload = {
      _id,
      foodName,
      userEmail,
      review,
      userPic,
      reviewRatings,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/addFoodReview",
        payload
      );
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Review Added",
          showConfirmButton: false,
          timer: 1500,
        });

        setUserReviews([...userReviews, payload]);
      }
    } catch (err) {
      console.error("Got an error:", err.response?.data);
    }
  };

  // delete Review

  return (
    <>
      <div>
        <section className="bg-[#ffffff] px-4 lg:px-28">
          <h3 className="text-3xl pt-5 font-serif text-center">{FoodName}</h3>
          <div className="container  py-10 mx-auto">
            <div className="lg:flex lg:-mx-6">
              <div className="lg:w-3/4 lg:px-6">
                <img
                  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                  src={FoodImage}
                  alt="food image"
                />

                <div>
                  <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                    {FoodName}
                  </h1>
                  {/* Problematic div in mobile device */}
                  <div className="flex-row md:flex items-center mt-6">
                    <div className="hidden md:flex">
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      />
                    </div>

                    <div className="mx-0 py-3 md:mx-4 ">
                      <p className="text-sm text-gray-500 ">Made By</p>
                      <h1 className="text-sm text-gray-700 ">{MadeBy}</h1>
                    </div>
                    {/* REVIEW MODAL */}

                    {user ? (
                      <div
                        className="mx-0 py-3 md:mx-5 tooltip"
                        data-tip="Give Review"
                      >
                        {/* USER REVIEW FORM  BUTTON*/}
                        <button
                          className="btn"
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                        >
                          <MdOutlineReviews className="text-3xl" />
                        </button>
                        <dialog
                          id="my_modal_5"
                          className="modal modal-bottom px-3 sm:modal-middle"
                        >
                          <div className="modal-box mx-auto">
                            <form onSubmit={addReview}>
                              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-xl shadow-sm bg-[#5D0E41]">
                                <div className="flex-row items-center col-span-full py-10">
                                  <div className="col-span-full">
                                    <label
                                      htmlFor="bio"
                                      className=" text-white text-lg"
                                    >
                                      Review
                                    </label>
                                    <textarea
                                      id="review"
                                      name="review"
                                      placeholder="Write your Review"
                                      required={true}
                                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
                                    ></textarea>
                                  </div>
                                  <div className="col-span-full">
                                    <label
                                      htmlFor="bio"
                                      className="text-lg text-white"
                                    >
                                      Ratings
                                    </label>
                                    <input
                                      type="number"
                                      name="reviewRatings"
                                      min={0}
                                      max={5}
                                      step={0.5}
                                      id="reviewRatings"
                                      required={true}
                                      className="input input-bordered input-info w-full text-black"
                                    />
                                  </div>

                                  <div className="col-span-full mt-3">
                                    <div className="flex items-center space-x-2">
                                      <button
                                        type="submit"
                                        className="px-4 py-2 mx-auto bg-[#49108B] text-white border rounded-md dark:border-gray-800"
                                      >
                                        Enter
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </form>

                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-circle">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {/* PURCHASE BUTTONS */}
                    <div className="flex-row mr-3 flex-1 md:flex items-center lg:gap-x-3">
                      <Link
                        to={`/purchase/${_id}`}
                        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Purchase
                        </span>
                        <span className="relative invisible">Purchase</span>
                      </Link>
                    </div>
                  </div>
                  {/* REVIEWS */}
                  <div className="grid grid-cols-1 w-full md:w-4/6 gap-y-8 md:mr-28  px-3 my-10 ">
                    <h3 className="text-lg font-semibold text-nowrap">
                      Food Reviews
                    </h3>
                    {userReviews.map((eachReview) => (
                      <LoadFoodReviewCard
                        key={eachReview._id}
                        eachReview={eachReview}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                  <h3 className="text-blue-500 capitalize">Category</h3>
                  <p className="text-xl font-medium">{FoodCategory}</p>
                </div>

                <hr className="my-6 border-gray-200 " />
                <div>
                  <span>Quantity {Quantity}</span>
                </div>
                <hr />
                <div className="">
                  <h3 className="text-blue-500 capitalize ml-2">Price</h3>
                  <span className="badge badge-info text-white font-semibold">
                    {Price}
                  </span>
                  <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                    Order Now!!
                  </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                  <h3 className="text-blue-500 capitalize">Food Origin</h3>
                  <h3 className="text-xl">{FoodOrigin}</h3>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div>
                  <h3 className="text-blue-500 capitalize">Description</h3>

                  <p className="text-xl font-medium">{Description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleFoodPage;
