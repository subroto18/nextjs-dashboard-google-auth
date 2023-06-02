"use client";
import { GiHamburgerMenu } from "react-icons/Gi";
import { FaTimes } from "react-icons/Fa";
import NavBar from "./NavBar";
import { useState } from "react";

export default function SideBar() {
  const [isNav, setIsNav] = useState(false);
  return (
    <nav className="relative ">
      <div className="md:hidden">
        <div className="flex justify-between">
          <GiHamburgerMenu
            className="cursor-pointer text-2xl mt-1"
            onClick={() => setIsNav(!isNav)}
          />
        </div>

        <div
          className={`${
            isNav ? "left-0" : "left-[-100rem]"
          } fixed w-full  ease-out duration-300 top-0 z-40 `}
        >
          <NavBar />

          <FaTimes
            onClick={() => setIsNav(!isNav)}
            className="absolute top-5 text-white right-[10px] z-50 cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-black rounded-lg hidden md:block">
        <NavBar />
      </div>
    </nav>
  );
}
