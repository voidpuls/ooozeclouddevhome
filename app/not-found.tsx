'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);
  const [glitchText, setGlitchText] = useState('404');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setGlitchText('ERR');
        setTimeout(() => setGlitchText('404'), 200);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#228B22] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1117] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d26] via-[#0f1117] to-[#1a1d26]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        {/* Glitch Text Container */}
        <div className="relative mb-8">
          {/* Glitch Layers */}
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter">
            <span className="absolute -left-[2px] -top-[2px] text-[#ff3e3e] opacity-70 animate-glitch-1">{glitchText}</span>
            <span className="absolute -left-[1px] -top-[1px] text-[#228B22] opacity-70 animate-glitch-2">{glitchText}</span>
            <span className="relative text-white">{glitchText}</span>
          </h1>
        </div>

        {/* Error Message */}
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-300">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/"
              className="group relative px-6 py-3 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#228B22] to-orange-500 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-black font-medium">Return Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group relative px-6 py-3 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 border border-[#228B22]/30 rounded-lg group-hover:border-[#228B22]/60 transition-colors"></div>
              <span className="relative text-[#228B22] font-medium">Go Back</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/20 to-transparent"></div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#228B22] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
} 