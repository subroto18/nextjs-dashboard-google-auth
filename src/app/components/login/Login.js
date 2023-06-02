"use client";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";
import { signIn } from "next-auth/react";

export const login = () => {
  return (
    <div className="md:grid  md:grid-cols-3 ">
      <div class="hidden bg-black h-screen md:flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold">Board.</h1>
      </div>
      <div class="md:col-span-2 h-screen bg-slate-100 flex justify-center items-center container">
        <div className="p-10">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-sm my-2 mb-5">Sign in your account</p>

          <div className="md:flex mb-2">
            <button
              onClick={() => signIn("google")}
              className="w-full flex bg-white px-4 py-2 rounded-lg text-sm text-slate-400 mr-4 mb-3"
            >
              <FcGoogle className="mt-1 mr-2" /> Sign in with Google
            </button>

            <button className="w-full flex bg-white px-4 py-2 rounded-lg text-sm text-slate-400 mb-3">
              <AiFillApple className="mt-1 mr-2" /> Sign in with Apple
            </button>
          </div>

          <div className="rounded-full">
            <form className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-lg">
              <div className="mb-4">
                <label
                  class="block text-gray-700 text-sm  mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  id="email"
                  className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-slate-200"
                  type="text"
                  placeholder="Enter your email..."
                />
              </div>
              <div class="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-slate-200"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <Link
                  className="inline-block align-baseline  text-sm text-blue-500 hover:text-blue-800"
                  href="/"
                >
                  Forgot Password?
                </Link>
              </div>
              <div class="flex items-center justify-between">
                <button
                  className="w-full bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              Dont have an account?
              <Link
                className="inline-block align-baseline  text-sm text-blue-500 hover:text-blue-800 ml-2"
                href="/"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
