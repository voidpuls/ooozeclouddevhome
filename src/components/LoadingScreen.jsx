import React from "react";
import { motion } from "framer-motion";

// URL logo yang akan digunakan untuk animasi loading
const logoUrl = "https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp";

// Komponen LoadingScreen baru untuk transisi navigasi
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center"
    >
      <motion.img
        src={logoUrl}
        alt="Loading..."
        className="w-24 h-24 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.5,
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
