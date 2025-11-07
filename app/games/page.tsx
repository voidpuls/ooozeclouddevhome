'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const countryPricing = {
  de: {
    currency: "EUR",
    location: "Frankfurt",
    name: "Germany",
    multiplier: 1.0,
    basePing: 15,
  },
  pl: {
    currency: "PLN",
    location: "Warsaw",
    name: "Poland",
    multiplier: 0.85,
    basePing: 25,
  },
  uk: {
    currency: "GBP",
    location: "London",
    name: "United Kingdom",
    multiplier: 0.9,
    basePing: 30,
  },
  ro: {
    currency: "RON",
    location: "Bucharest",
    name: "Romania",
    multiplier: 0.8,
    basePing: 35,
  }
};

// Add game categories and tags
const gameCategories = {
  survival: "Survival",
  simulation: "Simulation",
  sandbox: "Sandbox",
  action: "Action",
  racing: "Racing",
  rpg: "RPG",
  horror: "Horror",
  strategy: "Strategy"
} as const;

type GameCategory = keyof typeof gameCategories;

interface Game {
  name: string;
  description: string;
  image: string;
  features: string[];
  basePrice: number;
  categories: GameCategory[];
  tags: string[];
  popularity: number; // 1-10 arası popülerlik puanı
}

const baseGames: Game[] = [
  {
    name: "Minecraft",
    description: "High-performance Minecraft servers with mod support and instant setup.",
    image: "/images/minecraft.jpg",
    features: [
      "One-Click Modpack Installation",
      "Automatic Backups",
      "DDoS Protection",
      "24/7 Support"
    ],
    basePrice: 9.99,
    categories: ["sandbox", "survival"],
    tags: ["multiplayer", "modding", "building", "crafting"],
    popularity: 10
  },
  {
    name: "Rust",
    description: "Survival multiplayer servers with advanced anti-cheat and backup systems.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
    features: [
      "DDoS Protection",
      "Anti-Cheat System",
      "Regular Backups",
      "Wipe Schedule Options"
    ],
    basePrice: 19.99,
    categories: ["survival", "action"],
    tags: ["multiplayer", "pvp", "base-building", "crafting"],
    popularity: 9
  },
  {
    name: "Palworld",
    description: "Dedicated Palworld servers with automatic updates and optimization.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/library_600x900.jpg",
    features: [
      "Performance Optimization",
      "Automatic Updates",
      "Regular Backups",
      "24/7 Support"
    ],
    basePrice: 16.99,
    categories: ["survival", "rpg"],
    tags: ["multiplayer", "creature-collection", "base-building", "crafting"],
    popularity: 9
  },
  {
    name: "ARK: Survival Evolved",
    description: "Powerful ARK servers with mod support and cluster capability.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg",
    features: [
      "Cluster Support",
      "Mod Manager",
      "Auto-Updates",
      "Backup System"
    ],
    basePrice: 24.99,
    categories: ["survival", "action"],
    tags: ["dinosaurs", "multiplayer", "base-building", "modding"],
    popularity: 8
  },
  {
    name: "Garry's Mod",
    description: "Versatile GMod servers with extensive addon support and gamemode options.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg",
    features: [
      "Addon Support",
      "Multiple Gamemodes",
      "Workshop Integration",
      "Custom Configuration"
    ],
    basePrice: 10.99,
    categories: ["sandbox"],
    tags: ["physics", "modding", "multiplayer", "creative"],
    popularity: 8
  },
  {
    name: "DayZ",
    description: "High-performance DayZ servers with mod support and anti-cheat.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg",
    features: [
      "Mod Support",
      "Anti-Cheat System",
      "Regular Backups",
      "Custom Settings"
    ],
    basePrice: 21.99,
    categories: ["survival", "action"],
    tags: ["zombies", "pvp", "open-world", "hardcore"],
    popularity: 7
  },
  {
    name: "Project Zomboid",
    description: "Zombie survival servers with extensive mod support and customization.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg",
    features: [
      "Mod Support",
      "Custom Settings",
      "Backup System",
      "Workshop Integration"
    ],
    basePrice: 13.99,
    categories: ["survival", "simulation"],
    tags: ["zombies", "multiplayer", "isometric", "crafting"],
    popularity: 7
  },
  {
    name: "7 Days To Die",
    description: "Zombie survival servers with advanced configuration options.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg",
    features: [
      "Custom Configuration",
      "Mod Support",
      "Automatic Updates",
      "Backup System"
    ],
    basePrice: 14.99,
    categories: ["survival", "horror"],
    tags: ["zombies", "base-building", "crafting", "multiplayer"],
    popularity: 6
  },
  {
    name: "Valheim",
    description: "Dedicated Valheim servers with automatic updates and backups.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
    features: [
      "Automatic Updates",
      "World Backups",
      "Mod Support",
      "Community Tools"
    ],
    basePrice: 14.99,
    categories: ["survival", "rpg"],
    tags: ["vikings", "co-op", "base-building", "exploration"],
    popularity: 7
  },
  {
    name: "Euro Truck Simulator 2",
    description: "Multiplayer trucking servers with TruckersMP support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",
    features: [
      "TruckersMP Support",
      "Custom Events",
      "Regular Updates",
      "Community Features"
    ],
    basePrice: 12.99,
    categories: ["simulation"],
    tags: ["driving", "multiplayer", "realistic", "economy"],
    popularity: 6
  },
  {
    name: "Conan Exiles",
    description: "Dedicated Conan Exiles servers with mod support and advanced management.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/440900/header.jpg",
    features: [
      "Mod Support",
      "Admin Tools",
      "Regular Backups",
      "Performance Monitoring"
    ],
    basePrice: 19.99,
    categories: ["survival", "action"],
    tags: ["fantasy", "base-building", "pvp", "crafting"],
    popularity: 6
  },
  {
    name: "V Rising",
    description: "Vampire survival servers with advanced configuration and mod support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg",
    features: [
      "Mod Support",
      "Custom Settings",
      "Regular Backups",
      "Performance Optimization"
    ],
    basePrice: 15.99,
    categories: ["survival", "action"],
    tags: ["vampires", "base-building", "pvp", "crafting"],
    popularity: 7
  },
  {
    name: "Stardew Valley",
    description: "Multiplayer farming servers with mod support and automated backups.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
    features: [
      "Mod Support",
      "Auto Backups",
      "Custom Settings",
      "24/7 Uptime"
    ],
    basePrice: 9.99,
    categories: ["simulation", "rpg"],
    tags: ["farming", "co-op", "pixel-art", "relaxing"],
    popularity: 8
  },
  {
    name: "Left 4 Dead 2",
    description: "Classic zombie survival servers with custom campaign support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg",
    features: [
      "Custom Campaigns",
      "Anti-Cheat",
      "Low Latency",
      "Performance Optimization"
    ],
    basePrice: 9.99,
    categories: ["action", "horror"],
    tags: ["zombies", "co-op", "fps", "survival"],
    popularity: 7
  },
  {
    name: "Unturned",
    description: "Zombie survival servers with workshop support and custom configurations.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg",
    features: [
      "Workshop Support",
      "Custom Maps",
      "Plugin System",
      "Regular Updates"
    ],
    basePrice: 8.99,
    categories: ["survival", "action"],
    tags: ["zombies", "multiplayer", "crafting", "free-to-play"],
    popularity: 6
  },
  {
    name: "Assetto Corsa",
    description: "High-performance racing simulation servers with extensive mod support.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/header.jpg",
    features: [
      "Custom Mod Support",
      "Advanced Physics",
      "Low Latency",
      "Performance Monitoring"
    ],
    basePrice: 14.99,
    categories: ["simulation", "racing"],
    tags: ["racing", "realistic", "modding", "multiplayer"],
    popularity: 5
  },
  {
    name: "SCP: Secret Laboratory",
    description: "Dedicated SCP servers with custom plugins and moderation tools.",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/700330/header.jpg",
    features: [
      "Plugin Support",
      "Admin Tools",
      "Anti-Cheat",
      "Regular Updates"
    ],
    basePrice: 11.99,
    categories: ["action", "horror"],
    tags: ["scp", "multiplayer", "horror", "free-to-play"],
    popularity: 5
  }
];

