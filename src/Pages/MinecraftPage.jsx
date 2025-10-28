import React from 'react';
import { Search, Server, HardDrive, Cpu, MapPin, CheckCircle, MessageCircle, Globe, ChevronDown, Rocket, Star } from 'lucide-react';
const HostingCard = ({ title, description, price, imageSrc, features, isPopular = false, tag = null, rating, orderLink }) => {
  return (
    <div className="relative p-6 bg-[#1a1b2b] rounded-3xl shadow-2xl border-2 border-transparent transition-all duration-500 hover:border-purple-600 transform hover:-translate-y-2 cursor-pointer flex flex-col">
      {isPopular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          Popular
        </div>
      )}
      {tag && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          {tag}
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2 bg-[#2d2f44] px-3 py-1 rounded-full">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold text-gray-200">{rating}</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center h-32 mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
          onError={(e) => e.target.src = "https://c4.wallpaperflare.com/wallpaper/1010/613/78/minecraft-minecraft-dungeons-minecraft-the-end-enderman-minecraft-4k-hd-wallpaper-preview.jpg"}
        />
      </div>

      <div className="text-center mb-4">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>

      <div className="flex flex-col space-y-2 text-sm mb-6">
        <div className="flex items-center space-x-2">
          <Cpu size={16} className="text-purple-400" />
          <span className="text-gray-300">{features.cpu}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Server size={16} className="text-purple-400" />
          <span className="text-gray-300">{features.ram}</span>
        </div>
        <div className="flex items-center space-x-2">
          <HardDrive size={16} className="text-purple-400" />
          <span className="text-gray-300">{features.storage}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Globe size={16} className="text-purple-400" />
          <span className="text-gray-300">{features.locations}</span>
        </div>
      </div>

      <div className="text-center mb-6 mt-auto">
        <p className="text-sm text-gray-400">Start <span className="text-3xl font-extrabold text-white">{price}</span></p>
      </div>

      {/* We now use the 'orderLink' prop for the href attribute */}
      <a href={orderLink} target="_blank" rel="noopener noreferrer">
        <button className="w-full py-4 px-6 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
          Order Now
        </button>
      </a>

      <div className="text-left mt-6 text-xs text-gray-400 space-y-2 min-h-[100px]">
        {features.keyFeatures.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle size={14} className="text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MinecraftPage = () => {
  // Here's the updated hosting data with unique 'orderLink' for each plan.
const hostingPlans = [
  {
    id: 1,
    title: "SHARED HOSTING",
    description: "Lightweight and reliable hosting for basic needs.",
    price: "Rp5,000/month",
    rating: "4.5",
    imageSrc: "https://c4.wallpaperflare.com/wallpaper/1010/613/78/minecraft-minecraft-dungeons-minecraft-the-end-enderman-minecraft-4k-hd-wallpaper-preview.jpg",
    isPopular: false,
    // Unique link for Shared Hosting
    orderLink: "https://store.heppyhost.my.id/dashboard",
    features: {
      cpu: "Coming Soon",
      ram: "0+ Active Servers",
      storage: "Online 24/7 Support",
      locations: "Regions in Singapore",
      keyFeatures: [
        "One-Click Minecraft Server Installation",
        "Plugin & Mod Support",
        "17 Tbps DDoS Protection",
        "Auto Optimize on Click"
      ],
      icon: "CheckCircle"
    }
  },
  {
    id: 2,
    title: "BASIC HOSTING",
    description: "Powerful performance for medium-level servers.",
    price: "Rp15,000/month",
    rating: "4.7",
    imageSrc: "https://c4.wallpaperflare.com/wallpaper/1010/613/78/minecraft-minecraft-dungeons-minecraft-the-end-enderman-minecraft-4k-hd-wallpaper-preview.jpg",
    isPopular: true,
    // Unique link for Basic Hosting
    orderLink: "https://store.heppyhost.my.id/dashboard",
    features: {
      cpu: "AMD EPYC 4244P",
      ram: "150+ Active Servers",
      storage: "Online 24/7 Support",
      locations: "Regions in Singapore",
      keyFeatures: [
        "One-Click Minecraft Server Installation",
        "Plugin & Mod Support",
        "17 Tbps DDoS Protection",
        "Auto Optimize on Click"
      ],
      icon: "CheckCircle"
    }
  },
  {
    id: 3,
    title: "PREMIUM HOSTING",
    description: "High-end hosting for heavy multitasking.",
    price: "Rp20,000/month",
    rating: "4.9",
    imageSrc: "https://c4.wallpaperflare.com/wallpaper/1010/613/78/minecraft-minecraft-dungeons-minecraft-the-end-enderman-minecraft-4k-hd-wallpaper-preview.jpg",
    isPopular: true,
    // Unique link for Premium Hosting
    orderLink: "https://store.heppyhost.my.id/dashboard",
    features: {
      cpu: "AMD EPYC 4344P",
      ram: "100+ Active Servers",
      storage: "Online 24/7 Support",
      locations: "Regions in Singapore",
      keyFeatures: [
        "One-Click Minecraft Server Installation",
        "Plugin & Mod Support",
        "17 Tbps DDoS Protection",
        "Auto Optimize on Click"
      ],
      icon: "CheckCircle"
    }
  }
];


  return (
    <div className="relative min-h-screen text-white font-sans bg-[#121321]">

      {/* Tambahan: Background hitam semi transparan dengan blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl pointer-events-none"></div>

      <div className="relative z-10 p-4 sm:p-8">

        {/* Header Section */}
        <header className="text-center py-12 px-4">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-500 to-pink-700 animate-gradient-x mb-2">
           Minecraft Hosting
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-medium mb-12">
            Empower your game servers with cutting-edge, enterprise-grade hardware from HeppyCloud.
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center bg-[#1e2034] rounded-full p-2 w-full sm:w-auto flex-grow max-w-lg border border-[#2d2f44]">
              <Search size={20} className="text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Cari paket hosting..."
                className="bg-transparent text-white placeholder-gray-400 outline-none px-3 py-1 flex-grow"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg transition-transform duration-200 hover:scale-105">
                Semua
              </button>
              <button className="bg-[#1e2034] text-gray-300 rounded-full px-6 py-2 font-semibold border border-[#2d2f44] transition-transform duration-200 hover:scale-105 hover:border-purple-500">
                Minecraft Hosting
              </button>
              <button className="bg-[#1e2034] text-gray-300 rounded-full px-6 py-2 font-semibold border border-[#2d2f44] transition-transform duration-200 hover:scale-105 hover:border-purple-500">
                Dedicated Server
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingPlans.map(game => (
              <HostingCard
                key={game.id}
                title={game.title}
                description={game.description}
                price={game.price}
                imageSrc={game.imageSrc}
                isPopular={game.isPopular}
                tag={game.tag}
                rating={game.rating}
                features={game.features}
                // Pass the new orderLink prop to the card component
                orderLink={game.orderLink}
              />
            ))}
          </div>
        </main>
        
        {/* New "Still Have Questions?" Section */}
        <section className="mt-24 p-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                Still Have Questions?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="https://discord.gg/heppystore" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center justify-center space-x-2 py-3 px-6 rounded-full text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transition-transform duration-300 hover:scale-105">
                        <Rocket size={20} />
                        <span>Join Our Discord</span>
                    </button>
                </a>
                <a href="https://discord.gg/heppystore" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center justify-center space-x-2 py-3 px-6 rounded-full text-gray-300 font-bold border-2 border-gray-600 bg-[#1e2034] shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-600">
                        <MessageCircle size={20} />
                        <span>Ticket Support</span>
                    </button>
                </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-center text-gray-400">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#1e2034] rounded-full mb-2">
                        <CheckCircle size={24} className="text-green-500" />
                    </div>
                    <span className="font-semibold text-sm">24/7 Support</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#1e2034] rounded-full mb-2">
                        <Star size={24} className="text-yellow-400" />
                    </div>
                    <span className="font-semibold text-sm">&lt; 5min Response</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#1e2034] rounded-full mb-2">
                        <Globe size={24} className="text-blue-400" />
                    </div>
                    <span className="font-semibold text-sm">Hosting Without Borders</span>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default MinecraftPage;
