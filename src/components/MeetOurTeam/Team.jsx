const Team = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our <span className="text-blue-500">Executive Team</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Meet the talented people who created our platform
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 ">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">
                  arthur melo
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  design director
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize  group-hover:text-gray-300">
              5+Yrs of experience in graphic and media designing and I love
              working here at Foodie Bite.
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl  group-hover:text-white">
                  Amelia. Anderson
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Lead Developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize  group-hover:text-gray-300">
              2+Years of experience as a Team lead.
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl  group-hover:text-white">
                  Olivia Wathan
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Lead designer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize  group-hover:text-gray-300">
              Designing gives you wiing$!!
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl  group-hover:text-white">
                  John Doe
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Full stack developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize  group-hover:text-gray-300">
              Building real world application to solve problems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
