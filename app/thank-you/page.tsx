"use client";
import React from "react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className=" px-10 py-12 rounded-2xl  text-center animate-bounce">
        <h1 className="text-4xl font-black text-blue-700 mb-3">
          🎉 Thank You!
        </h1>

        <p className="text-gray-600 text-lg">
          Please check your email for further details.
        </p>
      </div>
    </div>
  );
}
