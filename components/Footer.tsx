"use client";
import React from "react";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsArrowRight,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-14">
      
      {/* Top Section */}
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Prodigy
          </h3>
          <p className="text-sm">
            Building careers and connecting talent with opportunities worldwide.
          </p>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            {["About Us", "Careers", "Blog", "Press"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <BsArrowRight className="text-blue-500 text-xs group-hover:translate-x-1 transition" />
                <span className="group-hover:text-white transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            {["Help Center", "Contact Us", "FAQs", "Community"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <BsArrowRight className="text-blue-500 text-xs group-hover:translate-x-1 transition" />
                <span className="group-hover:text-white transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "Security",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <BsArrowRight className="text-blue-500 text-xs group-hover:translate-x-1 transition" />
                <span className="group-hover:text-white transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="w-[90%] max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        <p className="text-gray-500">
          © {new Date().getFullYear()} Prodigy. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#0A66C2] transition">
            <BsLinkedin size={18} />
          </a>
          <a href="#" className="hover:text-[#1877F2] transition">
            <BsFacebook size={18} />
          </a>
          <a href="#" className="hover:text-[#1DA1F2] transition">
            <BsTwitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
