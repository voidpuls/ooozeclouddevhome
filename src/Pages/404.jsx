import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Search, Server, HardDrive, Cpu, MapPin, CheckCircle, MessageCircle, Globe, ChevronDown, Rocket, Star, ChevronRight } from 'lucide-react';
import AnimatedBackground from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function NotFoundPage() {
  // Function to handle the "Go Back" action
  const handleGoBack = () => {
    // Navigates to the previous page in the browser history
    window.history.back();
  };

  // Function to handle the "Go Home" action
  const handleGoHome = () => {
    // Navigates to the root URL of the application
    window.location.href = '/';
  };

  return (
    // Main container with a dark background to match the provided theme
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4 py-16 text-white">
      <Navbar />
       <AnimatedBackground />
      <div className="text-center animate-fadeIn">
        {/* 404 Number with a stylish text gradient and pulse animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4 animate-pulse-slow">
            <span className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Message with elegant typography */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            The page you're looking for might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Illustration with a glassmorphic effect and animation */}
        <div className="mb-10 animate-float">
          <div className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl relative backdrop-blur-xl bg-white/5 border border-white/10">
            {/* Using an inline SVG for better styling and control, with a gradient stroke */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#svg-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-white"
            >
              <defs>
                <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Action Buttons styled to match the provided CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Go Back button with a subtle purple glow */}
          <a onClick={handleGoBack}>
            <button className="group relative w-full md:w-[160px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
              <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-gray-600/20 to-gray-800/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                  <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10 flex items-center gap-2">
                    <ArrowLeft size={20} />
                    Go Back
                  </span>
                </span>
              </div>
            </button>
          </a>

          {/* Go Home button with a vibrant purple-pink glow */}
          <a onClick={handleGoHome}>
            <button className="group relative w-full md:w-[160px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
              <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#5b21b6]/20 to-[#8b5cf6]/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                  <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10 flex items-center gap-2">
                    <Home size={20} />
                    Go Home
                  </span>
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Custom CSS for animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s infinite ease-in-out;
  }
  .animate-float {
    animation: float 4s infinite ease-in-out;
  }
`;
document.head.appendChild(styleSheet);