export default function Games() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredGames = baseGames
    .filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || game.categories.includes(selectedCategory as GameCategory);
      const matchesPrice = game.basePrice >= priceRange[0] && game.basePrice <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0r from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
      </div>

      {/* Hero Section with Stats */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#28a745] via-orange-500 to-[#28a745] mb-6 tracking-tight">
              Game Servers
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Experience next-level gaming with our optimized servers.
              Deploy instantly and start playing with your friends.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#28a745] mb-2">{baseGames.length}+</div>
                <div className="text-gray-400">Games Available</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#28a745] mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#28a745] mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#28a745] mb-2">1-Click</div>
                <div className="text-gray-400">Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <div className="flex flex-col gap-6">
              {/* Search and Filter Toggle */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search games..."
                      className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#28a745] focus:border-transparent transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-4 bg-black/30 border border-white/10 rounded-xl text-white hover:bg-black/50 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Filters
                  {(selectedCategory || priceRange[0] > 0 || priceRange[1] < 30) && (
                    <span className="w-2 h-2 rounded-full bg-[#28a745]"></span>
                  )}
                </button>
              </div>

              {/* Expanded Filters */}
              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/10">
                  {/* Categories */}
                  <div className="md:col-span-7">
                    <h3 className="text-white font-medium mb-3">Categories</h3>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === null
                            ? 'bg-gradient-to-r from-[#28a745] to-orange-500 text-black shadow-lg shadow-orange-500/20'
                            : 'bg-black/30 text-gray-400 hover:bg-black/50 border border-white/10'
                        }`}
                      >
                        All Games
                      </button>
                      {Object.entries(gameCategories).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedCategory === key
                              ? 'bg-gradient-to-r from-[#28a745] to-orange-500 text-black shadow-lg shadow-orange-500/20'
                              : 'bg-black/30 text-gray-400 hover:bg-black/50 border border-white/10'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="md:col-span-5">
                    <h3 className="text-white font-medium mb-3">Price Range</h3>
                    <div className="px-4">
                      <input
                        type="range"
                        min="0"
                        max="30"
                        step="5"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer accent-[#28a745]"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>€0</span>
                        <span>€{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Results Count */}
        <div className="mb-8 text-center">
          <span className="text-gray-400">Showing </span>
          <span className="text-white font-medium">{filteredGames.length}</span>
          <span className="text-gray-400"> of </span>
          <span className="text-white font-medium">{baseGames.length}</span>
          <span className="text-gray-400"> games</span>
        </div>

        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-white mb-2">No Games Found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <div
                key={game.name}
                className="group relative flex flex-col"
                onMouseEnter={() => setActiveGame(game.name)}
                onMouseLeave={() => setActiveGame(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#28a745]/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#28a745]/50 transition-all duration-300 flex flex-col flex-1">
                  <div className="relative h-56">
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#28a745] transition-colors">
                        {game.name}
                      </h3>
                      <div className="text-xl font-bold text-[#28a745]">
                        €{game.basePrice.toFixed(2)}
                        <span className="text-sm text-gray-400 ml-2">/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-400 mb-4">{game.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.categories.map((category) => (
                        <span key={category} className="px-3 py-1 bg-gradient-to-r from-[#28a745]/10 to-orange-500/10 text-[#28a745] text-sm rounded-full border border-[#28a745]/20">
                          {gameCategories[category as keyof typeof gameCategories]}
                        </span>
                      ))}
                      {game.tags?.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-black/30 text-gray-400 text-sm rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {game.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 text-[#28a745] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/games/${game.name.toLowerCase().replace(/[:']/g, '').replace(/\s+/g, '-')}`}
                      className="block w-full text-center bg-gradient-to-r from-[#28a745] to-orange-500 text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 