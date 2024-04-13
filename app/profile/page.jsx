import React from "react";
import Sidebar from "@/components/Sidebar";
import { MdPerson } from "react-icons/md";
function Page() {
  return (
    <div className="flex flex-row gap-6">
      <Sidebar />
      {/*Profile page content */}
      <div className="p-5 flex flex-col gap-8 items-start justify-start w-full mt-16">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <div className="flex flex-row gap-56 w-full justify-center items-center p-6">
          <div className="flex justify-center items-center border-2 border-blue-300 rounded-xl p-4 md:w-1/4  w-1/2 shadow-xl h-full">
            <img src="/assets/profile.jpg" alt="" className="w-60 h-60" />
          </div>
          <div className="flex flex-col justify-start items-start w-1/2 gap-6 border-2 border-blue-300 shadow-xl rounded-xl p-10 h-full">
            <h1 className="text-lg font-bold">Username</h1>
            <input
              type="text"
              name=""
              id=""
              className="border-2 border-red-600 rounded-lg p-1 w-3/4"
            />
            <h1 className="text-lg font-bold">Card no</h1>
            <input
              type="text"
              name=""
              id=""
              className="border-2 border-red-600 rounded-lg p-1 w-3/4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
