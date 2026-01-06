"use client";
import React, { useState } from 'react';

interface JobPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JobPortalModal({ isOpen, onClose }: JobPortalModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null; // Agar modal close ho to render na ho
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Transparent Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-[30%] min-w-[350px] h-[70%] overflow-hidden animate-slideIn p-8 z-10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:rotate-90"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sign in to Job Portal
          </h1>
          <p className="text-gray-500 text-sm">
            Welcome back! Please sign in to continue
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            J
          </div>
        </div>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-5 py-3 mb-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400 focus:bg-white transition text-gray-900 placeholder-gray-400"
        />

        {/* Continue with Google */}
        <button className="w-full py-3 px-4 mb-4 bg-white border-2 border-gray-300 rounded-2xl hover:border-gray-400 hover:shadow-md flex items-center justify-center gap-3 transition-all duration-200">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
            <path fill="#34A853" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"/>
            <path fill="#FBBC05" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"/>
          </svg>
          <span className="text-sm font-medium text-gray-700">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-xs text-gray-400">or</span>
        </div>

        {/* Continue Button */}
        <button className="w-full py-3 px-4 bg-gray-800 text-white text-sm font-medium rounded-2xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-2">
          Continue
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Footer */}
        <div className="text-center mt-auto border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500 mb-1">Secured by Clerk</p>
          <p className="text-xs text-orange-500 font-medium">Development mode</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideIn { animation: slideIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
