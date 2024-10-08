import React from "react";

const Ourteam = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="font-semibold text-3xl text-center px-5 md:px-8 lg:px-12 xl:px-16 mt-12">
              Our Team
            </h1>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-10">
          <div
            className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            style={{ width: "18rem" }}
          >
            <img
              src="./Mrityunjay.jpeg"
              alt="Mrutyunjaya Sahu"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">Mrutyunjaya Sahu</h2>
              <p className="text-gray-700">CEO</p>
              <p className="text-gray-600 mt-2">
                Expertise in Prototype to product development. 5 years
                experience of Team building, business development, New market
                creation.
              </p>
            </div>
          </div>

          {/* <div
            className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            style={{ width: "18rem" }}
          >
            <img
              src="./hemant.jpeg"
              alt="hemant.jpeg"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">Hemant Chaudhary</h2>
              <p className="text-gray-700">Director </p>
              <p className="text-gray-600 mt-2">
                Hemant, a 31-year leader in the circular economy, has worked
                with the UN and World Bank and founded Circular Economy Alliance
                Australia and Circular360.
              </p>
            </div>
          </div> */}


          <div
            className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            style={{ width: "18rem" }}
          >
            <img
              src="./sunit.jpg"
              alt="Sunit Rout"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">Sunit Rout</h2>
              <p className="text-gray-700">Director </p>
              <p className="text-gray-600 mt-2">
              Sunit is a skilled PEGA engineer known for delivering innovative solutions and demonstrating strong problem-solving abilities.
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Ourteam;
