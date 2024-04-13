import React from "react";

function Services() {
  return (
    <div className="p-5 flex flex-col gap-6 items-start justify-start w-full mt-16">
      <h1 className="text-3xl font-bold">Our services</h1>
      {/*boxes for services */}
      <div className="flex flex-wrap gap-10 w-full">
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl border-2 border-blue-300">
          <img
            src="/assets/bus.jpg"
            alt=""
            className="rounded-xl md:h-52 md:w-60"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl border-2 border-blue-300">
          <img
            src="/assets/auto.jpg"
            alt=""
            className="rounded-xl md:h-52 md:w-60"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl border-2 border-blue-300">
          <img
            src="/assets/metro.jpg"
            alt=""
            className="rounded-xl md:h-52 md:w-60"
          />
        </div>
        <div className="flex justify-center items-center shadow-xl w-1/5 rounded-2xl border-2 border-blue-300">
          <img
            src="/assets/train.jpg"
            alt=""
            className="rounded-xl md:h-40 md:w-60"
          />
        </div>
      </div>
      <div className="flex text-left mt-32">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam
          unde asperiores enim, animi vero, sed eum praesentium quibusdam nobis
          sequi. Eum omnis at quo ratione provident, explicabo ex. Molestias
          quos, odit vero quae accusantium inventore, voluptate quam,
          perspiciatis ex tenetur asperiores minima debitis blanditiis ipsa!
          Nisi itaque similique labore! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ullam, modi deleniti, eveniet numquam corporis
          minima vitae totam voluptas neque excepturi nulla deserunt cumque.
          Architecto ipsa dolorum error debitis, voluptate quas.
        </p>
      </div>
    </div>
  );
}

export default Services;
