const OfferServices = () => {
  return (
    <>
      <section className="p-4 lg:p-8 bg-white">
        <h1 className="text-center text-2xl font-semibold mb-5">
          Our Services
        </h1>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-xl lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col rounded-xl justify-center flex-1 p-6 bg-white dark:bg-gray-50">
              <h3 className="text-3xl font-bold">
                Minimal delivery time using strong algorithms
              </h3>
              <p className="my-6 text-gray-400 dark:text-gray-600">
                Get our recommended restaurants which can deliver foods faster
                to your location
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden shadow-xl lg:flex-row-reverse">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">
                Sorting Top restaurants based on user feedbacks
              </h3>
              <p className="my-6 text-gray-400 dark:text-gray-600">
                Get our recommended restaurants which can deliver foods faster
                to your location
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden shadow-xl lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">
                All payments methods available
              </h3>
              <p className="my-6 text-gray-400 dark:text-gray-600">
                Get our recommended restaurants which can deliver foods faster
                to your location
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferServices;
