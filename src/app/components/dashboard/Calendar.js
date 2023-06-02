import React from "react";
import { AiOutlineRight } from "react-icons/Ai";

const Calendar = () => {
  return (
    <div className="bg-white rounded-lg mt-4 p-5">
      <div className="flex justify-between">
        <h1 className="text-1xl font-bold">Today's schedule</h1>
        <p className="flex text-slate-400 text-sm">
          See All <AiOutlineRight className="mt-1" />
        </p>
      </div>

      <div className="mt-5">
        <div class="border-l-4 border-green-400 h-20 float-left mr-2" />
        <h1 className="text-1xl font-bold text-slate-600">
          Meeting with suppliers from Kuta Bali
        </h1>
        <p className="text-sm text-slate-400">14.00 - 15.00</p>
        <p className="text-sm text-slate-400">at Sunset Road, Kuta, Bali</p>
      </div>

      <div className="mt-10">
        <div class="border-l-4 border-blue-400 h-20 float-left mr-2" />
        <h1 className="text-1xl font-bold text-slate-600">
          Meeting with suppliers from Kuta Bali
        </h1>
        <p className="text-sm text-slate-400">14.00 - 15.00</p>
        <p className="text-sm text-slate-400">at Sunset Road, Kuta, Bali</p>
      </div>
    </div>
  );
};

export default Calendar;
