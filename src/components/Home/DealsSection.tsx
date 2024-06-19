import React from "react";
import { Link } from "react-router-dom";

const DealsSection : React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 z-20 px-4 gap-x-4 pb-6">
      <div className="w-full col-span-1 shadow-xl flex flex-col gap-y-2">
        <div className="h-full w-full bg-white shadow-xl flex flex-col sm:flex-row  rounded-xl overflow-hidden z-20 cursor-pointer">
          <div className="col-span-1 w-full text-center flex justify-center items-center ">
            <div>
              <h1 className="font-bold text-5xl uppercase text-amazon_blue-light">
                Get Up to 70% Off
              </h1>
              <p className="text-center pt-2">on all products in the store</p>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="/assets/home1.jpg"
              alt=""
              className="w-full object-contain relative"
            />
          </div>
        </div>

        <div className="h-full w-full bg-black-500 shadow-xl flex  overflow-hidden rounded-xl cursor-pointer">
          <div className="flex justify-center items-center py-10 w-full">
            <div className="text-white">
              <h1 className="font-bold text-4xl">GET 30% Off</h1>
              <p className="text-center py-2">USE PROMO CODE</p>
              <div className="bg-gray-800 px-6 py-2 rounded-md text-center">
                JUNE3000
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ri */}
      <div className="w-full col-span-1 bg-white z-20 p-4 h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 relative h-full">
          <Link
            to={{
              pathname: "/products",
              search: "?q=men's clothing",
            }}
          >
            <div className="w-full h-full bg-gray-200 rounded-lg p-4 cursor-pointer">
              <h1 className="font-bold text-xl">
                Cotton T-shirts Summer Collection
              </h1>
              <div>
                <span>
                  Starts at
                  <span className="line-through text-base pl-2">₹1200</span>
                  <span className="font-bold text-lg pl-2"> ₹800</span>
                </span>
              </div>

              <div className="relative w-full ">
                <img
                  src="/assets/event2.webp"
                  alt=""
                  className="w-full h-full aspect-auto"
                />
              </div>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/products",
              search: "?q=men's clothing",
            }}
          >
            <div className="w-full h-full bg-yellow-100 rounded-lg p-4 cursor-pointer">
              <h1 className="font-bold text-xl">Men's Collection</h1>
              <h1 className="font-bold text-xl">buy now</h1>
              <div>
                <span>
                  Starts at
                  <span className="font-bold text-lg pl-2">₹700</span>
                </span>
              </div>

              <div className="relative w-full ">
                <img
                  src="/assets/event3.webp"
                  alt=""
                  className="w-full h-full aspect-auto"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
