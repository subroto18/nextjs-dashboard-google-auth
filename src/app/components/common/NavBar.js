"use client";
import { AiOutlinePieChart } from "react-icons/Ai";
import { LuTags, LuCalendarClock, LuSettings } from "react-icons/Lu";
import { BiUserCircle } from "react-icons/Bi";

export default function NavBar() {
  return (
    <div className="text-white h-screen">
      <h1 className="text-2xl pt-8 pl-8 font-bold">Board.</h1>
      <ul className="pt-10 pl-8">
        <li className="mb-8 flex">
          <AiOutlinePieChart className="mt-1 mr-2" /> Dashboard
        </li>
        <li className="mb-8 flex">
          <LuTags className="mt-1 mr-2" />
          Transactions
        </li>

        <li className="mb-8 flex">
          <LuCalendarClock className="mt-1 mr-2" />
          Schedules
        </li>
        <li className="mb-8 flex">
          <BiUserCircle className="mt-1 mr-2" />
          Users
        </li>
        <li className="mb-8 flex">
          <LuSettings className="mt-1 mr-2" />
          Settings
        </li>
      </ul>
      <footer className="absolute bottom-0">
        <ul className="pt-10 pl-8">
          <li className="text-sm mb-3">Help</li>
          <li className="text-sm mb-3">Contact Us</li>
        </ul>
      </footer>
    </div>
  );
}