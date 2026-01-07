"use client";
import Link from "next/link";
import { useState } from "react";
import { BsBriefcase, BsPersonBoundingBox, BsGraphUpArrow } from "react-icons/bs";
import JobPortal from "@/components/JobPortal";

export default function Main() {
  const [jobTitle, setJobTitle] = useState("");

  const popularJobs = ["Developer", "Marketing", "E-Commerce", "AI Manager", "Designer"];

  return (
    <div className="flex justify-center items-center mt-40 px-3">

      <div className="relative min-h-screen bg-[url('/meeting.jpg')] bg-cover bg-center w-full md:w-[93%] rounded-3xl">
        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-blue-800/52 rounded-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-white">

          {/* HERO TEXT */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
            Find Your <span className="text-yellow-500">Dream Job</span>
            <br />
            <span className="block">
              With Prodigy
            </span>
          </h1>

          <p className="mt-4 text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl text-center">
            Your next big career move starts here. Explore thousands of job opportunities and take control of your future.
          </p>

          {/* ICON STATS */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 text-white flex-wrap text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <BsBriefcase className="text-2xl sm:text-3xl text-yellow-600" />
              <span className="font-bold">50K+ Active jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <BsPersonBoundingBox className="text-2xl sm:text-3xl text-red-600" />
              <span className="font-bold">1M+ Job Seekers</span>
            </div>
            <div className="flex items-center gap-2">
              <BsGraphUpArrow className="text-2xl sm:text-3xl text-orange-600" />
              <span className="font-bold">90% Success Rate</span>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mt-8">
            <input
              type="text"
              placeholder="Job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
            />
            <button
              onClick={() => {
                document.getElementById("job-portal")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 active:bg-blue-800 transition"
            >
              Search Job
            </button>
          </div>

          {/* POPULAR SEARCHES */}
          <div className="mt-6 text-center">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">
              Popular Searches
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularJobs.map((job) => (
                <button
                  key={job}
                  onClick={() => setJobTitle(job)}
                  className="px-4 py-2 border border-white text-white bg-transparent rounded-full text-xs sm:text-sm hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  {job}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
