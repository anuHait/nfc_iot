"use client";
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import axios from "axios";
function Page() {
  // visa card 4000003560000008
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const cardId = localStorage.getItem("cardId");
  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      try {
        const response = await axios.get(`https://aptcbackendw.vercel.app/get_balance/${cardId}`);
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);
  
  
  return (
    <div className="flex flex-row gap-6">
      <Sidebar />
      <div className="flex flex-col gap-4 mt-16 p-2 w-full items-start justify-start">
        <h1 className="text-3xl font-bold ml-5">Your wallet</h1>

        <div className="flex flex-col lg:flex-row gap-10 items-center md:items-start justify-start w-full">
        
          <div className="flex flex-row gap-4 border border-[#EFA6AB] m-8 p-10 items-center w-[75%] lg:w-[38%] rounded-[13px] shadow-md">
            <Image src="/assets/coins.png" width={65} height={65} alt="coins" />
            {
              loading ? (
                <div>
                <h1>Loading...</h1>
                </div>
              ):(<div className="flex flex-col-reverse gap-2 items-start justify-start">
              <h1 className="text-2xl font-bold">{balance} INR</h1>
              <h2 className="text-md font-semibold text-gray-500">
                Current Balance
              </h2>
            </div>)
            }
            
          </div>
          <div className="flex flex-col gap-6 border border-[#EFA6AB] m-8 p-10 items-center justify-center rounded-[13px] w-[75%] lg:w-[52%] shadow-md">
          <Link href="https://buy.stripe.com/test_7sI4hU0MG2Mf9fG28b">
            <button className="text-white font-semibold bg-[#40C0E7] p-2 rounded-[10px] w-40">
              Recharge Now
            </button>
          </Link>
          <p className=" font-semibold text-center">OR</p>
          <Image src="/assets/aptQr.png" width={200} height={250} alt="qr"/>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default Page;


