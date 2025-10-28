import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sword, Shield, Axe } from "lucide-react";
import "aos/dist/aos.css";

// Komponen untuk efek mesin ketik pada teks
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </span>
  );
};

// Komponen untuk efek latar belakang yang mengalir dan berkedip
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Efek gradien blur yang berkedip */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 90, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    {/* Efek gradien blur yang mengambang */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-500/20 blur-2xl"
      animate={{
        x: ["-50%", "50%"],
        y: ["-50%", "50%"],
        rotate: [0, 360],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

// Komponen tombol ikon dengan efek hover
const IconButton = ({ Icon }) => (
  <motion.div
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {/* Efek blur yang muncul saat hover */}
    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-all duration-300" />
    {/* Kontainer ikon utama */}
    <div className="relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </motion.div>
);

// Komponen logo gambar
const HeppyCloudLogoImage = () => (
  <motion.img
    src="https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp"
    alt="Heppy Cloud Logo"
    className="w-24 h-24 sm:w-32 sm:h-32 mb-1"
    initial={{ opacity: 0, y: -50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/030014/ffffff?text=Logo"; }}
  />
);

// Komponen untuk teks utama yang digabungkan
const MainTitle = () => (
  <motion.div
    className="flex flex-col items-center text-center text-white mb-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
      HEPPY CLOUD
    </h1>
    <h2 className="text-4xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mt-2">
      Next-Generation
    </h2>
  </motion.div>
);

// Layar pembuka dengan animasi dan efek
const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Atur timer untuk mengakhiri layar pemuatan
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Varian animasi untuk transisi Framer Motion
  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          {/* Latar belakang dengan efek */}
          <BackgroundEffect />

          <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-16">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              {/* Logo gambar di bagian atas */}
              <HeppyCloudLogoImage />
              
              {/* Teks "HEPPY CLOUD" dan "Next-Generation Cloud" digabungkan */}
              <MainTitle />

              {/* Ikon-ikon di bagian tengah */}
              <motion.div
                className="flex justify-center gap-4 sm:gap-6 md:gap-8 my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                {[Axe, Shield, Sword].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.2, type: "spring", stiffness: 120 }}
                  >
                    <IconButton Icon={Icon} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Tautan situs web */}
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
              >
                <a
                  href="https://heppyhost.my.id/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      <TypewriterEffect text="heppyhost.my.id" />
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
