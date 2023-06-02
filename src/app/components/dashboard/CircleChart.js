"use client";
import React from "react";
import { AiOutlineDown } from "react-icons/Ai";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Basic", 55],
  ["Custom Short Pants", 31],
  ["Supper Hoodies", 14],
];

const CircleChart = () => {
  return (
    <div className="bg-white rounded-lg mt-4 p-5">
      <h1 className="text-1xl font-bold">Top Products</h1>
      <p className="flex text-slate-400 text-sm">
        May - June 2021 <AiOutlineDown className="mt-1" />
      </p>

      <Chart chartType="PieChart" data={data} width={"100%"} height={"250px"} />
    </div>
  );
};

export default CircleChart;
