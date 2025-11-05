'use client';

import { useState, useEffect } from 'react';

interface LayoutToggleProps {
  onLayoutChange: (isHorizontal: boolean) => void;
}

export default function LayoutToggle({ onLayoutChange }: LayoutToggleProps) {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    // Get user preference from localStorage
    const savedLayout = localStorage.getItem('pricingLayout');
    if (savedLayout) {
      setIsHorizontal(savedLayout === 'horizontal');
    }
  }, []);

  const handleLayoutChange = (horizontal: boolean) => {
    setIsHorizontal(horizontal);
    onLayoutChange(horizontal);
    // Save user preference to localStorage
    localStorage.setItem('pricingLayout', horizontal ? 'horizontal' : 'vertical');
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-[#1a1d26] rounded-lg p-1">
        <button
          onClick={() => handleLayoutChange(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !isHorizontal
              ? 'bg-[#fbbf24] text-white hover:bg-[#f59e0b]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => handleLayoutChange(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isHorizontal
              ? 'bg-[#fbbf24] text-white hover:bg-[#f59e0b]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          List
        </button>
      </div>
    </div>
  );
} 