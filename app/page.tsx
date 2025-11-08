'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Loading from "./loading";

const logMessages = [
  "[INFO] Initializing server setup...",
  "[INFO] Checking system requirements...",
  "[INFO] Loading server configurations...",
  "[INFO] Setting up game environment...",
  "[INFO] Starting Minecraft server version 1.20.1...",
  "[INFO] Loading server properties...",
  "[INFO] Default game type: Survival Mode",
  "[INFO] Preparing level \"world\"...",
  "[INFO] Generating world structures...",
  "[INFO] Loading spawn area...",
  "[INFO] Done! Server is running on localhost:25565",
  "[SUCCESS] Server running at 20.0 TPS | Memory: 32768M allocated"
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading && currentLogIndex < logMessages.length) {
      const logTimer = setTimeout(() => {
        setDisplayedLogs(prev => [...prev, logMessages[currentLogIndex]]);
        setCurrentLogIndex(prev => prev + 1);
        
        if (consoleRef.current) {
          consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
      }, 500);

      return () => clearTimeout(logTimer);
    }
  }, [currentLogIndex, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#28a745] rounded-full blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#28a745] rounded-full blur-[128px] opacity-10"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#28a745] rounded-full blur-[128px] opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-[90%] w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-[#28a745] to-[#28a745] text-transparent bg-clip-text text-lg font-medium">
                    GAME SERVER HOSTING
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Level Up Your
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] via-orange-500 to-[#28a745]">
                    Gaming Experience
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl">
                  Deploy high-performance game servers with one click. Experience ultra-low latency and 24/7 support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/games"
                  className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#28a745] via-orange-500 to-[#28a745] p-[1px]"
                >
                  <div className="relative bg-black group-hover:bg-opacity-0 rounded-lg px-6 py-3 transition-all duration-200">
                    <span className="relative z-10 text-white font-medium">Start Hosting</span>
                  </div>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-orange-500">99.9%</div>
                  <div className="text-gray-500 text-sm mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#28a745]">60ms</div>
                  <div className="text-gray-500 text-sm mt-1">Avg. Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-orange-500">24/7</div>
                  <div className="text-gray-500 text-sm mt-1">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Game Grid */}
            <div className="flex-1 relative h-[600px] w-full">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
                {games.slice(0, 9).map((game, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 rounded-lg p-[1px] transform transition-transform hover:scale-105"
                  >
                    <div className="relative bg-black/80 rounded-lg h-full w-full overflow-hidden">
                      <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm text-white font-medium truncate">{game.name}</h3>
                      </div>
                      <div className="absolute top-2 left-2">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#28a745] to-orange-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Popular Games</h2>
            <p className="text-gray-400">Choose from our selection of optimized game servers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 rounded-xl p-[1px] hover:from-[#28a745] hover:to-orange-500 transition-all duration-300"
              >
                <div className="relative bg-black rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <p className="text-gray-400 mb-4">{game.description}</p>
                    <Link 
                      href={`/games/${game.name === "Garry's Mod" ? 'garrys-mod' : game.name.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '').replace(/\./g, '')}`}
                      className="inline-flex items-center text-[#28a745] hover:text-orange-500 transition-colors"
                    >
                      Deploy Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Partners Section */}
<section className="py-32 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/5 to-transparent"></div>
  
  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Our Trusted Partners</h2>
      <p className="text-gray-400">Building a Strong Network for Gaming Excellence</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Side - Partner Capabilities */}
      <div className="space-y-8">
        <div className="relative bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 rounded-xl p-[1px]">
          <div className="bg-black rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Partner Capabilities</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#28a745] to-orange-500 p-[1px]">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#28a745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Global Network & Infrastructure</h4>
                  <p className="text-gray-400">Collaborating with worldwide partners to ensure high-performance connectivity and reliable infrastructure for gamers everywhere.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#28a745] to-orange-500 p-[1px]">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#28a745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Advanced Security & Reliability</h4>
                  <p className="text-gray-400">Partnering with security leaders to provide protection, redundancy, and uptime for all gaming infrastructure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#28a745] to-orange-500 p-[1px]">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#28a745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Community & Content Tools</h4>
                  <p className="text-gray-400">Working with partners to develop community-driven features and tools that enhance multiplayer experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Partner Capabilities */}
        <div className="relative bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 rounded-xl p-[1px]">
          <div className="bg-black rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Partner Network</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white">Global Reach</span>
                <span className="text-purple-500 font-semibold">200+ Countries</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white">Bandwidth & Connectivity</span>
                <span className="text-purple-500 font-semibold">100+ Tbps</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Security & DDoS Protection</span>
                <span className="text-purple-500 font-semibold">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Our Partners Showcase */}
      <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-[1px] h-full">
        <div className="bg-black rounded-xl p-8 h-full">
          <h3 className="text-2xl font-bold text-white mb-6">Our Trusted Partners</h3>
          <div className="grid grid-cols-1 gap-6 h-full overflow-y-auto">
            {/* Partner 1 */}
            <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-[#28a745]/50 transition-all">
              <div className="flex items-center mb-4">
                <img
                  src="https://abrhosting.com/assets/images/temps/footer/logo-d.png"
                  alt="Abr Hosting Logo"
                  width={60}
                  height={60}
                  className="rounded-lg mr-4"
                />
                <h4 className="text-xl font-bold text-white">Abr Hosting</h4>
              </div>
              <p className="text-gray-300">Our primary hosting partner providing robust infrastructure solutions to ensure seamless gaming experiences.</p>
            </div>
            {/* Partner 2 - Dezerx */}
            <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-[#28a745]/50 transition-all">
              <div className="flex items-center mb-4">
                <img
                  src="/images/dezerlogo.webp"
                  alt="Dezerx Logo"
                  width={60}
                  height={60}
                  className="rounded-lg mr-4"
                />
                <h4 className="text-xl font-bold text-white">Dezerx</h4>
              </div>
              <p className="text-gray-300">
                Streamline your software billing with intelligent automation, real-time analytics, and seamless payment processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400">Everything you need to know about our game servers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-[1px]">
              <div className="bg-black rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">How many players can join my server?</h3>
                <p className="text-gray-400">Our servers support unlimited players by default. The actual capacity depends on your chosen plan and game type. We'll help you choose the right configuration for your community size.</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-[1px]">
              <div className="bg-black rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Can I switch games anytime?</h3>
                <p className="text-gray-400">Yes! You can switch between games at any time. Our control panel makes it easy to change games, and we'll help migrate your data and settings to the new game server.</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-[1px]">
              <div className="bg-black rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom configurations?</h3>
                <p className="text-gray-400">Absolutely! You have full access to server settings and configuration files. Whether you want to adjust gameplay mechanics or install custom plugins, you have complete control.</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-[1px]">
              <div className="bg-black rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">What about server performance?</h3>
                <p className="text-gray-400">Our servers run on enterprise-grade hardware with high-speed NVMe storage and latest-gen processors. This ensures smooth gameplay even with many players and mods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const games = [
  {
    name: "Minecraft",
    description: "High-performance servers with mod support and instant setup.",
    image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg"
  },
  {
    name: "Valheim",
    description: "Dedicated servers with automatic updates and backups.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"
  },
  {
    name: "ARK: Survival Evolved",
    description: "Powerful servers with mod support and cluster capability.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg"
  },
  {
    name: "Palworld",
    description: "Dedicated Palworld servers with automatic updates and optimization.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg"
  },
  {
    name: "Rust",
    description: "High-capacity servers with DDoS protection and modding support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
  },
  {
    name: "Garry's Mod",
    description: "Flexible servers with workshop support and addon management.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg"
  }
];

const locations = [
  {
    region: "North America",
    specs: [
      "Intel Xeon E5-2690v4",
      "64GB DDR4 RAM",
      "NVMe SSD Storage",
      "1Gbps Network"
    ],
    latency: "<20ms",
    uptime: "99.99%"
  },
  {
    region: "Europe",
    specs: [
      "AMD EPYC 7542",
      "128GB DDR4 RAM",
      "NVMe SSD Storage",
      "10Gbps Network"
    ],
    latency: "<15ms",
    uptime: "99.99%"
  },
  {
    region: "Asia Pacific",
    specs: [
      "Intel Xeon Gold 6242",
      "96GB DDR4 RAM",
      "NVMe SSD Storage",
      "2.5Gbps Network"
    ],
    latency: "<25ms",
    uptime: "99.95%"
  }
];
