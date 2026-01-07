"use client";
import React from "react";
import Link from "next/link";

export default function Connected() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[80vh] sm:min-h-[90vh]
        flex
        items-center
        justify-center
        bg-[url('/laptop.jpg')]
        bg-cover
        bg-center
      "
    >
      {/* Light blue overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Transparent Card */}
      <div
        className="
          relative
          z-10
          w-[90%] sm:w-[80%] md:w-[70%]
          max-w-5xl
          bg-white/5
          backdrop-blur-md
          rounded-2xl
          p-6 sm:p-10
          text-center
          shadow-xl
        "
      >
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white">
            Let's Get Connected
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-cyan-100">
            Find Your Dream Job
          </h2>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 mt-4 sm:mt-6">
          Your Career, Your Future — Simplified with Smart Matching Technology
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 sm:mb-8">
          <Link
            href="/job"
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              font-medium
              hover:bg-blue-700
              transition
            "
          >
            Search Job
          </Link>

          <a
            href="#job-portal"
            className="
              bg-white
              text-blue-600
              border
              border-blue-600
              px-6
              py-3
              rounded-lg
              font-medium
              hover:bg-blue-50
              transition
            "
          >
            Explore More
          </a>
        </div>

        <p className="text-xs sm:text-sm text-blue-100">
          Trusted by over 1M+ professionals worldwide
        </p>
      </div>
    </section>
  );
}
