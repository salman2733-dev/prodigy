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

        <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 relative">
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
            <h1 className="mt-12 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-gray-900 font-bold">
              Find Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-blue-700">
                  Dream Job
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/50 -rotate-1"></span>
              </span>
              {" "}Today
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Connect with Pakistan's top employers and unlock thousands of opportunities. 
              Your perfect career is just one click away.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto pt-12">
              {[
                { value: "50,000+", label: "Active Jobs", icon: "💼" },
                { value: "100,000+", label: "Job Seekers", icon: "👥" },
                { value: "5,000+", label: "Companies", icon: "🏢" },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all hover:shadow-lg">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className=" mt-12 text-center mb-20 space-y-4">
           
            <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 max-w-3xl mx-auto leading-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg lg:text-xl text-blue-600 max-w-2xl mx-auto leading-relaxed">
              Powerful features designed to help you find the perfect opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {[
              { 
                icon: "🎯", 
                title: "Thousands of Opportunities", 
                desc: "Access 50,000+ verified job listings across all industries, from entry-level to executive positions.",
                color: "blue"
              },
              { 
                icon: "⚡", 
                title: "Lightning Fast Apply", 
                desc: "Apply to multiple positions in seconds with our streamlined one-click application system.",
                color: "indigo"
              },
              { 
                icon: "🔒", 
                title: "100% Safe & Secure", 
                desc: "Bank-level security ensures your data is protected. All companies are thoroughly verified.",
                color: "violet"
              },
              { 
                icon: "📱", 
                title: "Mobile Optimized", 
                desc: "Seamlessly search and apply from any device. Full functionality on desktop, tablet, and mobile.",
                color: "cyan"
              },
              { 
                icon: "💼", 
                title: "Expert Career Support", 
                desc: "Free professional CV reviews, interview coaching, and personalized career counseling.",
                color: "blue"
              },
              { 
                icon: "🌟", 
                title: "Premium Features", 
                desc: "Stand out with featured profiles, priority applications, and exclusive recruiter access.",
                color: "purple"
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 w-4"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${f.color}-500 to-${f.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {f.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {f.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold">
                  ✓ Trusted by Professionals
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  Join Pakistan's Largest Professional Network
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 100,000 professionals have found their dream jobs through our platform. 
                  Connect with verified employers and take the next step in your career today.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Verified Companies</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "98.5%", label: "Success Rate" },
                  { metric: "4.9/5", label: "User Rating" },
                  { metric: "24hrs", label: "Avg. Response" },
                  { metric: "15+", label: "Industries" },
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                    <div className="text-3xl font-black text-blue-700 mb-2">
                      {item.metric}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center text-blue-800 font-bold relative z-10 space-y-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who found success through our platform. 
            Start your journey today—completely free.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <a className="group mt-12 border-2 p-1 flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/30 text-lg hover:-translate-y-0.5">
              <span className="text-blue-700">Create Free Account</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 pt-12 mb-8">
            <div className="flex items-center gap-2 text-blue-900">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No Credit Card</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Forever</span>
            </div>
            <div className="flex items-center gap-2 text-blue-900">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>
                <Connected/>
    </div>
  );
};

export default JobPortal;