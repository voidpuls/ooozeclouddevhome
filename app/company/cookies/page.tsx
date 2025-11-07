'use client';

import { motion } from "framer-motion";

export default function Cookies() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      title: "1. What Are Cookies",
      content: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:",
      bulletPoints: [
        "Remembering your preferences and settings",
        "Understanding how you use our website",
        "Keeping you signed in to your account",
        "Improving website performance and security",
        "Providing personalized content and features"
      ]
    },
    {
      title: "2. Types of Cookies",
      content: "We use different types of cookies on our website:",
      subsections: [
        {
          title: "2.1 Essential Cookies",
          content: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies."
        },
        {
          title: "2.2 Performance Cookies",
          content: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality."
        },
        {
          title: "2.3 Functionality Cookies",
          content: "These cookies enable enhanced functionality and personalization. They may be set by us or third-party providers whose services we use on our website."
        },
        {
          title: "2.4 Analytics Cookies",
          content: "We use analytics cookies to track and measure website traffic, helping us understand which pages are most and least popular."
        }
      ]
    },
    {
      title: "3. Cookie Management",
      content: "You have several options to manage cookies on our website:",
      bulletPoints: [
        "Browser settings to block or delete cookies",
        "Individual cookie opt-out options in our preference center",
        "Third-party opt-out tools and browser extensions",
        "Cookie consent management through our banner",
        "Manual deletion of cookies from your device"
      ]
    },
    {
      title: "4. Third-Party Cookies",
      content: "We may use third-party services that also set cookies on your device. These services include:",
      subsections: [
        {
          title: "4.1 Analytics Services",
          content: "Google Analytics and similar services to understand website usage patterns and improve our service."
        },
        {
          title: "4.2 Payment Processors",
          content: "Secure payment processing services that may set cookies to prevent fraud and ensure secure transactions."
        },
        {
          title: "4.3 Social Media",
          content: "Social media platforms may set cookies if you use their features on our website (like share buttons)."
        }
      ]
    },
    {
      title: "5. Cookie Duration",
      content: "Cookies on our website can last for different periods:",
      bulletPoints: [
        "Session cookies - deleted when you close your browser",
        "Persistent cookies - remain on your device for a set period",
        "Permanent cookies - stay until manually deleted",
        "Third-party cookies - duration set by the third party"
      ]
    },
    {
      title: "6. Cookie Security",
      content: "We take security seriously and ensure that:",
      bulletPoints: [
        "All cookies containing sensitive data are encrypted",
        "Access to cookie data is strictly controlled",
        "Regular security audits are performed",
        "Cookie data is protected according to industry standards"
      ]
    },
    {
      title: "7. Updates to Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes."
    },
    {
      title: "8. Your Choices",
      content: "You have the right to choose whether to accept or decline cookies. However, please note that declining certain cookies may impact your experience on our website.",
      subsections: [
        {
          title: "8.1 Essential Cookies",
          content: "These cannot be disabled as they are necessary for website functionality."
        },
        {
          title: "8.2 Optional Cookies",
          content: "You can enable or disable these through our cookie preference center."
        }
      ]
    },
    {
      title: "9. Data Usage",
      content: "Information collected through cookies is used in accordance with our Privacy Policy. We do not use cookies to collect personally identifiable information without your consent."
    },
    {
      title: "10. Contact Us",
      content: "If you have questions about our use of cookies, please contact us at cookies@gamehost.com",
      subsections: [
        {
          title: "Response Time",
          content: "We aim to respond to all cookie-related inquiries within 24 hours."
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#28a745] via-orange-500 to-[#28a745] mb-4 sm:mb-6">
            Cookie Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Understanding how we use cookies to improve your experience.
            Learn about the types of cookies we use and how you can control them.
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
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#28a745]/30 to-transparent hidden sm:block"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
                <span className="text-[#28a745] mb-2 sm:mb-0 sm:mr-4">{section.title.split('.')[0]}.</span>
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
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#28a745]/20 to-transparent hidden sm:block"></div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#28a745]/90 mb-2 sm:mb-3">
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
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28a745]/50 group-hover:bg-[#28a745] transition-colors mr-3 sm:mr-4 flex-shrink-0"></div>
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