"use client";
import React from "react";
import Link from "next/link";
export default function Connected() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[90vh]
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
          w-[70%]
          max-w-5xl
          bg-white/1
          backdrop-blur-md
          rounded-2xl
          p-10
          text-center
          shadow-xl
        "
      >
        {/* YOU WILL ADD CONTENT HERE */}

<div className="text-5xl sm:text-2xl md:text-4xl lg:text-5xl">

        <h2 className="  font-bold mb-3 text-white">
  Let's Get Connected
</h2>

<h2 className="font-bold mb-6 text-cyan-100">
  Find Your Dream Job
</h2>
</div>
        <p className="text-blue-100 mb-8">
         Your Career, Your Future — Simplified with Smart Matching Technology
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/job"
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

        <p className="text-sm text-blue-100">
         Trusted by over 1M+ professionals worldwide
        </p>
      </div>
    </section>
  );
}
