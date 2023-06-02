"use client";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Chart } from "react-google-charts";

export const data = [
  ["Week", "Sales", "Expenses"],
  ["Week 1", 1000, 120],
  ["Week 1", 1000, 120],
  ["Week 2", 1170, 460],
  ["Week 3", 660, 1120],
  ["Week 4", 1030, 540],
];

const WaveChart = () => {
  return (
    <div className="bg-white mt-5 rounded-lg p-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-1xl font-bold">Activities</h1>
          <p className="flex text-slate-400 text-sm">
            May - June 2021 <AiOutlineDown className="mt-1" />
          </p>
        </div>
        <div className="flex">
          <p className="mr-2">
            <span className="h-[10px] w-[10px] p-1  bg-pink-400 rounded-full inline-block mr-2" />
            <span className="text-sm">Guest</span>
          </p>
          <p>
            <span className="h-[10px] w-[10px] p-1  bg-green-400 rounded-full inline-block mr-2"></span>
            <span className="text-sm">User</span>
          </p>
        </div>
      </div>

      <Chart chartType="LineChart" width="100%" height="200px" data={data} />
    </div>
  );
};
export default WaveChart;
