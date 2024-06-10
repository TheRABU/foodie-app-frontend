import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthenticateProvider";

const PurchaseNowPage = () => {
  const foodDetail = useLoaderData();
  const { FoodImage, FoodName, Quantity, Price } = foodDetail;
  const { user } = useContext(AuthContext);

  // handle order function

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const date = form.date.value;
    const area = form.area.value;
    const state = form.state.value;
    const city = form.city.value;
    const postCode = form.postCode.value;

    const orderValue = {
      name,
      email,
      date,
      area,
      state,
      city,
      postCode,
      FoodName,
      Price,
    };
    console.log(orderValue);
  };

  return (
    <>
      <div className="flex-row lg:flex items-center justify-center py-12 px-6 lg:px-16">
        <div>
          {/* <div className="mb-5 px-3 md:px-20">
            <div className="card bg-base-100 shadow-2xl">
              <figure className="px-10 pt-10">
                <img src={FoodImage} alt="Food Image" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{FoodName}</h2>
                <p>BDT {Price}</p>
                <p>Available {Quantity}</p>
                <Link to="/all-foods">
                  <button className="btn mx-auto px-10 bg-violet-50">
                    Browse more
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="max-w-md mx-auto rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src={FoodImage}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {FoodName}
                </h2>
                <p className="text-gray-100">{Price}</p>
                <p className="text-gray-100">Left {Quantity}</p>
              </div>

              <Link to="/all-foods">
                <button className="btn w-full mx-auto px-10 bg-violet-50">
                  Browse more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleOrder}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                disabled={true}
                defaultValue={user.displayName}
                placeholder="Enter your Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                defaultValue={user.email}
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="postCode"
                      id="post-code"
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PurchaseNowPage;
