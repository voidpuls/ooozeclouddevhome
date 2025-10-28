import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaTiktok, FaWhatsapp, FaDiscord } from 'react-icons/fa';

// Data anggota tim
const teamMembers = [
    { name: "Grenn友", role: "CEO / Founder", avatar: "/OurTeam/Gren.png" },
    { name: "Ko Dev", role: "Developer", avatar: "/OurTeam/KoDev.png" },
    { name: "Farr Dev", role: "Developer", avatar: "/OurTeam/Farr.png" },
    { name: "Kyura", role: "Customer Service", avatar: "/OurTeam/Kyura.png" },
    { name: "Arraffi", role: "Customer Service", avatar: "/OurTeam/araffi.png" },
    { name: "Matzz", role: "Customer Service", avatar: "/OurTeam/Matz.png" },
    { name: "Jhanmc", role: "Oficial Brand", avatar: "/OurTeam/Jhan.png" },
    { name: "Ochii", role: "Princess", avatar: "/OurTeam/Ochi.png" },
];

// Data media sosial
const socialMedia = [
    { icon: FaYoutube, url: "https://youtube.com/@heppycloudreal" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@heppycloud" },
    { icon: FaWhatsapp, url: "*" },
    { icon: FaDiscord, url: "https://discord.gg/heppystore" },
];

// Konfigurasi animasi untuk container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Konfigurasi animasi untuk item (anggota tim)
const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

const OurTeamPage = () => {
    return (
        <div className="min-h-screen bg-transparent text-white p-4 sm:p-8 font-sans">
            {/* Wrapper utama yang membuat kontainer menyatu dengan latar belakang */}
            <div className="relative z-10 w-full max-w-7xl mx-auto rounded-3xl p-6 sm:p-12">
                
                {/* Header dengan background image */}
                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl border border-gray-700 bg-gray-900 bg-opacity-70 backdrop-blur-md">
                    <img
                        src="https://www.shutterstock.com/image-vector/business-team-brainstorm-idea-lightbulb-260nw-1260595711.jpg"
                        alt="Our Team Header"
                        className="w-full h-48 object-cover object-center brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-start p-8">
                        <div className="text-white">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">CONTACT AND TEAM</h1>
                            <p className="mt-2 text-sm sm:text-base text-gray-300">
                                HeppyCloud by Grenn&#8482; All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bagian "Meet Our Team" */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight">
                        Meet Our Team
                    </h2>
                    <p className="mt-2 text-lg text-gray-400">All teams at HeppyCloud</p>
                </div>

                {/* Grid anggota tim dengan animasi */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-800 relative overflow-hidden group"
                            variants={itemVariants}
                        >
                            {/* Efek hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            
                            {/* Avatar */}
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-transparent group-hover:border-purple-400 transition-colors duration-300"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/150x150/664dff/ffffff?text=USER";
                                }}
                            />
                            
                            {/* Nama dan peran */}
                            <h3 className="text-xl font-semibold text-white tracking-tight">{member.name}</h3>
                            <p className="text-sm text-gray-400 mt-1">{member.role}</p>
                            
                            {/* Efek partikel (visual) */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-pink-500 blur-2xl animate-pulse"></div>
                                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500 blur-2xl animate-pulse delay-200"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bagian "Media Sosial" */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Media Sosial
                    </h3>
                    <p className="mt-2 text-md text-gray-400">All Media Sosial HeppyCloud</p>
                    <div className="flex justify-center space-x-6 mt-6">
                        {socialMedia.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                                aria-label="Social Media Link"
                            >
                                <social.icon className="h-8 w-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeamPage;
