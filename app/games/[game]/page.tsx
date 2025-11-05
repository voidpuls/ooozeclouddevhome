'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const gameData = {
  minecraft: {
    name: "Minecraft",
    description: "High-performance Minecraft servers with mod support and instant setup.",
    image: "/images/minecraft.jpg",
    specs: {
      starter: {
        name: "Starter",
        cpu: "4 vCPU",
        ram: "8GB",
        storage: "50GB NVMe SSD",
        players: "Up to 50",
        mods: "Basic Mod Support",
        price: "$9.99/month"
      },
      pro: {
        name: "Pro",
        cpu: "8 vCPU",
        ram: "16GB",
        storage: "100GB NVMe SSD",
        players: "Up to 100",
        mods: "Advanced Mod Support",
        price: "$19.99/month"
      },
      ultimate: {
        name: "Ultimate",
        cpu: "16 vCPU",
        ram: "32GB",
        storage: "200GB NVMe SSD",
        players: "Unlimited",
        mods: "Premium Mod Support",
        price: "$39.99/month"
      }
    },
    features: [
      "One-Click Modpack Installation",
      "Automatic Backups",
      "DDoS Protection",
      "24/7 Support",
      "Custom Control Panel",
      "Plugin Support",
      "Multiple Versions Support",
      "World Backups"
    ]
  },
  valheim: {
    name: "Valheim",
    description: "Dedicated Valheim servers with automatic updates and backups.",
    image: "/images/valheim.jpg",
    specs: {
      starter: {
        name: "Starter",
        cpu: "4 vCPU",
        ram: "8GB",
        storage: "50GB NVMe SSD",
        players: "Up to 10",
        mods: "Basic Mod Support",
        price: "$14.99/month"
      },
      pro: {
        name: "Pro",
        cpu: "8 vCPU",
        ram: "16GB",
        storage: "100GB NVMe SSD",
        players: "Up to 20",
        mods: "Advanced Mod Support",
        price: "$29.99/month"
      },
      ultimate: {
        name: "Ultimate",
        cpu: "16 vCPU",
        ram: "32GB",
        storage: "200GB NVMe SSD",
        players: "Unlimited",
        mods: "Premium Mod Support",
        price: "$49.99/month"
      }
    },
    features: [
      "Automatic Updates",
      "World Backups",
      "Mod Support",
      "Community Tools",
      "Admin Panel",
      "Custom Maps",
      "Discord Integration",
      "Performance Optimization"
    ]
  },
  "ark": {
    name: "ARK: Survival Evolved",
    description: "Powerful ARK servers with mod support and cluster capability.",
    image: "/images/ark.jpg",
    specs: {
      starter: {
        name: "Starter",
        cpu: "8 vCPU",
        ram: "16GB",
        storage: "100GB NVMe SSD",
        players: "Up to 50",
        mods: "Basic Mod Support",
        price: "$24.99/month"
      },
      pro: {
        name: "Pro",
        cpu: "16 vCPU",
        ram: "32GB",
        storage: "200GB NVMe SSD",
        players: "Up to 100",
        mods: "Advanced Mod Support",
        price: "$49.99/month"
      },
      ultimate: {
        name: "Ultimate",
        cpu: "32 vCPU",
        ram: "64GB",
        storage: "400GB NVMe SSD",
        players: "Unlimited",
        mods: "Premium Mod Support",
        price: "$99.99/month"
      }
    },
    features: [
      "Cluster Support",
      "Mod Manager",
      "Auto-Updates",
      "Backup System",
      "FTP Access",
      "Custom Maps",
      "Cross-Server Chat",
      "Advanced Configuration"
    ]
  }
};

export default function GamePage() {
  const params = useParams();
  const gameSlug = params.game as string;
  const game = gameData[gameSlug as keyof typeof gameData];
  const [selectedPlan, setSelectedPlan] = useState('starter');

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-gray-400">The requested game server is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            {game.name} <span className="text-[#ff9cac]">Server Hosting</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            {game.description}
          </p>
        </div>

        {/* Game Banner */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
          <Image
            src={game.image}
            alt={game.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="transition-transform hover:scale-105"
          />
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Server Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(game.specs).map(([plan, specs]) => (
              <div 
                key={plan}
                className={`bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer ${
                  selectedPlan === plan ? 'ring-2 ring-[#ff9cac]' : ''
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h3 className="text-2xl font-bold mb-4">{specs.name}</h3>
                <div className="text-3xl font-bold text-[#ff9cac] mb-6">
                  {specs.price}
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#12141c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">CPU</p>
                    <p className="font-medium">{specs.cpu}</p>
                  </div>
                  <div className="bg-[#12141c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Memory</p>
                    <p className="font-medium">{specs.ram}</p>
                  </div>
                  <div className="bg-[#12141c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Storage</p>
                    <p className="font-medium">{specs.storage}</p>
                  </div>
                  <div className="bg-[#12141c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Players</p>
                    <p className="font-medium">{specs.players}</p>
                  </div>
                  <div className="bg-[#12141c] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Mods</p>
                    <p className="font-medium">{specs.mods}</p>
                  </div>
                </div>
                <button className="w-full bg-[#ff9cac] text-white px-4 py-3 rounded-md hover:bg-[#ff8599] transition-colors">
                  Deploy Server
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Server Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {game.features.map((feature, index) => (
              <div key={index} className="bg-[#1a1d26] p-6 rounded-lg hover:scale-105 transition-transform">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-[#ff9cac] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-left">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 