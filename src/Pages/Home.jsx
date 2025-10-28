import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Mail,
  RefreshCw,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";

// Component Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Memoized Components
const StatusBadge = memo(() => (
  <motion.div variants={itemVariants} className="inline-block">
    <div className="flex gap-3">
      {/* Server Status Badge */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
          <span className="bg-gradient-to-r from-[#dadaff] to-[#e9d5ff] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
            <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-[#a78bfa]" />
            Hosting Game ID #1
          </span>
        </div>
      </div>

      {/* DDoS Protection Badge */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
          <span className="bg-gradient-to-r from-[#dadaff] to-[#e9d5ff] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
            <ShieldCheck className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-[#a78bfa]" />
            DDoS Protection
          </span>
        </div>
      </div>
    </div>
  </motion.div>
));

const MainTitle = memo(() => (
  <motion.div variants={itemVariants} className="space-y-2">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-[#a78bfa] to-[#ec4899] bg-clip-text text-transparent">
          HEPPY CLOUD
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
          Next-Generation
        </span>
      </span>
    </h1>
  </motion.div>
));

const TechStack = memo(({ tech }) => (
  <motion.div variants={itemVariants} className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </motion.div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <motion.div variants={itemVariants}>
    <a href={href}>
      <button className="group relative w-full md:w-[160px]">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
        <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
          <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#5b21b6]/20 to-[#8b5cf6]/20"></div>
          <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
              {text}
            </span>
            <Icon className={`w-4 h-4 text-gray-200 transform transition-all duration-300 z-10 ${text === "View Servers" ? "group-hover:rotate-45" : "group-hover:translate-x-1"}`} />
          </span>
        </div>
      </button>
    </a>
  </motion.div>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <motion.div variants={itemVariants}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  </motion.div>
));

// Image Placeholder Component
const ImagePlaceholder = memo(({ isHovering }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Subtle Background Glow */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#dadaff] rounded-3xl blur-3xl opacity-20 z-0"
      initial={{ scale: 1, opacity: 0.2 }}
      animate={{ scale: isHovering ? 1.05 : 1, opacity: isHovering ? 0.5 : 0.2 }}
      transition={{ duration: 0.7 }}
    ></motion.div>

    {/* Image container with elegant animations */}
<motion.div
  className="relative w-full max-w-[1920px] max-h-[1080px] p-6 rounded-3xl overflow-hidden"
  initial={{ scale: 0.95, rotate: -3 }}
  animate={{ scale: isHovering ? 1 : 0.95, rotate: isHovering ? 0 : -3 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
>
  <div className="w-full h-full">
    <img
      src="/MinecraftHC.png"  // tanpa /public di depan, karena di public folder otomatis root
      alt="Hosting Game Visual"
      className="w-full h-full object-cover"
      width={1920}  // opsional, bisa menambahkan untuk hint browser
      height={1080}
    />
  </div>
</motion.div>
  </div>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Powerful Minecraft Hosting",
  "Enterprise-Grade DDoS Protection",
  "Stable & Lag-Free Performance",
  "Low Latency, Maximum Uptime",
  "The #1 Choice for Indonesian Gamers",
];
// Updated TECH_STACK with game hosting-themed items
const TECH_STACK = ["Official Template", "DDoS Protection", "HeppyCloud On Top"];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    AOS.refresh();
  }, []);

  // Typing Effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-[128px]" id="Home">
      <motion.div
        className="relative z-10 transition-all duration-1000"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column - Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0">
              <StatusBadge />
              <MainTitle />

              {/* Typing Effect */}
              <motion.div variants={itemVariants} className="h-8 flex items-center">
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <motion.span
                  className="w-[3px] h-6 bg-gradient-to-t from-[#5b21b6] to-[#8b5cf6] ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.span>
              </motion.div>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light">
                Enjoy high-performance hosting with instant setup, advanced DDoS protection, and 24/7 customer support ready to assist you anytime.
              </motion.p>

              {/* Tech Stack */}
              <motion.div variants={containerVariants} className="flex flex-wrap gap-3 justify-start">
                {TECH_STACK.map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={containerVariants} className="flex flex-col sm:flex-row gap-3 w-full justify-start">
                <CTAButton
                  href="/games"
                  text="View Servers"
                  icon={ExternalLink}
                />
                <CTAButton
                  href="/support"
                  text="Contact Us"
                  icon={Mail}
                />
              </motion.div>

              {/* Social Links */}
            </div>

            {/* Right Column - Image Placeholder */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <AnimatePresence>
                <ImagePlaceholder isHovering={isHovering} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default memo(Home);
