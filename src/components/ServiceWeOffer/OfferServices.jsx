import Slider from "./SliderComponent/Slider";

const OfferServices = () => {
  const deliveryImages = [
    {
      src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1615859721906-472e62eabbd3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1612006567758-1846b36dd130?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const paymentImages = [
    {
      src: "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/07/31/bkash.jpg",
    },
    {
      src: "https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png",
    },
    {
      src: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2024/03/12/nagad_new_logo_1_0.jpg",
    },
  ];
  const restaurentImages = [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <section className="p-4 lg:p-8 bg-white">
        <h1 className="text-center text-2xl font-semibold mb-5">
          Our Services
        </h1>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-xl lg:flex-row">
            <div className="w-3/6 my-6">
              <Slider images={deliveryImages} />
            </div>

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
            <div className="w-3/6 my-6">
              <Slider images={restaurentImages} />
            </div>

            <div className="flex flex-col justify-center flex-1 p-6 bg-white dark:bg-gray-50">
              <h3 className="text-3xl font-bold">
                Top restaurants based on user feedbacks
              </h3>
              <p className="my-6 text-gray-400 dark:text-gray-600">
                Get our recommended restaurants which can deliver foods faster
                to your location
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl overflow-hidden shadow-xl lg:flex-row">
            <div className="w-3/6 my-6">
              <Slider images={paymentImages} />
            </div>
            <div className="flex flex-col justify-center flex-1 p-6 bg-white dark:bg-gray-50">
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
