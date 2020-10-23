import React from "react";
import Footer from "../components/Footer";

const Shopping = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-screen h-screen flex justify-start bg-blue-300">
          <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2 bg-red-300">
            <div className="card flex flex-col justify-start p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Puma Shoes
                </p>
                <p className="uppercase text-sm text-gray-400">
                  The best shoes in the marketplace
                </p>
              </div>
              <div className="prod-img">
                <img
                  src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                  className="w-full object-cover object-center"
                  alt="img"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p className="font-bold text-xl">65 $</p>
                <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
