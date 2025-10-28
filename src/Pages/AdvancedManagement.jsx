import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, TerminalSquare, FolderKanban, Database, FileText, Clock, HardDrive, Lock, Settings, Egg, Puzzle, Cog, Users, Terminal, Rocket, Sparkles } from 'lucide-react';

// Define the advanced features data
const ADVANCED_FEATURES = [
  {
    icon: <Monitor className="text-purple-400" size={32} />,
    title: "Live Server Monitoring",
    description: "Track CPU, RAM, storage, and network activity in real-time with precise analytics and performance graphs.",
  },
  {
    icon: <TerminalSquare className="text-pink-400" size={32} />,
    title: "Pro Command Console",
    description: "Execute commands instantly with syntax highlighting, full command history, and custom script integration.",
  },
  {
    icon: <FolderKanban className="text-indigo-400" size={32} />,
    title: "Built-in File Manager",
    description: "Easily upload, edit, and manage files with drag-and-drop, text editor, and ZIP archive support.",
  },
  {
    icon: <Database className="text-green-400" size={32} />,
    title: "Database Management",
    description: "Full MySQL access with automated backups and secure remote database connections.",
  },
];

// Define the sidebar items
const SIDEBAR_ITEMS = [
  {
    icon: <Terminal className="text-gray-400" size={20} />,
    title: "Console",
  },
  {
    icon: <FileText className="text-gray-400" size={20} />,
    title: "File Management",
  },
  {
    icon: <Database className="text-gray-400" size={20} />,
    title: "Database",
  },
  {
    icon: <HardDrive className="text-gray-400" size={20} />,
    title: "Backup System",
  },
  {
    icon: <Settings className="text-gray-400" size={20} />,
    title: "Manage Startups",
  },
  {
    icon: <Rocket className="text-gray-400" size={20} />,
    title: "Auto Optimize",
  },
  {
    icon: <Egg className="text-gray-400" size={20} />,
    title: "Eggs Changer",
  },
  {
    icon: <Puzzle className="text-gray-400" size={20} />,
    title: "Plugin Manager",
  },
  {
    icon: <Cog className="text-gray-400" size={20} />,
    title: "Mods Manager",
  },
  {
    icon: <Users className="text-gray-400" size={20} />,
    title: "Player Manager",
  },
];

// Memoized feature card component
const FeaturesCard = memo(({ icon, title, description }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-start text-left space-y-4 transition-all duration-300 hover:bg-white/10 hover:scale-105 shadow-xl"
  >
    {icon}
    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-sm text-gray-400 font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
));

// Main page component
const AdvancedManagementPage = memo(() => {
  // A map of titles to placeholder image URLs
const imageMap = {
  "Server Management": "/Management/ServerManagement.png",
  "Console": "/Management/Console.png",
  "File Management": "/Management/FileManager.png",
  "Database": "/Management/Databases.png",
  "Backup System": "/Management/Backups.png",
  "Manage Startups": "/Management/Startup.png",
  "Auto Optimize": "/Management/AutoOptimize.png",
  "Eggs Changer": "/Management/EggChanger.png",
  "Plugin Manager": "/Management/PluginManager.png",
  "Mods Manager": "/Management/Mods.png",
  "Player Manager": "/Management/PlayerManager.png",
};

  // Set initial state to "Server Management" which acts as the dashboard
  const initialItem = "Server Management";
  const [activeItem, setActiveItem] = useState(initialItem);
  const [currentImage, setCurrentImage] = useState(imageMap[initialItem]);

  // Function to handle sidebar item clicks
  const handleItemClick = (title) => {
    setActiveItem(title);
    setCurrentImage(imageMap[title]);
    console.log(`Sidebar item clicked: ${title}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10 md:py-20 lg:px-[10%] flex flex-col items-center text-center relative z-10"
      id="Advanced-Management"
    >
      <div className="text-center mb-8 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          Advanced Management
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Take complete control of your Minecraft and game servers with HeppyCloud’s next-generation Pterodactyl panel. Optimized for speed, built for reliability, and packed with enterprise-level features.
        </p>
      </div>

      {/* Main content container with a single, rounded background */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 lg:p-6 shadow-2xl"
      >
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4 flex-shrink-0 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col space-y-2">
          {/* Server Management header, now clickable */}
          <motion.div
            className={`flex items-center space-x-3 p-3 rounded-xl transition-colors duration-200 cursor-pointer group hover:bg-white/5 ${activeItem === 'Server Management' ? 'bg-white/10' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleItemClick('Server Management')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            <span className="text-white font-semibold">Server Management</span>
          </motion.div>
          <div className="h-0.5 bg-white/10 my-2"></div>
          
          {/* Other sidebar items */}
          {SIDEBAR_ITEMS.map((item, index) => (
            <motion.div
              key={index} 
              className={`flex items-center justify-between p-3 rounded-xl transition-colors duration-200 cursor-pointer group hover:bg-white/5 ${activeItem === item.title ? 'bg-white/10' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleItemClick(item.title)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-sm text-gray-300 group-hover:text-white">{item.title}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-white"><path d="M9 18l6-6-6-6"></path></svg>
            </motion.div>
          ))}

        <motion.div
          className="mt-4 p-6 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-violet-700 shadow-xl relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 z-0">
            <Sparkles className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white/10 rotate-45" size={150} />
            <Sparkles className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 text-white/10" size={120} />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-white/20 p-3 rounded-full mb-3 shadow-lg">
              <Rocket className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-white leading-tight">
              Free Setup
            </h4>
            <p className="text-xs text-white/80 mt-1">
              We now offer Free Setup services for all users!
            </p>
            <button
              onClick={() => window.open("https://discord.gg/heppystore", "_blank")}
              className="mt-4 px-6 py-2 bg-white text-violet-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Discord
            </button>
          </div>
        </motion.div>

        </div>

        {/* Main Content Area: Image and Feature Cards */}
        <div className="w-full relative overflow-hidden flex-grow flex flex-col gap-4">
          {/* Main Image Display */}
          <div className="w-full relative overflow-hidden rounded-2xl">
            <img
              src={currentImage}
              alt={`HeppyCloud Dashboard - ${activeItem} section`}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Feature cards section moved to be at the bottom */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
            {ADVANCED_FEATURES.map((feature, index) => (
              <FeaturesCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});

// Rename the component to App for a complete, self-contained example
export default AdvancedManagementPage;
