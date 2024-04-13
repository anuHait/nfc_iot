import React from "react";

function Services() {
  return (
    <div className="p-5 flex flex-col gap-6 items-start justify-start w-full mt-16">
      <h1 className="text-3xl font-bold">Our card services</h1>
      {/*boxes for services */}
      <div className="flex flex-wrap gap-10 w-full">
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl p-2 border-2 border-blue-300">
          <img
            src="/assets/bus.jpg"
            alt="image"
            className=" w-40 lg:w-44"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl p-2 border-2 border-blue-300">
          <img
            src="/assets/auto.jpg"
            alt="image"
            className=" w-40 lg:w-44"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl p-2 border-2 border-blue-300">
          <img
            src="/assets/metro.jpg"
            alt="image"
            className=" w-40 lg:w-44"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl p-2 border-2 border-blue-300">
          <img
            src="/assets/train.jpg"
            alt="image"
            className=" w-40 lg:w-44"
          />
        </div>
      </div>
      <div className="flex text-left mt-5 leading-6  text-gray-600 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam
          unde asperiores enim, animi vero, sed eum praesentium quibusdam nobis
          sequi. Eum omnis at quo ratione provident, explicabo ex. Molestias
          quos, odit vero quae accusantium inventore, voluptate quam,
          perspiciatis ex tenetur asperiores minima debitis blanditiis ipsa!
          
        </p>
      </div>
    </div>
  );
}

export default Services;
