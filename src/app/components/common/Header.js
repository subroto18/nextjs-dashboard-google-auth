"use client";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const { data: session } = useSession();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="flex">
        <div className="relative">
          <input
            className="shadow  border rounded-lg w-full py-2 pl-2 pr-8  text-gray-700 leading-tight focus:outline-none focus:bg-slate-200"
            type="text"
            placeholder="Search..."
          />
          <AiOutlineSearch className="absolute right-3 top-3 cursor-pointer" />
        </div>
        <AiOutlineBell className="mt-2 text-2xl mx-3" />

        {session ? (
          <div className="relative">
            <Image
              width="20"
              height="20"
              alt={session.user.name}
              onClick={() => setIsLogoutVisible(!isLogoutVisible)}
              onBlur={() => setIsLogoutVisible(false)}
              src={session.user.image}
              className="h-8 w-8 rounded-full mt-2 cursor-pointer"
            />
            {isLogoutVisible && (
              <div className=" bg-white px-4 py-3 shadow-lg rounded-lg mt-2 absolute right-[9px] cursor-pointer">
                <ul>
                  <li onClick={() => signOut("google")} className="font-bold">
                    LogOut
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <BiUserCircle className="mt-2 text-2xl " />
        )}
      </div>
    </div>
  );
}
