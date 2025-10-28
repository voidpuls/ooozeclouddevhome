import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Book, Headset, Gamepad2, Globe, ChevronDown, Server, HardDrive, Link as LinkIcon, Newspaper, BookOpen, Users } from "lucide-react";



// Item navigasi, diperbarui untuk mencantumkan tautan ke halaman baru dan tautan anchor

// Item navigasi yang sudah diperbaiki
const navItems = [
  { href: "/", label: "Home", icon: <Home size={18} /> },
  { 
    label: "Services", 
    icon: <Globe size={18} />,
    dropdown: [
      { href: "/Games", label: "Game Server", sub: "High-performance game hosting.", icon: <Server size={18} /> },
      { href: "/PrivateNode", label: "PrivateNode", sub: "Dedicated resources for maximum performance.", icon: <HardDrive size={18} /> },
      { href: "/Domain", label: "Domain", sub: "Your website's unique address.", icon: <LinkIcon size={18} /> },
    ] 
  },
  { 
    label: "Games", 
    icon: <Gamepad2 size={18} />,
    dropdown: [
      { href: "/Minecraft", label: "Minecraft", sub: "Java & Bedrock Edition", icon: "https://gamehost.26bz.online/images/icons/mc.png" },
      { href: "/Discord", label: "Discord", sub: "Hosting Bot & Server", icon: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210" },
      { href: "/Samp", label: "SA:MP", sub: "Multiplayer Mod for SA:MP", icon: "https://play-lh.googleusercontent.com/M-cdx4P7FYmzHjijKtk8qNJcPRGQyVK6Z2HlJ48l07gKlkpfYSr0bz-Xq9RreeLfbh31" },
      { href: "/Games", label: "View All Games", sub: "Browse our full game list", icon: "https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp" },
    ]
  },
  { 
    label: "Resources", 
    icon: <Book size={18} />,
dropdown: [
  { 
    href: "https://store.heppyhost.my.id/news", 
    label: "News", 
    icon: <Newspaper size={18} />, 
    sub: "Latest updates" 
  },
  { 
    href: "/Documentation", 
    label: "Documentation", 
    icon: <BookOpen size={18} />, 
    sub: "Guides and tutorials" 
  },
  { 
    href: "/OurTeam", 
    label: "Our Team", 
    icon: <Users size={18} />, 
    sub: "Meet the team" 
  },
]
  },
  { href: "/Support", label: "Support", icon: <Headset size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Efek untuk mengelola state scroll untuk latar belakang navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk menutup dropdown saat mengklik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".relative.group")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Efek untuk mengelola overflow body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fungsi untuk menangani scroll ke anchor
  const scrollToSection = (e, href) => {
    e.preventDefault();
    // Logika khusus untuk link "Home" agar selalu kembali ke atas halaman
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Logika untuk link anchor lainnya dengan offset
      const section = document.querySelector(href);
      if (section) {
        const top = section.offsetTop - 100; // Offset yang disesuaikan untuk navbar tetap
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    }
    // Tutup menu mobile dan dropdown setelah mengklik
    setIsOpen(false);
    setOpenDropdown(null);
  };
  
  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? "bg-[#030014]"
          : scrolled
          ? "bg-[#030014]/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo dan Nama untuk Desktop */}
          <Link
            to="/"
            className="flex-shrink-0 items-center space-x-2 hidden md:flex"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <img 
              src="https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp" 
              alt="HeppyCloud Logo" 
              className="h-8 w-8 rounded-full object-cover" 
            />
            <span
              className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
            >
              HEPPY CLOUD
            </span>
          </Link>

          {/* Logo untuk Mobile */}
          <Link
            to="/"
            className="flex-shrink-0 items-center space-x-2 flex md:hidden"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <img 
              src="https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp" 
              alt="HeppyCloud Logo" 
              className="h-8 w-8 rounded-full object-cover" 
            />
            <span
              className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
            >
              HEPPY CLOUD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map(item => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdown(item.label)}
                        className={`group relative px-1 py-2 text-sm font-medium flex items-center space-x-2 transition-colors duration-300 focus:outline-none ${
                          openDropdown === item.label
                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                            : "text-[#e2d3fd] hover:text-white"
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 p-4 bg-[#110c22] rounded-xl shadow-lg border border-white/10 flex flex-col space-y-2 min-w-[250px]"
                          >
                            {item.dropdown.map(dropItem => (
                              dropItem.href.startsWith("#") ? (
                                <a
                                  key={dropItem.label}
                                  href={dropItem.href}
                                  onClick={(e) => scrollToSection(e, dropItem.href)}
                                  className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                                >
                                  {/* Render ikon atau gambar */}
                                  {typeof dropItem.icon === 'string' ? (
                                      <img src={dropItem.icon} alt={dropItem.label} className="w-5 h-5 object-contain" />
                                  ) : (
                                      <div className="w-5 h-5 flex items-center justify-center text-purple-400">
                                          {dropItem.icon}
                                      </div>
                                  )}
                                  <div className="flex flex-col items-start">
                                    <span className="text-sm font-semibold text-white">{dropItem.label}</span>
                                    {dropItem.sub && <span className="text-xs text-gray-400 mt-1">{dropItem.sub}</span>}
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                                >
                                  {/* Render ikon atau gambar */}
                                  {typeof dropItem.icon === 'string' ? (
                                      <img src={dropItem.icon} alt={dropItem.label} className="w-5 h-5 object-contain" />
                                  ) : (
                                      <div className="w-5 h-5 flex items-center justify-center text-purple-400">
                                          {dropItem.icon}
                                      </div>
                                  )}
                                  <div className="flex flex-col items-start">
                                    <span className="text-sm font-semibold text-white">{dropItem.label}</span>
                                    {dropItem.sub && <span className="text-xs text-gray-400 mt-1">{dropItem.sub}</span>}
                                  </div>
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Logika kondisional untuk menggunakan Link vs a untuk item level atas
                    item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        onClick={e => scrollToSection(e, item.href)}
                        className="group relative px-1 py-2 text-sm font-medium flex items-center space-x-2"
                      >
                         <motion.div
                            className="relative z-10 transition-colors duration-300 flex items-center space-x-2"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="relative z-10 text-[#e2d3fd] group-hover:text-white transition-colors duration-300">
                              {item.icon}
                            </span>
                            <span className="relative z-10 text-[#e2d3fd] group-hover:text-white transition-colors duration-300">
                              {item.label}
                            </span>
                          </motion.div>
                          <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                          />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group relative px-1 py-2 text-sm font-medium flex items-center space-x-2"
                      >
                        <motion.div
                            className="relative z-10 transition-colors duration-300 flex items-center space-x-2"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="relative z-10 text-[#e2d3fd] group-hover:text-white transition-colors duration-300">
                              {item.icon}
                            </span>
                            <span className="relative z-10 text-[#e2d3fd] group-hover:text-white transition-colors duration-300">
                              {item.label}
                            </span>
                          </motion.div>
                          <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                          />
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

        {/* Tombol Aksi */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://panel.heppyhost.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-[#e2d3fd] transition-colors duration-300 hover:text-white"
          >
            Game Panel
          </a>
          <a
            href="https://store.heppyhost.my.id/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Client Area
          </a>
        </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdown(item.label)}
                        className={`w-full text-left flex items-center justify-between px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                          openDropdown === item.label
                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                            : "text-[#e2d3fd] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transform transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {item.dropdown.map(dropItem => (
                              dropItem.href.startsWith("#") ? (
                                <a
                                  key={dropItem.label}
                                  href={dropItem.href}
                                  onClick={(e) => scrollToSection(e, dropItem.href)}
                                  className="flex items-center space-x-4 px-8 py-2 text-sm text-gray-300 hover:text-white"
                                >
                                  {/* Render ikon atau gambar */}
                                  {typeof dropItem.icon === 'string' ? (
                                      <img src={dropItem.icon} alt={dropItem.label} className="w-5 h-5 object-contain" />
                                  ) : (
                                      <div className="w-5 h-5 flex items-center justify-center text-purple-400">
                                          {dropItem.icon}
                                      </div>
                                  )}
                                  <span>{dropItem.label}</span>
                                </a>
                              ) : (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.href}
                                  onClick={() => setIsOpen(false)} // Tutup menu saat navigasi
                                  className="flex items-center space-x-4 px-8 py-2 text-sm text-gray-300 hover:text-white"
                                >
                                  {/* Render ikon atau gambar */}
                                  {typeof dropItem.icon === 'string' ? (
                                      <img src={dropItem.icon} alt={dropItem.label} className="w-5 h-5 object-contain" />
                                  ) : (
                                      <div className="w-5 h-5 flex items-center justify-center text-purple-400">
                                          {dropItem.icon}
                                      </div>
                                  )}
                                  <span>{dropItem.label}</span>
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        onClick={e => scrollToSection(e, item.href)}
                        className={`flex items-center space-x-4 px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                          item.label === "Home" ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold" : "text-[#e2d3fd] hover:text-white"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                          item.label === "Home" ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold" : "text-[#e2d3fd] hover:text-white"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )
                  )}
                </div>
              ))}
              {/* Tombol Aksi Mobile */}
              <div className="flex flex-col space-y-4 px-4 mt-4">
                <a href="#game-panel" onClick={e => scrollToSection(e, "#game-panel")} className="block w-full text-center px-4 py-3 text-lg font-semibold text-[#e2d3fd] rounded-full border border-[#a855f7] transition-colors duration-300 hover:text-white hover:bg-[#a855f7]/10">
                  Game Panel
                </a>
                <a href="#client-area" onClick={e => scrollToSection(e, "#client-area")} className="block w-full text-center px-4 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                  Client Area
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
