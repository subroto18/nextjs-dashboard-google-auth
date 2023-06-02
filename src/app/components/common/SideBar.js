"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import NavBar from "./NavBar";
import { useState } from "react";

export default function SideBar() {
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      <nav className="md:hidden relative">
        <div className="flex justify-between">
          <GiHamburgerMenu
            className="cursor-pointer text-2xl mt-1"
            onClick={() => setIsNav(!isNav)}
          />
        </div>

        <div
          className={`${
            isNav ? "left-0" : "left-[-100rem]"
          } fixed w-full  ease-out duration-300 top-0 z-40  bg-black`}
        >
          <NavBar />

          <FaTimes
            onClick={() => setIsNav(!isNav)}
            className="absolute top-10 text-white right-[20px] z-50 cursor-pointer"
          />
        </div>
      </nav>

      <nav className="relative bg-black rounded-lg hidden md:block">
        <div className="h-screen">
          <NavBar />
        </div>
      </nav>
    </>
  );
}
