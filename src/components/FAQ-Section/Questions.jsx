const Questions = () => {
  const cityList = [
    {
      city: "Dhaka",
      description:
        "Dhaka is the capital city of Bangladesh, known for its vibrant culture and bustling streets.",
    },
    {
      city: "Chittagong",
      description:
        "Chittagong is a major coastal city and financial center in southeastern Bangladesh.",
    },
    {
      city: "Khulna",
      description:
        "Khulna is a port city in southwestern Bangladesh, known for the Sundarbans mangrove forest.",
    },
    {
      city: "Sylhet",
      description:
        "Sylhet is known for its tea gardens, natural beauty, and religious shrines.",
    },
    {
      city: "Rajshahi",
      description:
        "Rajshahi is famous for its silk, mangoes, and educational institutions.",
    },
    {
      city: "Barisal",
      description:
        "Barisal is a city in southern Bangladesh, known for its rivers and floating markets.",
    },
    {
      city: "Rangpur",
      description:
        "Rangpur is known for its agriculture and trade, and it's an important cultural center.",
    },
    {
      city: "Comilla",
      description:
        "Comilla is a city in eastern Bangladesh, rich in historical significance and archaeological sites.",
    },
    {
      city: "Narayanganj",
      description:
        "Narayanganj is an industrial city near Dhaka, known for its textile and jute mills.",
    },
    {
      city: "Gazipur",
      description:
        "Gazipur is an industrial city, home to many garment factories and businesses.",
    },
  ];
  return (
    <section className="bg-transparent text-gray-100 dark:text-gray-800 px-20">
      <div className="container  flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-4xl  font-semibold sm:text-4xl">
          Explore options near me
        </h2>

        <div className="space-y-8">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
              Popular Cuisines near me?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">
              <ul>
                <li>Rater Dhaka</li>
                <li>Pasta State</li>
                <li>Gorom Bhaat</li>
              </ul>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 text-xl py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
              Popular restaurants type near me?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">
              <ul>
                <li>Mexican Chilli Chicken</li>
                <li>Uradhura CXhef</li>
                <li>Kacchi vabi</li>
              </ul>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 text-xl py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
              What cities we deliver to?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">
              <ul>
                {cityList.map((city, idx) => (
                  <li key={idx}>{city.city}</li>
                ))}
              </ul>
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Questions;
