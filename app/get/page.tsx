"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function GetPage() {
  const [email, setEmail] = useState("");

  return (
    // Parent overlay
    <div className="fixed inset-0 bg-[rgba(102,96,96,0.55)] flex items-center justify-center px-4">

      {/* Center wrapper */}
      <div className="bg-transparent flex items-center justify-center w-full">

        {/* Card */}
        <div
          className="
            relative 
            bg-white 
            border-2 border-cyan-500 
            rounded-2xl 
            shadow-2xl 
            w-full 
            sm:w-[90%] 
            md:w-[70%] 
            lg:w-[50%] 
            max-w-4xl 
            p-6 sm:p-8 
            flex flex-col 
            animate-slideIn
          "
        >

          {/* Close Button */}
          <Link href="/">
            <button className="absolute top-4 right-4 p-2 text-gray-900 hover:text-red-500 transition">
              ✕
            </button>
          </Link>

          {/* Header */}
          <div className="text-center mb-6 mt-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Sign in to Job Portal
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Continue with Google */}
          <button
            className="
              w-full 
              py-3 px-4 
              mb-4 
              bg-gray-100 
              border-2 border-blue-800 
              rounded-2xl 
              hover:border-cyan-400 
              flex items-center justify-center gap-3 
              transition
            "
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
              <path fill="#34A853" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"/>
              <path fill="#FBBC05" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"/>
            </svg>
            <span className="text-sm font-medium text-black">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-xs text-gray-400">or</span>
          </div>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="
              w-full 
              px-5 py-3 
              mb-4 
              bg-gray-100 
              border-2 border-blue-800 
              rounded-2xl 
              focus:outline-none 
              focus:border-blue-400 
              transition 
              text-black 
              placeholder-gray-400
            "
          />

          {/* Continue Button */}
          <button
            className="
              w-full 
              py-3 px-4 
              bg-blue-800 
              text-white
              font-medium 
              rounded-2xl 
              hover:bg-cyan-400 
              transition 
              flex items-center justify-center gap-2
            "
          >
            Continue
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Footer */}
          <div className="text-center mt-6 border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500 mb-1">Secured by Clerk</p>
            <p className="text-xs text-orange-500 font-medium">
              Development mode
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
