import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
const SingleFoodPage = () => {
  const foodData = useLoaderData();
  const [singleFood, setSingleFood] = useState(foodData);
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
  return (
    <>
      <div>
        <section className="bg-white ">
          <h3 className="text-3xl pt-5 font-serif text-center">{FoodName}</h3>
          <div className="container px-6 py-10 mx-auto">
            <div className="lg:flex lg:-mx-6">
              <div className="lg:w-3/4 lg:px-6">
                <img
                  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                  src={FoodImage}
                  alt=""
                />

                <div>
                  <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                    {FoodName}
                  </h1>

                  <div className="flex items-center mt-6">
                    <div className="hidden md:flex">
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      />
                    </div>

                    <div className="mx-0 md:mx-4 tooltip" data-tip="Review">
                      <p className="text-sm text-gray-500 ">Made By</p>
                      <h1 className="text-sm text-gray-700 ">{MadeBy}</h1>
                    </div>
                    <div className="mx-0 md:mx-5">
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
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <form>
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full">
                                  <label htmlFor="bio" className="text-sm">
                                    Review
                                  </label>
                                  <textarea
                                    id="bio"
                                    placeholder="Write your Review"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                                  ></textarea>
                                </div>
                                <div className="col-span-full">
                                  <div className="flex items-center space-x-2">
                                    <button
                                      type="button"
                                      className="px-4 py-2 border rounded-md dark:border-gray-800"
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
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span>Quantity</span>
                      <button className="btn btn-square">{Quantity}</button>
                    </div>
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
