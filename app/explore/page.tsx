"use client";
import Connected from "@/components/Connected";
import React from "react";

const JobPortal: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-semibold text-blue-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Pakistan's Most Trusted Job Portal
            </div>

            {/* Heading */}
            <h1 className="mt-8 sm:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900">
              Find Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-blue-700">
                  Dream Job
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-2 sm:h-3 bg-blue-200/50 -rotate-1"></span>
              </span>{" "}
              Today
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Connect with Pakistan's top employers and unlock thousands of opportunities. 
              Your perfect career is just one click away.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto pt-8 sm:pt-12">
              {[{ value: "50,000+", label: "Active Jobs", icon: "💼" },
                { value: "100,000+", label: "Job Seekers", icon: "👥" },
                { value: "5,000+", label: "Companies", icon: "🏢" }].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all hover:shadow-lg">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">{item.value}</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 sm:py-24 lg:py-32 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mt-12 text-center mb-12 sm:mb-20 space-y-4">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 max-w-3xl mx-auto leading-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-base font-bold sm:text-lg lg:text-xl text-blue-600 max-w-2xl mx-auto leading-relaxed">
              Powerful features designed to help you find the perfect opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Features Mapping */}
          </div>
        </div>
      </section>

      {/* ================= TRUST & CTA ================= */}
      <Connected />
    </div>
  );
};

export default JobPortal;
