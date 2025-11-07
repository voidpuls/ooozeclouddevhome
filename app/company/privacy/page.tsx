'use client';

import { motion } from "framer-motion";

export default function Privacy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      title: "1. Information Collection",
      content: "We collect information to provide better services to our users. The types of information we collect include:",
      bulletPoints: [
        "Account information (email, username, billing details)",
        "Server configuration and usage data",
        "Payment information",
        "Communication records with our support team",
        "Technical data (IP address, browser type, device information)"
      ]
    },
    {
      title: "2. Use of Information",
      content: "We use the collected information for the following purposes:",
      bulletPoints: [
        "Providing and maintaining our game server hosting services",
        "Processing payments and preventing fraud",
        "Improving our services and user experience",
        "Sending service updates and administrative messages",
        "Responding to your requests and support inquiries"
      ]
    },
    {
      title: "3. Data Protection",
      content: "We implement robust security measures to protect your data:",
      subsections: [
        {
          title: "3.1 Security Measures",
          content: "We use industry-standard encryption, firewalls, and secure server infrastructure to protect your data from unauthorized access."
        },
        {
          title: "3.2 Data Storage",
          content: "Your data is stored in secure data centers with restricted access and regular security audits."
        },
        {
          title: "3.3 Access Control",
          content: "Only authorized personnel have access to user data, and all access is logged and monitored."
        }
      ]
    },
    {
      title: "4. Data Sharing",
      content: "We do not sell your personal information. We may share your data with:",
      bulletPoints: [
        "Payment processors for billing purposes",
        "Cloud service providers for hosting",
        "Analytics services to improve our platform",
        "Law enforcement when legally required"
      ]
    },
    {
      title: "5. Cookie Policy",
      content: "We use cookies and similar technologies to:",
      subsections: [
        {
          title: "5.1 Essential Cookies",
          content: "Required for basic site functionality and security features."
        },
        {
          title: "5.2 Analytics Cookies",
          content: "Help us understand how users interact with our services to improve the user experience."
        },
        {
          title: "5.3 Preference Cookies",
          content: "Store your preferences and settings for a better browsing experience."
        }
      ]
    },
    {
      title: "6. User Rights",
      content: "You have the following rights regarding your personal data:",
      bulletPoints: [
        "Access your personal data",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Object to data processing",
        "Export your data in a portable format"
      ]
    },
    {
      title: "7. Data Retention",
      content: "We retain your data for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted or anonymized."
    },
    {
      title: "8. Children's Privacy",
      content: "Our services are not intended for children under 13. We do not knowingly collect or maintain information from persons under 13 years of age."
    },
    {
      title: "9. International Transfers",
      content: "Your data may be processed in countries where we maintain servers and facilities. We ensure appropriate safeguards are in place for international data transfers."
    },
    {
      title: "10. Contact Information",
      content: "For privacy-related inquiries or concerns, please contact our Data Protection Officer at privacy@gamehost.com",
      subsections: [
        {
          title: "Response Time",
          content: "We aim to respond to all privacy-related inquiries within 48 hours."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#228B22] via-orange-500 to-[#228B22] mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#228B22]/30 to-transparent hidden sm:block"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
                <span className="text-[#228B22] mb-2 sm:mb-0 sm:mr-4">{section.title.split('.')[0]}.</span>
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
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#228B22]/20 to-transparent hidden sm:block"></div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#228B22]/90 mb-2 sm:mb-3">
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
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#228B22]/50 group-hover:bg-[#228B22] transition-colors mr-3 sm:mr-4 flex-shrink-0"></div>
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