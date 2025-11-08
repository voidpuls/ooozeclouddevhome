'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const gameCategories = {
  survival: "Survival",
  simulation: "Simulation",
  sandbox: "Sandbox",
  action: "Action",
  rpg: "RPG",
  horror: "Horror",
  strategy: "Strategy",
  minecraft: "Minecraft",
  shooter: "Shooter",
  tactical: "Tactical",
  development: "Development",
  bot: "Bot"
} as const;

type GameCategory = keyof typeof gameCategories;

interface Game {
  name: string;
  description: string;
  image: string;
  features: string[];
  categories: GameCategory[];
  tags: string[];
  popularity: number;
}

const baseGames: Game[] = [
  {
    name: "Palworld",
    description: "High-performance Palworld server hosting with seamless co-op and mod support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
    features: ["Mod Support", "High Performance", "Automatic Backups"],
    categories: ["survival", "action"],
    tags: ["palworld", "co-op", "monsters"],
    popularity: 10
  },
  {
    name: "Valheim",
    description: "Valheim servers optimized for exploration, building, and Viking survival.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
    features: ["Mod Support", "Dedicated Worlds", "Clan Friendly"],
    categories: ["survival", "sandbox"],
    tags: ["valheim", "viking", "co-op"],
    popularity: 9
  },
  {
    name: "Minecraft Java",
    description: "Start your Minecraft Java server on the fastest hardware, at prices lower than anywhere else.",
    image: "/images/minecraft.jpg",
    features: ["High-performance hardware", "Mod support", "Community building"],
    categories: ["sandbox", "minecraft"],
    tags: ["java", "multiplayer", "mods", "community"],
    popularity: 8
  },
  {
    name: "Minecraft Bedrock",
    description: "Cross-platform Minecraft hosting for console, mobile & Windows.",
    image: "/images/minecraft.jpg",
    features: ["Cross-platform support", "Reliable hosting", "Easy setup"],
    categories: ["sandbox", "minecraft"],
    tags: ["bedrock", "multiplayer", "cross-platform"],
    popularity: 7
  },
  {
    name: "Rust",
    description: "High-performance Rust servers built for large player bases & PvP.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
    features: ["High Performance", "Mod Support", "DDOS Protection"],
    categories: ["survival", "action"],
    tags: ["rust", "survival", "multiplayer"],
    popularity: 9
  },
  {
    name: "Garry's Mod",
    description: "GMod servers with mod, addon & gamemode support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg",
    features: ["Addon Support", "Workshop Integration", "Multiple Gamemodes"],
    categories: ["sandbox"],
    tags: ["gmod", "sandbox", "modding"],
    popularity: 8
  },
  {
    name: "CS:GO",
    description: "CS:GO servers optimized for competitive matchmaking and custom games.",
    image: "/images/csgo.jpg",
    features: ["Low latency", "Custom maps", "Community support"],
    categories: ["shooter"],
    tags: ["csgo", "fps", "multiplayer"],
    popularity: 8
  },
  {
    name: "Ark: Survival Evolved",
    description: "Ark hosting with cluster & mod support for large tribes.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg",
    features: ["Mod Manager", "Cluster Support", "Automatic Backups"],
    categories: ["survival", "action"],
    tags: ["dinosaurs", "multiplayer", "modding"],
    popularity: 9
  },
  {
    name: "Team Fortress 2",
    description: "TF2 servers for casual, competitive & custom map communities.",
    image: "/images/tf2.jpg",
    features: ["Custom maps", "Mods support", "Multiple game modes"],
    categories: ["shooter"],
    tags: ["tf2", "fps", "multiplayer"],
    popularity: 6
  },
  {
    name: "Insurgency",
    description: "Tactical military shooter servers with ultra-low latency.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/222880/header.jpg",
    features: ["Low latency", "Competitive Ready", "Configurable"],
    categories: ["shooter", "tactical"],
    tags: ["insurgency", "fps", "military"],
    popularity: 7
  },
  {
    name: "Unturned",
    description: "Unturned hosting with workshop + map control.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg",
    features: ["Workshop Support", "Custom Maps", "Plugin System"],
    categories: ["survival"],
    tags: ["zombies", "multiplayer", "crafting"],
    popularity: 7
  },
  {
    name: "Node.js Bot",
    description: "Host Node.js applications and Discord bots reliably 24/7.",
    image: "/images/nodejs.webp",
    features: ["Full npm support", "24/7 uptime", "Easy deployment"],
    categories: ["development", "bot"],
    tags: ["nodejs", "bot", "automation"],
    popularity: 6
  },
  {
    name: "Python Bot",
    description: "Python bot hosting with pip support and full module access.",
    image: "/images/python.jpg",
    features: ["Full pip support", "24/7 uptime", "Custom modules"],
    categories: ["development", "bot"],
    tags: ["python", "automation", "bot"],
    popularity: 6
  }
];

