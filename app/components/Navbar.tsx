'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationConfig, NavigationItem, DropdownItem } from '../types/navigation';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import {
  Cloud,
  Server,
  Gamepad2,
  Globe,
  Network,
  Info,
  User,
  Menu,
  X,
  ChevronRight,
  Moon,
  Sun,
  FileText,
  Shield,
  Check,
} from 'lucide-react';
import { FaDiscord } from "react-icons/fa6";
import { GrServerCluster } from "react-icons/gr";
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import navigationConfig from '../config/sections/navigation.json';
import heroConfig from '../config/sections/hero.json';
import type { HeroConfig } from '../types/hero';
import uiConfig from '../config/sections/ui.json';

const config = navigationConfig as NavigationConfig;
const heroSettings = heroConfig as HeroConfig;


const iconMap: { [key: string]: React.ElementType } = {
  Cloud,
  Server,
  Gamepad2,
  Globe,
  Network,
  Info,
  User,
  FileText,
  Shield,
  Menu,
  X,
  ChevronRight,
  Moon,
  Sun,
  FaDiscord,
  GrServerCluster,
};

const getIcon = (iconName: string) => iconMap[iconName];


const SocialIcons: { [key: string]: React.FC } = {
  discord: React.memo(() => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )),
  twitter: React.memo(() => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ))
};


const ThemeToggle = React.memo((): React.ReactElement => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])

  const aria = theme === "light"
    ? "Switch to dark mode"
    : "Switch to light mode"

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 text-muted-foreground"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      className="w-8 h-8 text-muted-foreground hover:text-primary"
      aria-label={aria}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  )
})


