"use client";
import React from "react";
import Link from "next/link";
export default function Community() {
  return (
    <section className="w-full bg-black py-20 flex justify-center">
      
      {/* Card */}
      <div
        className="
          w-[80%]
          max-w-6xl
          bg-blue-900
          border
          border-blue-400
          rounded-2xl
          p-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          shadow-md
        "
      >
        {/* Left Content */}
        <div className="text-left text-white max-w-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Join the Prodigy Community
          </h2>
          <p className="text-blue-100">
            Stay ahead with the latest job opportunities, career insights, and exclusive resources delivered straight to your inbox.
          </p>
        </div>

        {/* Right Side (Input + Button) */}
      <form
  action="/thank-you"
  className="flex gap-3 w-full md:w-auto flex-col"
>
  {/* Email Input */}
  <input
    required
    type="email"
    placeholder="Enter your email"
    className="
      px-5
      bg-gray-900
      py-3
      rounded-lg
      w-full
      md:w-64
      outline-none
      text-gray-100
      placeholder-gray-400
      focus:ring-2
      focus:ring-blue-400
    "
  />

  {/* Subscribe Button */}
  <button
    type="submit"
    className="
      bg-white
      text-blue-900
      px-6
      py-3
      rounded-lg
      font-medium
      hover:bg-blue-100
      transition
      whitespace-nowrap
    "
  >
    Subscribe Now
  </button>
</form>

      </div>

    </section>
  );
}