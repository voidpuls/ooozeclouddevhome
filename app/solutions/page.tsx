'use client';

export default function Solutions() {
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
                Solutions
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff9cac]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Comprehensive hosting solutions designed for performance, reliability, and scalability.
              Choose the perfect solution for your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
            <button className="w-full sm:w-auto bg-[#ff9cac] text-white px-8 py-4 rounded-lg hover:bg-[#ff8599] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-[#ff9cac]/20">
              Get Started
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Compare Plans
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">Game</div>
              <div className="text-gray-400">Server Solutions</div>
            </div>
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">VPS</div>
              <div className="text-gray-400">Hosting</div>
            </div>
            <div className="bg-[#1a1d26]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-[#ff9cac] text-2xl font-bold mb-2">Web</div>
              <div className="text-gray-400">Hosting</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Game Server Solutions */}
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9cac]">Game Servers</h2>
            <p className="text-gray-400 mb-4">High-performance game servers with instant deployment and advanced configuration options.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Instant Setup</li>
              <li>• DDoS Protection</li>
              <li>• 24/7 Support</li>
              <li>• Custom Mods Support</li>
            </ul>
          </div>
          
          {/* VPS Hosting */}
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9cac]">VPS Hosting</h2>
            <p className="text-gray-400 mb-4">Dedicated virtual servers optimized for gaming with full root access and custom configurations.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Full Root Access</li>
              <li>• SSD Storage</li>
              <li>• Dedicated IP</li>
              <li>• Custom OS Options</li>
            </ul>
          </div>
          
          {/* Web Hosting */}
          <div className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-[#ff9cac]">Web Hosting</h2>
            <p className="text-gray-400 mb-4">Fast and reliable web hosting for your gaming community and content.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• One-Click Installs</li>
              <li>• Free SSL</li>
              <li>• Daily Backups</li>
              <li>• 99.9% Uptime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 