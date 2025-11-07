'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Headphones,
  Users,
  BookOpen,
  MessagesSquare,
  LifeBuoy,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const supportOptions = [
    {
      title: "Live Chat Support",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      link: "#chat",
      availability: "24/7"
    },
    {
      title: "Technical Support",
      description: "Expert assistance for technical issues",
      icon: Headphones,
      link: "/contact",
      availability: "24/7"
    },
    {
      title: "Community Support",
      description: "Connect with other users and share solutions",
      icon: Users,
      link: "/community",
      availability: "Always Available"
    },
    {
      title: "Knowledge Base",
      description: "Find answers in our documentation",
      icon: BookOpen,
      link: "/docs",
      availability: "Self-Service"
    }
  ];

  const faqQuestions = [
    {
      question: "How do I get started with game server hosting?",
      answer: "Getting started is easy! Choose your game, select a hosting plan, and follow our quick setup guide. Our system will automatically configure your server with optimized settings."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum. All transactions are secure and processed instantly."
    },
    {
      question: "How quickly can I get my server running?",
      answer: "Your server will be set up instantly after payment confirmation. Our automated system ensures immediate deployment with your chosen configuration."
    },
    {
      question: "Do you offer DDoS protection?",
      answer: "Yes, all our servers come with enterprise-grade DDoS protection included at no extra cost. We use advanced mitigation systems to ensure your server stays online."
    },
    {
      question: "Can I modify server settings and configurations?",
      answer: "Absolutely! You have full access to all server settings through our custom control panel. You can modify configurations, install mods, and manage your server easily."
    }
  ];

  const contactMethods = [
    {
      icon: MessagesSquare,
      title: "Discord Community",
      description: "Join our Discord for instant support",
      link: "https://discord.gg/gameserverhost",
      linkText: "Join Discord"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      link: "mailto:support@gameserverhost.com",
      linkText: "Send Email"
    },
    {
      icon: LifeBuoy,
      title: "Help Center",
      description: "Browse our help articles",
      link: "/docs",
      linkText: "Visit Help Center"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] text-white pt-24 pb-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#228B22]/5 to-transparent opacity-20"
             style={{
               backgroundSize: '50px 50px',
               backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(36, 251, 57, 0.03) 25%, rgba(36, 251, 57, 0.03) 26%, transparent 27%, transparent 74%, rgba(36, 251, 57, 0.03) 75%, rgba(36, 251, 57, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(36, 251, 57, 0.03) 25%, rgba(36, 251, 57, 0.03) 26%, transparent 27%, transparent 74%, rgba(36, 251, 57, 0.03) 75%, rgba(36, 251, 57, 0.03) 76%, transparent 77%, transparent)'
             }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 rounded-xl bg-[#228B22]/10">
              <Rocket className="w-8 h-8 text-[#228B22]" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            How Can We Help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We're here to help you with any questions or issues you might have.
            Choose from our support options below.
          </motion.p>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 hover:border-[#228B22]/20 transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-xl bg-[#228B22]/10 w-fit mb-4">
                  <option.icon className="w-6 h-6 text-[#228B22]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#228B22] transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {option.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#228B22]">
                    {option.availability}
                  </span>
                  <Link
                    href={option.link}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white/5 last:border-0 pb-4 last:pb-0"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium hover:text-[#228B22] transition-colors">
                    {faq.question}
                  </span>
                  {activeQuestion === index ? (
                    <ChevronUp className="w-5 h-5 text-[#228B22]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {activeQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 hover:border-[#228B22]/20 transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#228B22]/10 w-fit mb-4">
                <method.icon className="w-6 h-6 text-[#228B22]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#228B22] transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {method.description}
              </p>
              <Link
                href={method.link}
                className="inline-flex items-center text-sm text-[#228B22] hover:text-[#228B22]/80 transition-colors"
              >
                {method.linkText} →
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 