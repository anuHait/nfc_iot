"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
function Page() {
  //const cardId = localStorage.getItem("cardId");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get(
          "https://aptcbackendw.vercel.app/get_transaction_history/1a26687e"
        );
        setTableData(response.data.transactionHistory);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    }
    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-row gap-6">
      <Sidebar />
      <div className="p-5 flex flex-col gap-6 items-start justify-start w-full mt-16">
        <h1 className="text-3xl font-bold">Your card transactions</h1>
        <div>
          <table class="table-fixed w-full  ">
            <thead>
              <tr>
                <th className="py-4 text-lg font-semibold  border-2 border-[#40C0E7]">
                  Date & Time
                </th>
                <th className="py-4 text-lg font-semibold  border-2 border-[#40C0E7]">
                  From
                </th>
                <th className="py-4 text-lg font-semibold  border-2 border-[#40C0E7]">
                  To
                </th>
                <th className="py-4 text-lg font-semibold  border-2 border-[#40C0E7]">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr>
                  <td className="py-2 bg-gray-100 border-2 border-[#4d84d6] px-3">
                    {item.date}
                  </td>
                  <td className="py-2 bg-gray-100 border-2 border-[#4d84d6] px-3">
                    {item.from}
                  </td>
                  <td className="py-2 bg-gray-100 border-2 border-[#4d84d6] px-3">
                    {item.to}
                  </td>
                  <td className="py-2 bg-gray-100 border-2 border-[#4d84d6] px-3">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
