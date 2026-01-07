"use client";

import Link from "next/link";
import { BsBriefcase } from "react-icons/bs";

export default function PortalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 from-blue-50 to-blue-100">

      {/* Card */}
      <div className="
        w-full 
        sm:w-[80%] 
        md:w-[50%] 
        lg:w-[40%] 
        xl:w-[30%]
        bg-white 
        rounded-2xl 
        shadow-xl 
        p-6 sm:p-8 
        relative
      ">

        {/* Close Button */}
        <Link href="/">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 transition">
            ✕
          </button>
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <BsBriefcase className="text-white text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Join Our Platform
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1">
          Create your recruiter account
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />

          <button 
            onClick={()=>alert("Form submitted succesfully")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}
