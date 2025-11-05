'use client';

import { motion } from "framer-motion";

export default function Terms() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      title: "1. Terms of Service",
      content: `By accessing and using our game server hosting services, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.`
    },
    {
      title: "2. Service Usage",
      content: `Our game server hosting services are provided "as is" and "as available". We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.`,
      subsections: [
        {
          title: "2.1 Account Responsibility",
          content: "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account."
        },
        {
          title: "2.2 Fair Usage",
          content: "You agree to use our services in compliance with all applicable laws and regulations. Any abuse, excessive usage, or violation may result in service suspension."
        }
      ]
    },
    {
      title: "3. Payment Terms",
      content: "Payment terms for our services are as follows:",
      subsections: [
        {
          title: "3.1 Billing Cycle",
          content: "Services are billed on a monthly basis. Payments are due in advance of the service period."
        },
        {
          title: "3.2 Refunds",
          content: "Refunds are processed according to our refund policy. Service cancellations must be requested at least 24 hours before the next billing cycle."
        },
        {
          title: "3.3 Payment Methods",
          content: "We accept major credit cards, PayPal, and other specified payment methods. All transactions are processed securely."
        }
      ]
    },
    {
      title: "4. Service Level Agreement",
      content: `We strive to maintain 99.9% uptime for all game servers. However, we cannot guarantee uninterrupted service and are not liable for any downtime caused by:`,
      bulletPoints: [
        "Scheduled maintenance",
        "DDoS attacks",
        "Force majeure events",
        "Network issues beyond our control"
      ]
    },
    {
      title: "5. User Responsibilities",
      content: "As a user of our services, you agree to:",
      bulletPoints: [
        "Comply with all applicable laws and regulations",
        "Maintain appropriate security measures",
        "Not engage in any unauthorized activities",
        "Report any security vulnerabilities you discover",
        "Keep your contact and billing information up to date"
      ]
    },
    {
      title: "6. Privacy & Data Protection",
      content: `We take your privacy seriously and handle all personal data in accordance with our Privacy Policy. By using our services, you consent to the collection and processing of your data as described in our Privacy Policy.`
    },
    {
      title: "7. Intellectual Property",
      content: `All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws.`
    },
    {
      title: "8. Termination",
      content: `We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.`
    },
    {
      title: "9. Changes to Terms",
      content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.`
    },
    {
      title: "10. Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us at support@gamehost.com`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fbbf24] via-orange-500 to-[#fbbf24] mb-4 sm:mb-6">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative px-2 sm:px-4"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#fbbf24]/30 to-transparent hidden sm:block"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
                <span className="text-[#fbbf24] mb-2 sm:mb-0 sm:mr-4">{section.title.split('.')[0]}.</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {section.title.split('.')[1]}
                </span>
              </h2>

              <div className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 sm:pl-8">
                {section.content}
              </div>

              {section.subsections && (
                <div className="space-y-6 sm:space-y-8 sm:pl-8">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.title} className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#fbbf24]/20 to-transparent hidden sm:block"></div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#fbbf24]/90 mb-2 sm:mb-3">
                        {subsection.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed pl-0 sm:pl-4">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.bulletPoints && (
                <div className="pl-4 sm:pl-12 space-y-2 sm:space-y-3">
                  {section.bulletPoints.map((point) => (
                    <div key={point} className="flex items-center group">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#fbbf24]/50 group-hover:bg-[#fbbf24] transition-colors mr-3 sm:mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {index !== sections.length - 1 && (
                <div className="mt-8 sm:mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800"
        >
          <p className="text-sm sm:text-base text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
} 