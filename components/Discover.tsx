import { BsSearch, BsCurrencyDollar,BsBarChart  } from "react-icons/bs";

import Link from "next/link";
import React from "react"
export default function Discover () {
    return(
            <div className="flex flex-col md:flex-row bg-blue-100 mt-10 p-8">


            <div className="">

            <h2 className=" p-1 rounded-2xl w-23 text-sm text-blue-800 font-bold bg-blue-200 mt-12 ml-3">Find Faster </h2>
            <h1 className="text-5xl font-bold p-2">Discover Your <span className="text-blue-800"> Dream</span></h1>
            <h1 className="text-5xl font-bold p-2"><span className="text-blue-800">Job</span>Today</h1>
            <p className="
  text-gray-700
  text-base sm:text-lg
  max-w-xl
  leading-relaxed
  mt-4
  ml-1
">
  Join millions of professionals and explore thousands of career opportunities.
  Get salary insights, and company reviews — all in one place.
</p>

 <div className="">
                <div className="flex gap-3 mb-4 ml-3">
                    <div className="bg-purple-100 p-2 border-red-50 rounded-b-md h-8">

                <BsSearch className="text-red-400 text-lg" />
                    </div>
                    <div className="">

                <h1>Smart Job Matching</h1>
                <p>AI-powered recommendations based on your skills and preferences</p>
                    </div>
                </div>
                <div className="flex gap-3 mb-4 ml-3">
                    <div className="bg-orange-100 p-2 border-red-50 rounded-b-md h-8">

                <BsCurrencyDollar className="text-purple-800 text-lg" />
                    </div>
                    <div className="">

                <h1>Smart Job Matching</h1>
                <p>AI-powered recommendations based on your skills and preferences</p>
                    </div>
                </div>
                <div className="flex gap-3 mb-4 ml-3
                ">
                    <div className="bg-purple-100 p-2 border-red-50 rounded-b-md h-8">

                <BsBarChart className="text-blue-500 text-lg" />
                    </div>
                    <div className="">

                <h1>Smart Job Matching</h1>
                <p>AI-powered recommendations based on your skills and preferences</p>
                    </div>
                </div>

            </div>
           <div className="flex gap-3 mt-8 ml-3">
  {/* Primary Button */}
  <Link href="/explore"
    className="
      flex items-center gap-2
      bg-blue-600
      text-white
      px-6 py-3
      rounded-lg
      font-medium
      hover:bg-blue-700
      transition
    "
  >
    Browse Job
  </Link>

  {/* Secondary Button */}
  <Link href="/get"
    className="
      flex items-center gap-2
      bg-white
      text-blue-600
      border border-blue-600
      px-6 py-3
      rounded-lg
      font-medium
      hover:bg-blue-50
      transition
    "
  >
    Browse Job
    <span className="text-lg">→</span>
  </Link>
</div>

            </div>
    <div className="relative w-full md:w-[40%] max-w-3xl mx-auto">
  {/* Image */}
  <img
    src="/smile.jpg"
    alt="smile"
    className="w-full h-105 object-cover rounded-xl mt-22"
  />

  {/* Overlay Card */}
  <div
    className="
      absolute
      bottom-30
      left-6
      bg-white
      p-4
      rounded-xl
      shadow-lg
      w-64
    "
  >
    {/* Top Row */}
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
        <svg
          className="text-blue-700 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 text-sm">
          UX Designer
        </h4>
        <p className="text-xs text-gray-500">
          Washington · Microsoft
        </p>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="flex justify-between items-center">
      <span className="text-green-600 font-semibold text-sm">
        $95k - $120k
      </span>

      <button
        className="
          text-xs
          bg-blue-50
          text-blue-700
          px-3
          py-1
          rounded-full
          hover:bg-blue-100
          transition
        "
      >
        Apply now
      </button>
    </div>
  </div>
</div>



        </div>
    )
    
}