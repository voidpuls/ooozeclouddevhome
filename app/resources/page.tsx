'use client';

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1d26] to-[#0f1117] pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#ff9cac]/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-[#ff9cac] relative">
                Resources
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff9cac]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to get started and succeed with our hosting solutions.
              From documentation to video tutorials, we've got you covered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
            <button className="bg-[#ff9cac] text-white px-8 py-4 rounded-lg hover:bg-[#ff8599] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-[#ff9cac]/20">
              View Documentation
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Watch Tutorials
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">Guides</div>
              <div className="text-gray-400">Step by Step</div>
            </div>
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">API</div>
              <div className="text-gray-400">Documentation</div>
            </div>
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">Tools</div>
              <div className="text-gray-400">& Downloads</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Documentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9cac]">Documentation</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">Getting Started</h3>
                <p className="text-gray-400">Complete guide to setting up your first game server.</p>
              </div>
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">API Reference</h3>
                <p className="text-gray-400">Detailed API documentation for developers.</p>
              </div>
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">Server Management</h3>
                <p className="text-gray-400">Learn how to manage and optimize your servers.</p>
              </div>
            </div>
          </div>

          {/* Tutorials */}
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9cac]">Video Tutorials</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">Server Setup Guide</h3>
                <p className="text-gray-400">Step-by-step video tutorial for server setup.</p>
              </div>
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">Mod Installation</h3>
                <p className="text-gray-400">How to install and manage game mods.</p>
              </div>
              <div className="p-4 bg-[#12141c] rounded-md">
                <h3 className="font-bold mb-2">Performance Optimization</h3>
                <p className="text-gray-400">Tips for optimizing server performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <h2 className="text-2xl font-bold mb-6">Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Control Panel</h3>
            <p className="text-gray-400 mb-4">Download our game server control panel.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Download
            </button>
          </div>
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Server Tools</h3>
            <p className="text-gray-400 mb-4">Essential tools for server management.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Download
            </button>
          </div>
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Mod Packs</h3>
            <p className="text-gray-400 mb-4">Popular mod packs for various games.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Browse Packs
            </button>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Essential Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Control Panel</h3>
            <p className="text-gray-400 mb-4">Download our game server control panel.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Download
            </button>
          </div>
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Server Tools</h3>
            <p className="text-gray-400 mb-4">Essential tools for server management.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Download
            </button>
          </div>
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Mod Packs</h3>
            <p className="text-gray-400 mb-4">Popular mod packs for various games.</p>
            <button className="bg-[#ff9cac] text-white px-4 py-2 rounded-md hover:bg-[#ff8599] w-full">
              Browse Packs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 