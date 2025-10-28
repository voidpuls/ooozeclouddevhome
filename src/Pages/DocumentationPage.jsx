import React from 'react';
import { motion } from 'framer-motion';

// Animation configuration for container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Animation configuration for each item (documentation section)
const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
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

const DocumentationPage = () => {
    return (
        <div className="min-h-screen bg-transparent text-white p-4 sm:p-8 font-sans">
            <div className="w-full h-px my-8"></div>
            {/* Main wrapper that blends container with background */}
            <div className="relative z-10 w-full max-w-7xl mx-auto rounded-3xl p-6 sm:p-12">

                {/* Documentation Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight">
                        Documentation
                    </h1>
                    <p className="mt-2 text-lg text-gray-400">
                        Complete Guide for HeppyCloud
                    </p>
                </div>

                {/* Documentation Sections Grid with animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Getting Started Section */}
                    <motion.div
                        className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group"
                        variants={itemVariants}
                    >
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">Getting Started</h3>
                        <p className="text-sm text-gray-400">
                            Welcome to HeppyCloud! Here you will find step-by-step instructions to get started. Learn how to create an account, manage your dashboard, and launch your first services in minutes. We provide everything you need to build and scale your projects in the cloud.
                        </p>
                    </motion.div>

                    {/* API Reference Section */}
                    <motion.div
                        className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">API Reference</h3>
                        <p className="text-sm text-gray-400">
                            In-depth documentation for all HeppyCloud API endpoints. Use our API to automate resource management, monitor performance, and integrate our services into your applications. Each endpoint comes with clear request and response examples.
                        </p>
                    </motion.div>

                    {/* Tutorials & Guides Section */}
                    <motion.div
                        className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">Tutorials & Guides</h3>
                        <p className="text-sm text-gray-400">
                            Explore our series of practical tutorials and guides. Learn how to create virtual servers, configure object storage, and implement serverless functions. These guides are designed for beginners to advanced users, with diverse use cases.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight">
                    Project Build Process
                </h1>
            </div>
        </div>
    );
};

export default DocumentationPage;
