import React from 'react';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom
import {
  FaDiscord,
  FaServer,
  FaUsers,
  FaBuilding,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

/**
 * Komponen Footer yang responsif dengan tata letak kolom yang lebih minimalis.
 */
const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-10 px-6 sm:px-10 lg:px-20 border-t border-gray-700/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-700/50 pb-8 mb-8">
          
          {/* Kolom 1: Services */}
          <div className="space-y-4">
            <div className="flex items-center text-lg font-semibold text-gray-200 mb-2">
              <FaServer className="mr-2 text-purple-400" />
              <span>Services</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/games" className="hover:text-white transition-colors duration-200">Game Servers</Link>
              </li>
              <li>
                <Link to="/PrivateNode" className="hover:text-white transition-colors duration-200">Private Node</Link>
              </li>
              <li>
                <Link to="/Domain" className="hover:text-white transition-colors duration-200">Domain</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2: Clients */}
          <div className="space-y-4">
            <div className="flex items-center text-lg font-semibold text-gray-200 mb-2">
              <FaUsers className="mr-2 text-purple-400" />
              <span>Clients</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                {/* Tautan eksternal tetap menggunakan <a> */}
                <a href="https://panel.heppyhost.my.id/" className="hover:text-white transition-colors duration-200">Client Area</a>
              </li>
              <li>
                {/* Tautan eksternal tetap menggunakan <a> */}
                <a href="https://store.heppyhost.my.id/dashboard" className="hover:text-white transition-colors duration-200">Game Panel</a>
              </li>
              <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Create a Ticket</Link>
              </li>
            </ul>
          </div>
          
          {/* Kolom 3: Company */}
          <div className="space-y-4">
            <div className="flex items-center text-lg font-semibold text-gray-200 mb-2">
              <FaBuilding className="mr-2 text-purple-400" />
              <span>Company</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Contact Us</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Our Story</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Hardware Details</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">HeppyTeam</Link>
              </li>
            </ul>
          </div>
          
          {/* Kolom 4: Resources */}
          <div className="space-y-4">
            <div className="flex items-center text-lg font-semibold text-gray-200 mb-2">
              <FaGlobe className="mr-2 text-purple-400" />
              <span>Resources</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Documentation</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Network Status</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Our Partners</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Legal */}
          <div className="space-y-4">
            <div className="flex items-center text-lg font-semibold text-gray-200 mb-2">
              <FaFileAlt className="mr-2 text-purple-400" />
              <span>Legal</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/NotFound" className="hover:text-white transition-colors duration-200">Acceptable Use Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bagian Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.discordapp.com/icons/922331236398157824/17b6f3984ad4d277e46b7f4c8f902d6b.webp" 
              alt="Heppy Cloud Logo" 
              className="w-10 h-10 rounded-full" 
            />
            <div>
              <p className="text-sm">© 2025 HeppyCloud. All rights reserved.</p>
              <p className="text-xs text-gray-500">🎨 Grenn友 Visual Series — Powered by HeppyCloud.</p>
            </div>
          </div>
          <a 
            href="https://discord.gg/heppycloud" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Join our Discord"
          >
            <FaDiscord className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
