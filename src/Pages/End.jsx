import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Zap, Globe } from 'lucide-react';
import 'aos/dist/aos.css';

// Komponen EndPage yang menampilkan bagian "Still Have Questions?"
// Menggunakan memo untuk optimasi rendering
const End = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="text-white px-[5%] sm:px-[5%] lg:px-[10%] font-inter py-16"
  >
    <div className="container mx-auto text-center">
      <div data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          Still Have Questions?
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Our support team is available 24/7 to help you with any questions or concerns.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8" data-aos="fade-up" data-aos-delay="200">
        <a href="https://discord.gg/heppystore" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:scale-105 transition-transform duration-300 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord-logo"><path d="M10.894 4.54a1 1 0 0 1 1.712 0l2.368 4.735a1 1 0 0 0 .9.516h4.887a1 1 0 0 1 .9 1.407l-3.376 6.753a1 1 0 0 1-.894.549H4.116a1 1 0 0 1-.894-.549L.846 11.198a1 1 0 0 1 .9-1.407h4.887a1 1 0 0 0 .9-.516zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>
          <span>Join Our Discord</span>
        </a>
        <a href="/" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 bg-transparent hover:bg-white/10 transition-colors duration-300 shadow-lg">
          <Mail size={24} />
          <span>Ticket Support</span>
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="400">
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={20} className="text-violet-400" />
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Zap size={20} className="text-violet-400" />
          <span>&lt; 5min Response</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Globe size={20} className="text-violet-400" />
          <span>Hosting Without Borders</span>
        </div>
      </div>
    </div>
  </motion.div>
));

export default End;
