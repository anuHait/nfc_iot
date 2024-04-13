import React from "react";
import { GoHome } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import Link from 'next/link'
function Sidebar() {
  return (
    <div className="w-20 h-screen p-2 flex items-center justify-center bg-[#97CAE0]">
      <div className="flex flex-col gap-7 items-center justify-center">
      <Link href="/dashboard">
        <GoHome  className="text-2xl lg:text-3xl text-white"/></Link>
        <Link href="/profile">
        <MdPerson className="text-2xl lg:text-3xl text-white"/></Link>
        <Link href="/recharge">
        <IoWalletSharp className="text-2xl lg:text-3xl text-white"/></Link>
        <Link href="/transactions">
        <MdWorkHistory className="text-2xl lg:text-3xl text-white"/></Link>
      </div>
    </div>
  );
}

export default Sidebar;
