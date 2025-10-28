import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Komponen tombol "Gulir ke Atas" yang muncul saat pengguna menggulir ke bawah.
 * Saat diklik, akan mengarahkan halaman kembali ke bagian paling atas.
 */
const ScrollToTopButton = () => {
  // State untuk melacak apakah tombol harus terlihat
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mendeteksi posisi scroll
  const handleScroll = () => {
    // Tombol akan muncul jika posisi scroll lebih dari 300px dari atas
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk menggulir halaman kembali ke atas dengan halus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Mengaktifkan efek gulir yang halus
    });
  };

  // Menggunakan useEffect untuk menambahkan dan menghapus event listener
  useEffect(() => {
    // Tambahkan event listener saat komponen di-mount
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount untuk mencegah kebocoran memori
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array dependensi kosong memastikan efek berjalan hanya sekali saat mount

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 180 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 50, rotate: 180 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            aria-label="Gulir ke atas halaman"
          >
            <img 
              src="https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp" 
              alt="HeppyCloud Logo" 
              className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-[360deg] object-cover" 
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
