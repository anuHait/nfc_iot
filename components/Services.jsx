import React from "react";
import { SiContactlesspayment } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";

function Services() {
  return (
    <div className="p-5 flex flex-col gap-6 items-start justify-start w-full mt-16">
      <h1 className="text-3xl font-bold">Our card services</h1>
      <div className="flex font-semibold text-lg mt-5 leading-6  text-gray-600 ">
        <p>Streamline Your Travel Experience with Our Innovative Card System</p>
      </div>
      {/*boxes for services */}
      <div className="flex flex-wrap gap-10 w-full justify-center">
        <div className="flex flex-col justify-center items-center shadow-xl w-1/5 rounded-2xl px-6 py-8 gap-4 border-2 border-cyan-400">
          {/* <img src="/assets/bus.jpg" alt="image" className=" w-40 lg:w-44" /> */}
          <BsCreditCard className="text-7xl font-bold text-cyan-600" />
          <h1 className="text-lg font-semibold text-cyan-800 text-center">
            Seamless Travel Payments
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl w-1/5 rounded-2xl p-4 py-6 gap-4 border-2 border-cyan-400">
          {/* <img src="/assets/bus.jpg" alt="image" className=" w-40 lg:w-44" /> */}
          <AiOutlineGlobal className="text-7xl font-bold text-cyan-600" />
          <h1 className="text-lg font-semibold text-cyan-800">
            Universal Acceptance
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl w-1/5 rounded-2xl p-4 py-6 gap-4 border-2 border-cyan-400">
          {/* <img src="/assets/bus.jpg" alt="image" className=" w-40 lg:w-44" /> */}
          <MdLockOutline className="text-7xl font-bold text-cyan-600" />
          <h1 className="text-lg font-semibold text-cyan-800">
            Enhanced Security
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl w-1/5 rounded-2xl p-4 py-6 gap-4 border-2 border-cyan-400">
          {/* <img src="/assets/bus.jpg" alt="image" className=" w-40 lg:w-44" /> */}
          <MdOutlineAccountBalanceWallet className="text-7xl font-bold text-cyan-600" />
          <h1 className="text-lg text-center font-semibold text-cyan-800">
            Convinient Account Management
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