const plans = [
  { name: "Starter", price: "2.37", cores: "2 Cores", ram: "3GB RAM", storage: "15GB SSD Storage", ports: "3 Ports" },
  { name: "Basic", price: "3.16", cores: "2 Cores", ram: "4GB RAM", storage: "30GB SSD Storage", ports: "5 Ports" },
  { name: "Standard", price: "3.95", cores: "2 Cores", ram: "5GB RAM", storage: "40GB SSD Storage", ports: "5 Ports" },
  { name: "Advanced", price: "4.74", cores: "2 Cores", ram: "6GB RAM", storage: "50GB SSD Storage", ports: "5 Ports" },
  { name: "Pro", price: "5.53", cores: "2 Cores", ram: "7GB RAM", storage: "65GB SSD Storage", ports: "5 Ports" },
  { name: "Premium", price: "6.32", cores: "2.5 Cores", ram: "8GB RAM", storage: "70GB SSD Storage", ports: "10 Ports" },
  { name: "Elite", price: "7.90", cores: "2.5 Cores", ram: "10GB RAM", storage: "80GB SSD Storage", ports: "10 Ports", popular: true },
  { name: "Ultimate", price: "9.48", cores: "3 Cores", ram: "12GB RAM", storage: "90GB SSD Storage", ports: "10 Ports" },
  { name: "Supreme", price: "12.64", cores: "4 Cores", ram: "16GB RAM", storage: "100GB SSD Storage", ports: "10 Ports" },
  { name: "Legendary", price: "14.22", cores: "5 Cores", ram: "18GB RAM", storage: "120GB SSD Storage", ports: "10 Ports" },
  { name: "Master", price: "17.38", cores: "5 Cores", ram: "22GB RAM", storage: "140GB SSD Storage", ports: "10 Ports" },
];

export default function Games() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | null>(null);

  const filteredGames = baseGames
    .filter(game =>
      (game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedCategory || game.categories.includes(selectedCategory))
    )
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header/Banner Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#28a745]/20 to-orange-500/20 blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Game Server Hosting
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Reliable, high-performance hosting for your favorite games.
          </p>
          <div className="bg-gradient-to-r from-[#28a745] to-orange-500 text-black font-bold text-center py-4 rounded-2xl text-2xl shadow-lg shadow-orange-500/30 max-w-md mx-auto">
            All Games Start at €2.37/month
          </div>
        </div>
      </header>

      {/* Search and Filters Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#28a745] focus:outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-[#28a745] text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {Object.entries(gameCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as GameCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-[#28a745] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Available Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.name}
              className="group bg-gray-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#28a745]/50 hover:shadow-lg hover:shadow-[#28a745]/10 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <div className="text-xl font-bold text-[#28a745] mb-4">
                  €2.37<span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{game.description}</p>
                <ul className="text-gray-400 space-y-2 mb-6">
                  {game.features.map((f) => (
                    <li key={f} className="flex items-center">
                      <span className="text-[#28a745] mr-2">✔</span>{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/games/${game.name.toLowerCase().replace(/[:']/g, '').replace(/\s+/g, '-')}`}
                  className="block text-center bg-gradient-to-r from-[#28a745] to-orange-500 text-black font-semibold py-3 rounded-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
          </div>
        )}
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-gray-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Pricing Plans</h2>
          <p className="text-center text-gray-400 mb-12">
            Choose the perfect plan for your server needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gray-900/40 border border-white/10 rounded-2xl p-6 hover:border-[#28a745]/50 hover:shadow-lg hover:shadow-[#28a745]/10 transition-all duration-300 ${
                  plan.popular ? 'border-[#28a745]/70 shadow-md shadow-[#28a745]/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#28a745] text-black px-4 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#28a745] mb-4">
                  €{plan.price}<span className="text-sm text-gray-400 ml-1">/month</span>
                </div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>{plan.cores}</li>
                  <li>{plan.ram}</li>
                  <li>{plan.storage}</li>
                  <li>{plan.ports}</li>
                  <li>Server Manager Access</li>
                  <li>NVMe SSD Storage</li>
                  <li>Advanced DDoS Protection</li>
                  <li>24/7 Support</li>
                </ul>
                <button className="w-full text-center bg-gradient-to-r from-[#28a745] to-orange-500 text-black font-semibold py-3 rounded-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-200">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
