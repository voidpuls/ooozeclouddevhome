import React, { useState } from 'react';
import { Search, Server, HardDrive, Cpu, MapPin, CheckCircle, MessageCircle, Globe, ChevronDown, Rocket, Star, ChevronRight } from 'lucide-react';
const StatCard = ({ value, label }) => {
  return (
    <div className="p-4 sm:p-6 bg-[#1e1a30] rounded-2xl shadow-xl border border-[#2d2f44] transform transition-all duration-300 hover:scale-105 hover:bg-[#25203a] cursor-pointer">
      <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">{value}</p>
      <p className="text-gray-300 font-medium text-sm sm:text-base">{label}</p>
    </div>
  );
};

// Komponen untuk menampilkan kartu game di bagian konten utama
const GameCard = ({ title, category, price, image, url }) => {
  return (
    <a href={url} className="relative h-64 w-full rounded-3xl bg-[#1e1a30] overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#2d2f44] cursor-pointer group">
      <div className="absolute inset-0 p-4">
        <img src={image} alt={`Game image for ${title}`} className="w-full h-full rounded-2xl object-cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-between p-6">
        <div className="text-left mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
        <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <span className="font-bold text-lg text-purple-500">{price}</span>
        </div>
      </div>
    </a>
  );
};

// Komponen untuk menampilkan kartu game di header baru
const PopularGameCard = ({ title, image, url }) => {
  return (
    <a href={url} className="flex items-center p-4 bg-[#1e1a30] rounded-2xl shadow-xl border border-[#2d2f44] cursor-pointer hover:bg-[#25203a] transition-colors duration-300 group">
      <div className="w-12 h-12 bg-gray-600 rounded-lg flex-shrink-0 flex items-center justify-center mr-4">
        <img src={image} alt={`Game icon for ${title}`} className="w-full h-full rounded-lg object-cover" />
      </div>
      <span className="flex-grow font-semibold text-white group-hover:text-pink-400 transition-colors">{title}</span>
      <ChevronRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
    </a>
  );
};

// Komponen utama untuk halaman GamesPage
const GamesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All GamesPage');
  const [searchTerm, setSearchTerm] = useState('');

  // Data dummy untuk kartu game
  const GamesPage = [
    { id: 1, title: 'Minecraft', category: 'HeppyCloud | Next-Generation', price: 'Rp5.000', image: 'https://c4.wallpaperflare.com/wallpaper/834/1013/226/minecraft-games-posters-hd-wallpaper-preview.jpg', url: '/Minecraft' },
    { id: 2, title: 'Discord', category: 'HeppyCloud | Next-Generation', price: 'Rp5.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN0dV2zbKKuXpYwpuwe5CJsrlDP1KchtO2g&s', url: '/Discord' },
    { id: 3, title: 'SA:MP', category: 'HeppyCloud | Next-Generation', price: 'Rp5.000', image: 'https://gamebrott.com/wp-content/uploads/2025/06/Nama-RP-GTA-SAMP-2-1-1024x576.webp', url: '/Samp' },
  ];

  // Data dummy untuk popular game
  const popularGamesPage = [
    { id: 1, title: 'Minecraft', image: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png', url: '/Minecraft' },
    { id: 2, title: 'Discord', image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210', url: '/Discord' },
    { id: 3, title: 'SA:MP', image: 'https://play-lh.googleusercontent.com/S9iHZNrsP1od6ggCIGjQHV5Ex2bO20_jcDP-mfo6NtYB2MzAA3ANdQh8OQzp1tUGgfQ=w600-h300-pc0xffffff-pd', url: '/Samp' },
  ];

  return (
    <div className="min-h-screen bg-[#121321] text-white font-sans">
      <div className="relative z-10 p-4 sm:p-8 bg-black/40 backdrop-blur-xl">
        <div className="w-full h-px my-8"></div>

        {/* Header Section */}
        <header className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 relative">
          <div className="relative p-4 md:p-8 rounded-3xl bg-[#121321] shadow-2xl flex flex-col md:flex-row gap-8">
            {/* Left side with text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse-slow">
                Level Up Your <br />
                <span className="text-white">Gaming Empire</span>
              </h1>
              <p className="text-gray-400 max-w-2xl text-sm sm:text-base mb-4 sm:mb-8">
                Experience next-generation game server hosting with instant deployment, military-grade protection, and performance that defies expectations
              </p>
              <a href="https://store.heppyhost.my.id/dashboard" className="block text-center w-max bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </a>
            </div>

            {/* Right side with popular GamesPage */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Popular GamesPage</h3>
              <div className="space-y-4">
                {popularGamesPage.map((game) => (
                  <PopularGameCard key={game.id} title={game.title} image={game.image} url={game.url} />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-200">
            Available Game Servers
            
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
            Choose from our selection of optimized game servers. Each server is configured for maximum performance and comes with easy-to-use management tools.
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="relative w-full mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search GamesPage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1e1a30] rounded-full py-2 px-6 pl-12 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors border border-[#2d2f44]"
              />
              <Search size={20} className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Game card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GamesPage.map((game) => (
              <GameCard key={game.id} title={game.title} category={game.category} price={game.price} image={game.image} url={game.url} />
            ))}
          </div>

          {/* Footer link */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>
              Can't find your game? <a href="https://discord.gg/heppystore" className="text-pink-400 hover:underline">Request a listing.</a>
              
            </p>
          </div>
        </main>
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

const App = () => {
    return <GamesPage />;
};

export default App;
