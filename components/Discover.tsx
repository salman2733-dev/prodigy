"use client";
import { BsSearch, BsCurrencyDollar, BsBarChart } from "react-icons/bs";
import Link from "next/link";
import React from "react";

export default function Discover() {
  return (
    <div className="flex flex-col md:flex-row bg-blue-100 mt-10 p-6 sm:p-8 gap-6">

      {/* Left Content */}
      <div className="flex-1 space-y-4">

        <h2 className="inline-block p-1 rounded-2xl text-sm text-blue-800 font-bold bg-blue-200">
          Find Faster
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Discover Your <span className="text-blue-800">Dream</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-blue-800">Job</span> Today
        </h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed">
          Join millions of professionals and explore thousands of career opportunities.
          Get salary insights, and company reviews — all in one place.
        </p>

        {/* Features */}
        <div className="space-y-4 mt-4">
          {[
            { icon: <BsSearch className="text-red-400 text-lg" />, title: "Smart Job Matching", desc: "AI-powered recommendations based on your skills and preferences", bg: "bg-purple-100" },
            { icon: <BsCurrencyDollar className="text-purple-800 text-lg" />, title: "Salary Insights", desc: "Know the pay range before you apply to any job", bg: "bg-orange-100" },
            { icon: <BsBarChart className="text-blue-500 text-lg" />, title: "Career Analytics", desc: "Track your applications and growth over time", bg: "bg-purple-100" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-3">
              <div className={`p-2 rounded-md flex items-center justify-center w-10 h-10 ${f.bg}`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/explore"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Browse Job
          </Link>

          <Link
            href="/get"
            className="flex items-center justify-center gap-2 bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Browse Job <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full  md:w-[40%] max-w-3xl mx-auto">
        <img
          src="/smile.jpg"
          alt="smile"
          className="w-full h-auto object-cover rounded-xl"
        />

        {/* Overlay Card */}
        <div className="absolute mb-42 left-4 bg-white p-4 rounded-xl shadow-lg w-64">
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
              <h4 className="font-semibold text-gray-900 text-sm">UX Designer</h4>
              <p className="text-xs text-gray-500">Washington · Microsoft</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-semibold text-sm">$95k - $120k</span>
            <button className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition">
              Apply now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
