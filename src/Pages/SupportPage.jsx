import React, { useState } from 'react';
import { Search, Server, HardDrive, Cpu, MapPin, CheckCircle, MessageCircle, Globe, ChevronDown, Rocket, Star, ChevronRight, Mail, Phone, Ticket } from 'lucide-react';

// ===============================================================
// The main component and its sub-components
// ===============================================================

// Component for displaying support statistics cards
const StatCard = ({ value, label }) => {
  return (
    <div className="p-4 sm:p-6 bg-[#1e1a30] rounded-2xl shadow-xl border border-[#2d2f44] transform transition-all duration-300 hover:scale-105 hover:bg-[#25203a] cursor-pointer">
      <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">{value}</p>
      <p className="text-gray-300 font-medium text-sm sm:text-base">{label}</p>
    </div>
  );
};

// Component for displaying contact cards
const ContactCard = ({ icon, title, description, buttonText, buttonLink, status }) => {
  const IconComponent = icon;
  const isComingSoon = buttonText === 'Coming Soon';

  return (
    <div className="p-6 bg-[#1e1a30] rounded-2xl shadow-xl border border-[#2d2f44] flex flex-col items-start text-left h-full transition-transform duration-300 hover:scale-105">
      <div className="p-3 mb-4 bg-purple-500/20 rounded-xl">
        <IconComponent size={24} className="text-purple-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-glow-hover">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow mb-4">{description}</p>
      {status && (
        <div className="flex items-center text-green-400 text-sm mb-4">
          <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          {status}
        </div>
      )}
      <a 
        href={isComingSoon ? '/' : buttonLink} 
        rel="noopener noreferrer" 
        className={`w-full text-center px-6 py-3 mt-auto rounded-xl font-semibold transition-transform duration-300 ${
          isComingSoon 
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#121321] hover:scale-105'
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
};


// Main component for the support page
const SupportPage = () => {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }

        .text-glow {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease-in-out;
        }

        .text-glow-hover:hover {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        `}
      </style>
      <div className="min-h-screen bg-[#121321] text-white font-sans">
        <div className="relative z-10 p-4 sm:p-8 bg-black/40 backdrop-blur-xl rounded-3xl animate-fade-in">
          <div className="w-full h-px my-8"></div>
          {/* Header Section */}
          <header className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 relative">
            <div className="relative p-4 md:p-8 rounded-3xl bg-[#121321] shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Left side with text and features */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 animate-pulse-slow text-glow">
                  We're Here to <br />
                  <span className="text-white">Help You Succeed</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base mb-4 sm:mb-8">
                  Get instant support through various channels. Our team of experts is available 24/7 to help you with any questions or technical issues.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle size={20} className="text-pink-500 mr-2 flex-shrink-0" /> Live Chat Available
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Globe size={20} className="text-pink-500 mr-2 flex-shrink-0" /> Global Support Team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Star size={20} className="text-pink-500 mr-2 flex-shrink-0" /> Premium Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Rocket size={20} className="text-pink-500 mr-2 flex-shrink-0" /> Fast Response Time
                  </li>
                </ul>
              </div>

              {/* Right side with an empty placeholder for the image from the screenshot */}
            <div className="w-full md:w-1/2 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://www.shutterstock.com/image-vector/remote-support-online-remotely-access-600nw-1331918702.jpg"
                alt="TeamSupport"
                  className="w-full h-64 sm:h-80 rounded-2xl object-cover"
              />
            </div>
            </div>
          </header>

          {/* Support Statistics Section */}
          <main className="w-full max-w-7xl mx-auto my-8 sm:my-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-glow">
              Our Support Statistics
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
              We take pride in the efficiency and quality of our support services. See how we help our customers every day.
            </p>
            
            {/* Stats card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="< 5 mins" label="Response time" />
              <StatCard value="99%" label="Resolution Rate" />
              <StatCard value="4.9/5" label="Customer Satisfaction" />
              <StatCard value="24/7" label="Support Team" />
            </div>

            {/* Contact Us Section - New Section */}
            <section className="w-full max-w-7xl mx-auto my-8 sm:my-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 text-glow">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* New Live Chat Coming Soon Card */}
              <ContactCard
                icon={MessageCircle}
                title="Discord Community"
                description="Join our Discord community for live assistance from our team and other users."
                buttonText="Join Discord"
                buttonLink="https://discord.gg/heppystore"
                status="Fastest Response"
              />
              <ContactCard
                icon={Ticket}
                title="Support Ticket"
                description="Create a ticket for in-depth technical assistance. Our team usually responds within 1 hour."
                buttonText="Coming Soon"
              />
              <ContactCard
                icon={Phone}
                title="Phone Support"
                description="Get direct assistance from our technical team. Available 24/7."
                buttonText="Coming Soon"
              />
              <ContactCard
                icon={Mail}
                title="Email Support"
                description="Send an email for non-urgent questions. We will respond within 24 hours."
                buttonText="Coming Soon"
              />
              </div>
            </section>
          </main>
          </div>
      </div>
    </>
  );
};

const App = () => {
    return <SupportPage />;
};

export default SupportPage;
