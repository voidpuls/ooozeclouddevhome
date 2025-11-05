'use client';

import Image from "next/image";
import Link from "next/link";

export default function TeamFortress2() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <Image
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"
            alt="Team Fortress 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Team Fortress 2</h1>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">
                  86% Rating
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                  Action
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Game Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">About the Game</h2>
                <p className="text-gray-300">
                  TF2 servers with custom maps and community features. Experience the classic team-based action game with high-performance servers and extensive community support.
                </p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Server Features</h2>
                <div className="grid gap-4">
                  {[
                    "Custom Maps",
                    "Community Plugins",
                    "Statistics Tracking",
                    "Anti-Cheat",
                    "Custom Game Modes",
                    "Trading Support",
                    "Event Management",
                    "Performance Optimization",
                    "Automatic Updates",
                    "DDoS Protection"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Minimum</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• CPU: Intel Core i3 or better</li>
                      <li>• RAM: 4GB</li>
                      <li>• Storage: 20GB</li>
                      <li>• Network: 5 Mbps</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-2">Recommended</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• CPU: Intel Core i5 or better</li>
                      <li>• RAM: 8GB</li>
                      <li>• Storage: 40GB SSD</li>
                      <li>• Network: 50 Mbps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
                  <div className="space-y-4">
                    {[
                      { name: "Basic", price: "8.99", slots: 24 },
                      { name: "Standard", price: "16.99", slots: 32 },
                      { name: "Premium", price: "29.99", slots: 48 }
                    ].map((plan, index) => (
                      <div key={index} className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                        <div className="relative bg-black/50 border border-white/10 group-hover:border-cyan-500/50 rounded-xl p-4 transition duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-cyan-400">{plan.name}</h3>
                            <span className="text-xl font-bold">${plan.price}</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-4">{plan.slots} Player Slots</p>
                          <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition duration-300">
                            Select Plan
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                  <p className="text-gray-300 mb-4">Our support team is available 24/7 to assist you with any questions or issues.</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition duration-300">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 