ThemeToggle.displayName = 'ThemeToggle'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(config.banner.show);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiConfig, setConfettiConfig] = useState({
    recycle: false,
    numberOfPieces: 200,
    gravity: 0.3
  });
  const [showPopup, setShowPopup] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [mobileDropdownStates, setMobileDropdownStates] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleMobileDropdown = useCallback((itemName: string) => {
    setMobileDropdownStates(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  }, []);
  const filteredGames = useMemo(() =>
    heroSettings.hero.games.filter((game: any) => game.showInDropdown),
    [heroSettings.hero.games]
  );

  const handleCopyCode = useCallback(() => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(config.banner.couponCode)
        .then(() => {
          setConfettiConfig({
            recycle: false,
            numberOfPieces: 200,
            gravity: 0.3
          });
          setShowConfetti(true);
          setShowPopup(true);
        })
        .catch(() => {
          alert('Failed to copy code. Please try again.');
        });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = config.banner.couponCode;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setConfettiConfig({
          recycle: false,
          numberOfPieces: 200,
          gravity: 0.3
        });
        setShowConfetti(true);
        setShowPopup(true);
      } catch (err) {
        alert('Failed to copy code. Please try again.');
      }
      document.body.removeChild(textArea);
    }
  }, [config.banner.couponCode]);

  const handleClosePopup = useCallback(() => {
    setConfettiConfig(prev => ({
      ...prev,
      gravity: 0.8,
      numberOfPieces: prev.numberOfPieces
    }));

    setShowPopup(false);

    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  }, []);

  const renderDropdown = useCallback((item: NavigationItem) => {
    if (item.dropdownType === 'games') {
      return (
        <div className="absolute top-full left-0 rounded-b-xl -mt-0.5 w-[300px] sm:w-[400px] md:w-[500px] bg-white dark:bg-black/90 backdrop-blur-sm border-t-2 border-top-nav -mt-[2px]  shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-10 p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  sm:gap-4">
            {filteredGames.map((game: any) => (
              <Link
                key={game.name}
                href={`/games?game=${game.id}`}
                className="relative block aspect-[4/3] rounded-lg border border-secondary overflow-hidden  group"
                aria-label={`View ${game.displayName} server options`}
                prefetch={true}
              >
                <Image
                  src={game.banner}
                  alt={`${game.displayName} banner`}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 200px, 250px"
                  className="object-cover"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute top-2 right-2 text-white/70 transition-colors duration-300 group-hover:text-white">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-semibold mb-1">{game.displayName}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">Host your own {game.name} server</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (item.dropdownType === 'legal' && item.dropdownItems) {
      return (
        <div className="absolute rounded-b-xl top-full left-0  w-[280px] bg-white dark:bg-black/90 border-t-2 border-top-nav -mt-[2px]  shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-10 p-4">
          <div className="space-y-2">
            {item.dropdownItems.map((dropdownItem) => {
              const translatedName = dropdownItem.name === 'Terms of Service' ? t('navbar.termsOfService') :
                dropdownItem.name === 'Privacy Policy' ? t('navbar.privacyPolicy') :
                  dropdownItem.name;
              const translatedDesc = dropdownItem.name === 'Terms of Service' ? t('navbar.termsDescription') :
                dropdownItem.name === 'Privacy Policy' ? t('navbar.privacyDescription') :
                  dropdownItem.description;

              return (
                <Link
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="block p-3 rounded-lg hover:border-secondary border-primary border hover:hover-gradient transition-colors"
                  prefetch={true}
                >
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {translatedName}
                  </h3>
                  {translatedDesc && (
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {translatedDesc}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  }, [filteredGames]);

  const getTranslatedNavName = useCallback((itemName: string) => {
    const navKey = itemName.toLowerCase().replace(/\s+/g, '');
    switch (navKey) {
      case 'games': return t('navbar.games');
      case 'cloud': return t('navbar.cloud');
      case 'dedicated': return t('navbar.dedicated');
      case 'discordbot': return t('navbar.discord');
      case 'webhosting': return t('navbar.webhosting');
      case 'legal': return t('navbar.legal');
      default: return itemName;
    }
  }, [t]);

  const renderNavigationItem = useCallback((item: NavigationItem) => {
    const IconComponent = item.icon ? getIcon(item.icon) : null;
    const isActive = item.hasDropdown
      ? pathname.startsWith(item.href)
      : pathname === item.href;
    const translatedName = getTranslatedNavName(item.name);

    if (item.hasDropdown) {
      return (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            className={`px-4 py-6 text-xs font-medium relative text-gray-700 dark:text-slate-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors flex items-center space-x-2 
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-button-bg dark:after:bg-button-bg after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center
            hover:hover-gradient
            ${isActive ? 'text-icon-text-primary dark:text-icon-text-primary after:scale-x-100 hover-gradient' : ''}`}
            prefetch={true}
          >
            {IconComponent && <IconComponent className="w-4 h-4" />}
            <span>{translatedName}</span>
          </Link>
          {renderDropdown(item)}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`px-4 py-6 text-sm font-medium relative text-gray-700 dark:text-slate-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors flex items-center space-x-2 
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-button-bg dark:after:bg-button-bg after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center
        hover:hover-gradient
        ${isActive ? 'text-icon-text-primary dark:text-icon-text-primary after:scale-x-100 hover-gradient' : ''}`}
        prefetch={true}
      >
        {IconComponent && <IconComponent className="w-4 h-4" />}
        <span>{translatedName}</span>
      </Link>
    );
  }, [pathname, renderDropdown, getTranslatedNavName]);

  const renderMobileNavigationItem = useCallback((item: NavigationItem) => {
    const IconComponent = item.icon ? getIcon(item.icon) : null;
    const translatedName = getTranslatedNavName(item.name);

    if (item.hasDropdown && item.dropdownType === 'games') {
      const isActive = pathname.startsWith('/games');
      const isDropdownOpen = mobileDropdownStates[item.name] || false;

      return (
        <div key={item.name} className="mb-3">
          <div className="flex">
            <Link
              href={item.href}
              className={`flex items-center space-x-3 flex-1 px-3 py-3 rounded-l-lg transition-colors ${isActive
                ? 'card-primary text-icon-text-primary border border-secondary border-r-0'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-r-0'
                }`}
              onClick={closeMobileMenu}
              prefetch={true}
            >
              {IconComponent && <IconComponent className="w-5 h-5" />}
              <span className="font-medium">{translatedName}</span>
            </Link>
            <button
              onClick={() => toggleMobileDropdown(item.name)}
              className={`px-3 py-3 rounded-r-lg transition-all duration-200 ${isActive
                ? 'card-primary text-icon-text-primary border border-secondary border-l-0'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-l-0'
                }`}
              aria-label={`Toggle ${item.name} dropdown`}
            >
              <motion.div
                animate={{ rotate: isDropdownOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 pl-2 overflow-hidden"
              >
                <div className="max-h-[35vh] overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {filteredGames.map((game: any) => (
                      <Link
                        key={game.name}
                        href={`/games?game=${game.id}`}
                        className="relative block aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-secondary transition-colors group"
                        onClick={closeMobileMenu}
                        aria-label={`View ${game.displayName} server options`}
                        prefetch={true}
                      >
                        <Image
                          src={game.banner}
                          alt={`${game.displayName} banner`}
                          fill
                          sizes="(max-width: 640px) 180px, 180px"
                          className="object-cover"
                          quality={75}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white text-xs font-semibold truncate">{game.displayName}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    if (item.hasDropdown && item.dropdownType === 'legal' && item.dropdownItems) {
      const isActive = pathname === item.href;
      const isDropdownOpen = mobileDropdownStates[item.name] || false;

      return (
        <div key={item.name} className="mb-3">
          <div className="flex">
            <Link
              href={item.href}
              className={`flex items-center space-x-3 flex-1 px-3 py-3 rounded-l-lg transition-colors ${isActive
                ? 'card-primary text-icon-text-primary border border-secondary border-r-0'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-r-0'
                }`}
              onClick={closeMobileMenu}
              prefetch={true}
            >
              {IconComponent && <IconComponent className="w-5 h-5" />}
              <span className="font-medium">{translatedName}</span>
            </Link>
            <button
              onClick={() => toggleMobileDropdown(item.name)}
              className={`px-3 py-3 rounded-r-lg transition-all duration-200 ${isActive
                ? 'card-primary text-icon-text-primary border border-secondary border-l-0'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-l-0'
                }`}
              aria-label={`Toggle ${item.name} dropdown`}
            >
              <motion.div
                animate={{ rotate: isDropdownOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 ml-6 space-y-1 overflow-hidden"
              >
                {item.dropdownItems.map((dropdownItem: any) => {
                  const translatedName = dropdownItem.name === 'Terms of Service' ? t('navbar.termsOfService') :
                    dropdownItem.name === 'Privacy Policy' ? t('navbar.privacyPolicy') :
                      dropdownItem.name;

                  return (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-icon-text-primary hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                      prefetch={true}
                    >
                      {translatedName}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center justify-between w-full px-3 py-3 rounded-lg transition-colors mb-2 ${isActive
          ? 'card-primary text-icon-text-primary border border-secondary'
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
          }`}
        onClick={closeMobileMenu}
        prefetch={true}
      >
        <div className="flex items-center space-x-3">
          {IconComponent && <IconComponent className="w-5 h-5" />}
          <span className="font-medium">{translatedName}</span>
        </div>
        <ChevronRight className="w-4 h-4" />
      </Link>
    );
  }, [pathname, closeMobileMenu, filteredGames, mobileDropdownStates, toggleMobileDropdown]);

  return (
    <div style={{ overflowX: 'hidden', position: 'relative' }}>

      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10000,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={confettiConfig.recycle}
            numberOfPieces={confettiConfig.numberOfPieces}
            gravity={confettiConfig.gravity}
          />
        </div>
      )}


      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute backdrop-blur-sm inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClosePopup}
            />
            <motion.div
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-secondary rounded-lg p-8 max-w-sm mx-4 text-center shadow-2xl"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4
              }}
            >
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  damping: 20,
                  stiffness: 300
                }}
              >
                <div className="w-16 h-16 card-primary rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 icon-text-primary" />
                </div>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Coupon Code Copied!
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                The coupon code has been copied to your clipboard.
              </motion.p>
              <motion.button
                onClick={handleClosePopup}
                className="w-full button-primary text-icon-text-primary px-6 py-3 rounded-lg font-semibold hover:hover-gradient border border-transparent hover:border-secondary transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20
                }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.4
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ok, Thank you!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showBanner && config.banner.show && (
        <div
          className={`relative text-white text-sm py-3 px-4 transition-colors duration-300 ${!config.banner.useThemeColor ? config.banner.backgroundColor : ''
            }`}
          style={{
            backgroundColor: config.banner.useThemeColor
              ? 'var(--button-primary)'
              : undefined
          }}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center justify-center space-x-2 sm:space-x-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 icon-text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="icon-text-primary text-xs font-bold">%</span>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-white font-medium">{config.banner.text}</span>
                <button
                  onClick={handleCopyCode}
                  className="bg-white/20 hover:bg-white/30 px-1.5 sm:px-2 md:px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 text-white border border-white/30 hover:border-white/50"
                >
                  {config.banner.couponCode}
                </button>
              </div>
              <button
                className="text-white hover:text-white/90 transition-colors flex-shrink-0"
                onClick={() => setShowBanner(false)}
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>

            </div>
          </div>
        </div>
      )}


      <nav className={`fixed -mt-1 left-0 right-0 z-50 bg-white/90 dark:bg-[#10121b]/20 backdrop-blur-xs border-b border-gray-200/60 dark:border-[#272a32]/10 transition-all duration-300 ${isScrolled ? 'top-0' : (showBanner ? 'top-[52px]' : 'top-0')}`}>
        <div className="px-4 sm:px-0 max-w-7xl mx-auto">
          <div className="flex items-center">

            <div className="flex-shrink-0 flex items-center mr-6">
              <Link
                href="/"
                className="flex items-center space-x-3"
                aria-label="Go to homepage"
                prefetch={true}
              >
                <Image
                  src={heroSettings.navbar.logo}
                  alt={heroSettings.navbar.brandName}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                  width={48}
                  height={48}
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                />
                <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white orbitron-font">
                  {heroSettings.navbar.brandName}<span className="icon-text-primary">{heroSettings.navbar.brandAccent}</span>
                </span>
              </Link>
            </div>


            <div className="hidden md:flex md:items-center">
              {config.mainNavigation.map((item) => renderNavigationItem(item))}
            </div>


            <div className="hidden md:flex md:items-center md:space-x-4 ml-auto">
              {config.socialLinks.map((social) => {
                const SocialIcon = SocialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label={`Visit our ${social.name} page`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SocialIcon />
                  </a>
                );
              })}



              <ThemeToggle />
              <LanguageSelector />

              <div className="relative">
                <Link
                  href={config.clientSpace.href}
                  className="hidden sm:flex items-center space-x-2 button-primary text-button-primary border border-transparent px-3 sm:px-4 py-2 rounded-lg orbitron-font text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-[var(--hover-gradient)] hover:text-[var(--icon-text-primary)] hover:border-[var(--border-secondary)]"
                  prefetch={true}
                >
                  {config.clientSpace.icon && getIcon(config.clientSpace.icon) && React.createElement(getIcon(config.clientSpace.icon), { className: "w-4 h-4" })}
                  <span>{t('navbar.clientSpace')}</span>
                </Link>
                {uiConfig.christmasTheme.enabled && (
                  <>
                    <Image
                      src="/christmas/button-deco-up.png"
                      alt="Christmas decoration"
                      width={32}
                      height={32}
                      className="absolute -top-2 -right-2 pointer-events-none hidden sm:block"
                    />
                    <Image
                      src="/christmas/button-deco-down.png"
                      alt="Christmas decoration"
                      width={32}
                      height={32}
                      className="absolute -bottom-2 -left-2 pointer-events-none hidden sm:block"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center py-2 md:hidden ml-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-icon-primary hover:text-icon-text-primary transition-colors relative"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
                </motion.div>
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden bg-white dark:bg-[#10121b] border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="divide-y divide-gray-200 dark:divide-gray-700"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1
                }}
              >
                  <motion.div
                  className="px-4 py-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {config.mainNavigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: 0.1 + (index * 0.05),
                        duration: 0.2
                      }}
                    >
                      {renderMobileNavigationItem(item)}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="px-4 py-4 bg-gray-50/50 dark:bg-gray-800/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="flex items-center justify-between py-2 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
                    <LanguageSelector className="w-32" />
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between py-2 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.25 }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                    <ThemeToggle />
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center gap-6 py-2 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                  >
                    {config.socialLinks.map((social, index) => {
                      const SocialIcon = SocialIcons[social.icon];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          aria-label={`Visit our ${social.name} page`}
                          rel="noopener noreferrer"
                          target="_blank"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            delay: 0.35 + (index * 0.05),
                            duration: 0.2
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <SocialIcon />
                        </motion.a>
                      );
                    })}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <Link
                      href={config.clientSpace.href}
                      className="flex items-center justify-center space-x-2 button-primary text-button-primary border border-transparent px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full shadow-sm hover:shadow-md hover:bg-[var(--hover-gradient)] hover:text-[var(--icon-text-primary)] hover:border-[var(--border-secondary)]"
                      onClick={closeMobileMenu}
                      prefetch={true}
                    >
                      {config.clientSpace.icon && getIcon(config.clientSpace.icon) && React.createElement(getIcon(config.clientSpace.icon), { className: "w-4 h-4" })}
                      <span>{t('navbar.clientSpace')}</span>
                    </Link>
                    {uiConfig.christmasTheme.enabled && (
                      <>
                        <Image
                          src="/christmas/button-deco-up.png"
                          alt="Christmas decoration"
                          width={32}
                          height={32}
                          className="absolute -top-2 -right-2 pointer-events-none"
                        />
                        <Image
                          src="/christmas/button-deco-down.png"
                          alt="Christmas decoration"
                          width={32}
                          height={32}
                          className="absolute -bottom-2 -left-2 pointer-events-none"
                        />
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;