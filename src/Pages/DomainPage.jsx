import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.2
    },
  },
};

const DomainPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center p-4 overflow-hidden">
      {/* Animasi Latar Belakang Elegan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <motion.div
        className="relative z-10 text-center max-w-2xl px-6 py-12 rounded-3xl shadow-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ikon yang dianimasikan */}
        <motion.div variants={iconVariants} className="mb-6">
          <svg className="h-20 w-20 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5.06a4.004 4.004 0 013.916 3.841A6.002 6.002 0 0012 21a6.002 6.002 0 003.024-5.159 4.002 4.002 0 013.916-3.841h2.005M9.137 19.988A10.057 10.057 0 0112 21a10.057 10.057 0 012.863-1.012M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6"
          variants={itemVariants}
        >
          Domain
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Untuk sekarang, order di discord dulu.
        </motion.p>

        <motion.a
          href="https://discord.gg/heppystore" // Ganti dengan link Discord Anda
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg transform active:scale-95"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          Order di Discord
        </motion.a>
      </motion.div>
      <style>{`
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default DomainPage;
