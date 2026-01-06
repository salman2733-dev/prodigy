"use client";
import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsGoogle,
  BsInstagram,
   BsYoutube,
   BsTiktok,
  
} from "react-icons/bs";

import React from "react";

function Trusted() {
  return (
    <div className="mt-16 text-center">
      
      {/* Heading */}
      <h2 className="text-1xl font-bold text-gray-700">Trusted By</h2>
      <p className="mt-2 text-sm text-gray-500">
        Innovative companies worldwide
      </p>

      {/* Logos */}
     <div className="flex justify-center gap-8 mt-8 ">
  <BsFacebook className="text-3xl text-gray-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 cursor-pointer" />

 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <BsInstagram className="text-3xl text-gray-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-110 cursor-pointer" />
  </a>
  <BsLinkedin className="text-3xl text-gray-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110 cursor-pointer" />

  <BsGoogle className="text-3xl text-gray-400 hover:text-yellow-500 transition-all duration-300 hover:scale-110 cursor-pointer" />
  <BsYoutube className="text-3xl text-gray-400 hover:text-[#FF0000] transition-all duration-300 hover:scale-110 cursor-pointer" />
  <BsTiktok className="text-3xl text-gray-400 hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer" />

</div>

    </div>
  );
}

export default Trusted;
