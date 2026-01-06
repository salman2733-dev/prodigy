"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-4 mb-38 left-1/2 -translate-x-1/2 z-50
        transition-all duration-700 ease-in
        ${scrolled ? "w-[90%]" : "w-[93%]"}
        
      `}
    >
      <main className="flex justify-between p-5 shadow rounded-b-md bg-white">
        {/* Logo */}
        <nav className="bg-white text-black flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white bg-blue-800 p-2 rounded"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>

          <h1 className="text-2xl font-bold text-blue-900 text-center">
            Prodigy
          </h1>
        </nav>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
         <Link href="/portal">
  <button className="hover:text-blue-800 hover:bg-blue-200 rounded-2xl p-2 font-bold cursor-pointer transition">
    Recruiter Portal
  </button>
</Link>
          <Link href="/get">
          <button className="bg-blue-900 text-white rounded-2xl p-3 font-bold">
            Get Started
          </button>
          </Link>
        </div>
      </main>
    </div>
  );
};
