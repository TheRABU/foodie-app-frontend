const Team = () => {
  return (
    <section className="py-6 bg-white text-gray-100 dark:text-gray-800">
      <div className="container p-4 mx-auto space-y-16 sm:p-10">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold leading-none sm:text-5xl">
            Meet our team
          </h3>
          <p className="text-xl text-gray-400 dark:text-gray-600">
            Our hardworking team working 24/7 to provide every possible help to
            our clients
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex space-x-6">
            <img
              alt=""
              className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm bg-gray-500 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex space-x-6">
            <img
              alt=""
              className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm bg-gray-500 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex space-x-6">
            <img
              alt=""
              className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm bg-gray-500 dark:bg-gray-500"
              src="https://plus.unsplash.com/premium_photo-1661400100934-1ba03c96cc14?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex space-x-6">
            <img
              alt=""
              className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm bg-gray-500 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
