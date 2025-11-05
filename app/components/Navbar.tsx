'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building, Mail, Scale, Lock, Cookie, Globe } from 'lucide-react';

interface DropdownItem {
  title: string;
  url: string;
  flags?: string[];
  specs?: string[];
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  title: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  hasUpdate?: boolean;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      title: 'Hosting',
      url: '/webhosting',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Web Hosting',
          url: '/webhosting',
          specs: ['Starting at $2.99 per month']
        },
        {
          title: 'WordPress Hosting',
          url: '/webhosting/wordpress',
          specs: ['Starting at $4.99 per month']
        },
        {
          title: 'Reseller Hosting',
          url: '/webhosting/reseller',
          specs: ['Starting at $9.99 per month']
        }
      ]
    },
    {
      title: 'VPS Servers',
      url: '/vps',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Premium VPS',
          url: '/vps',
          flags: ['de', 'gb', 'pl', 'tr'],
          specs: ['Ryzen 9 7950X ✨ 20 Gbps ✨ 4 Tbps DDoS Protection']
        },
        {
          title: 'Budget VPS',
          url: '/vps/budget',
          flags: ['us', 'gb'],
          specs: ['AMD EPYC 7K Series ✨ 5 Gbps ✨ 4 Tbps DDoS Protection']
        }
      ]
    },
    {
      title: 'Dedicated Servers',
      url: '/dedicated',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Premium Dedicated',
          url: '/dedicated',
          flags: ['pl', 'tr', 'gb'],
          specs: ['Intel Xeon ✨ 10 Gbps ✨ DDoS Protection']
        }
      ]
    },
    {
      title: 'Game Servers',
      url: '/games',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Minecraft',
          url: '/games/minecraft',
          specs: ['Starting at $9.99 per month']
        },
        {
          title: 'Ark: Survival Evolved',
          url: '/games/ark-survival-evolved',
          specs: ['Starting at $12.99 per month']
        },
        {
          title: "Garry's Mod",
          url: '/games/garrys-mod',
          specs: ['Starting at $9.99 per month']
        },
        {
          title: '7 Days to Die',
          url: '/games/7-days-to-die',
          specs: ['Starting at $16.99 per month']
        },
        {
          title: 'Palworld',
          url: '/games/palworld',
          specs: ['Starting at $21.99 per month']
        },
        {
          title: 'DayZ',
          url: '/games/dayz',
          specs: ['Starting at $14.99 per month']
        },
        {
          title: 'Unturned',
          url: '/games/unturned',
          specs: ['Starting at $8.99 per month']
        },
        {
          title: 'Other Games',
          url: '/games',
          specs: ['View All Game Servers']
        }
      ]
    },
    {
      title: 'Company',
      url: '#',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'About Us',
          url: '/company/about',
          icon: <Building className="w-8 h-8 text-[#fbbf24]" />,
          description: "Learn about our story and mission"
        },
        {
          title: 'Contact Us',
          url: '/company/contact',
          icon: <Mail className="w-8 h-8 text-[#fbbf24]" />,
          description: "Get in touch with our team"
        },
        {
          title: 'Terms of Service',
          url: '/company/terms',
          icon: <Scale className="w-8 h-8 text-[#fbbf24]" />,
          description: "Our service terms and conditions"
        },
        {
          title: 'Privacy Policy',
          url: '/company/privacy',
          icon: <Lock className="w-8 h-8 text-[#fbbf24]" />,
          description: "How we protect your data"
        },
        {
          title: 'Cookie Policy',
          url: '/company/cookies',
          icon: <Cookie className="w-8 h-8 text-[#fbbf24]" />,
          description: "How we use cookies on our website"
        },
        {
          title: 'Locations',
          url: '/locations',
          icon: <Globe className="w-8 h-8 text-[#fbbf24]" />,
          description: "Our global data centers"
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = target.closest('.mobile-menu');
      const mobileMenuButton = target.closest('.mobile-menu-button');
      const navDropdown = target.closest('.nav-dropdown');
      const navLink = target.closest('.nav-link');

      // Handle mobile menu clicks
      if (!mobileMenu && !mobileMenuButton && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }

      // Handle desktop dropdown clicks
      if (!navDropdown && !navLink && !mobileMenu) {
        setActiveDropdown(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isScrolled, isMobileMenuOpen]);

  const handleDropdownToggle = (title: string | null, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#000000]' 
          : 'bg-[#000000]/100 backdrop-blur-sm shadow-lg border-b border-[#fbbf24]/10'
      }`}>
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Left Section: Logo and Announcements */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <h1 className="text-[#fbbf24] text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                LIQUID
              </h1>
            </Link>

            {/* Announcement Bar */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 px-4 py-1 bg-[#fbbf24]/10 rounded-full">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#fbbf24] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fbbf24]"></span>
                </span>
                <span className="text-[#fbbf24] text-sm">New servers available!</span>
                <span className="text-white bg-[#fbbf24] px-2 py-0.5 text-xs rounded-full">5</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group nav-dropdown"
                >
                  <Link
                    href={item.url}
                    className="px-4 py-2 text-white hover:text-[#fbbf24] transition-colors duration-200 flex items-center space-x-1 group nav-link"
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        handleDropdownToggle(item.title, e);
                      }
                    }}
                  >
                    <span>{item.title}</span>
                    {item.hasDropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {item.hasDropdown && activeDropdown === item.title && (
                    <div 
                      className={`absolute mt-0 bg-[#0B0E14] border border-[#fbbf24]/10 rounded-lg shadow-xl ${
                        item.title === 'Game Servers' 
                          ? 'w-[800px] p-4 -translate-x-1/2 left-1/2' 
                          : item.title === 'Company'
                            ? 'w-[400px] -translate-x-1/2 left-1/2'
                            : 'w-[600px] -translate-x-1/4 left-1/2'
                      }`}
                    >
                      {item.title === 'Game Servers' ? (
                        <div className="grid grid-cols-2 gap-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.url}
                              className="block p-4 text-white hover:bg-[#fbbf24]/5 transition-all duration-200 rounded-lg border border-[#fbbf24]/5"
                              onClick={handleLinkClick}
                            >
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                  {dropdownItem.title === 'Minecraft' && (
                                    <Image
                                      src="/images/icons/minecraft.png"
                                      alt="Minecraft"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === 'Ark: Survival Evolved' && (
                                    <Image
                                      src="/images/icons/ark.jpg"
                                      alt="Ark: Survival Evolved"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === "Garry's Mod" && (
                                    <Image
                                      src="/images/icons/garrysmod.jpg"
                                      alt="Garry's Mod"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === '7 Days to Die' && (
                                    <Image
                                      src="/images/icons/7daystodie.png"
                                      alt="7 Days to Die"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === 'Palworld' && (
                                    <Image
                                      src="/images/icons/palworld.jpg"
                                      alt="Palworld"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === 'DayZ' && (
                                    <Image
                                      src="/images/icons/dayz.jpg"
                                      alt="DayZ"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === 'Unturned' && (
                                    <Image
                                      src="/images/icons/unturned.png"
                                      alt="Unturned"
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  )}
                                  {dropdownItem.title === 'Other Games' && (
                                    <div className="w-12 h-12 flex items-center justify-center text-[#fbbf24]">
                                      <svg 
                                        className="w-8 h-8" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                      >
                                        <path d="M6 12h4m-2-2v4M15 9h.01M18 9h.01" />
                                        <rect width="20" height="12" x="2" y="6" rx="2" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <span className="font-medium text-lg block">{dropdownItem.title}</span>
                                  {dropdownItem.specs && (
                                    <span className="text-sm text-gray-400">{dropdownItem.specs[0]}</span>
                                  )}
                                </div>
                                <svg
                                  className="w-5 h-5 text-gray-400 ml-auto"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : item.title === 'Hosting' ? (
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.url}
                              className="block px-6 py-4 text-white hover:bg-[#fbbf24]/5 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-[#fbbf24]/5 last:border-b-0"
                              onClick={handleLinkClick}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  {dropdownItem.title === 'Web Hosting' ? (
                                    <svg className="w-6 h-6 text-[#fbbf24]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                  ) : dropdownItem.title === 'WordPress Hosting' ? (
                                    <svg className="w-6 h-6 text-[#fbbf24]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                  ) : (
                                    <svg className="w-6 h-6 text-[#fbbf24]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                  )}
                                  <div>
                                    <span className="font-medium text-lg">{dropdownItem.title}</span>
                                    {dropdownItem.specs && (
                                      <div className="text-sm text-gray-400">{dropdownItem.specs[0]}</div>
                                    )}
                                  </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : item.title === 'Company' ? (
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.url}
                              className="block px-6 py-4 text-white hover:bg-[#fbbf24]/5 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-[#fbbf24]/5 last:border-b-0"
                              onClick={handleLinkClick}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="p-3 bg-[#fbbf24]/10 rounded-xl">
                                    {dropdownItem.icon}
                                  </div>
                                  <div>
                                    <span className="font-medium text-lg">{dropdownItem.title}</span>
                                    {dropdownItem.description && (
                                      <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                    )}
                                  </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.url}
                            className="block px-6 py-4 text-white hover:bg-[#fbbf24]/5 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-[#fbbf24]/5 last:border-b-0"
                            onClick={handleLinkClick}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                {dropdownItem.title === 'Support' ? (
                                  <svg 
                                    className="w-6 h-6 text-[#fbbf24] shrink-0" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                                    />
                                  </svg>
                                ) : dropdownItem.title === 'Locations' ? (
                                  <svg 
                                    className="w-6 h-6 text-[#fbbf24] shrink-0" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                ) : dropdownItem.title === 'Contact' ? (
                                  <svg 
                                    className="w-6 h-6 text-[#fbbf24] shrink-0" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                ) : (
                                  <svg 
                                    className="w-12 h-12 text-[#fbbf24] shrink-0" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" 
                                    />
                                  </svg>
                                )}
                                <div>
                                  <span className="font-medium text-lg">{dropdownItem.title}</span>
                                  {dropdownItem.specs && (
                                    <div className="mt-2 text-sm text-gray-400">
                                      {dropdownItem.specs.map((spec, index) => (
                                        <div key={index}>{spec}</div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                              {dropdownItem.flags && (
                                <div className="flex space-x-2 ml-4">
                                  {dropdownItem.flags.map((flag, index) => (
                                    <div key={index} className="relative w-8 h-5">
                                      <Image
                                        src={`/images/flag/${flag}.svg`}
                                        alt={`${flag} flag`}
                                        fill
                                        className="object-cover rounded-sm"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-black border border-[#fbbf24] hover:bg-[#fbbf24] text-[#fbbf24] hover:text-black px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#fbbf24]/20"
            >
              LOGIN
            </Link>
            <Link
              href="/register"
              className="bg-black border border-[#fbbf24] hover:bg-[#fbbf24] text-[#fbbf24] hover:text-black px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#fbbf24]/20"
            >
              REGISTER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-[#fbbf24] transition-colors duration-300 mobile-menu-button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden bg-[#0B0E14] border-t border-[#fbbf24]/10 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-2 space-y-2 overflow-y-auto max-h-[calc(80vh-4rem)]">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-[#fbbf24]/10 last:border-b-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownToggle(activeDropdown === item.title ? null : item.title, e);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:text-[#fbbf24] transition-colors duration-200"
                >
                  <span className="text-lg font-medium">{item.title}</span>
                  {item.hasDropdown && (
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.hasDropdown && activeDropdown === item.title && (
                  <div className="bg-[#0B0E14]/50 py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.url}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick();
                        }}
                        className="block px-8 py-3 text-gray-300 hover:text-white hover:bg-[#fbbf24]/5 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {dropdownItem.icon && (
                            <div className="p-2 bg-[#fbbf24]/10 rounded-lg">
                              {dropdownItem.icon}
                            </div>
                          )}
                          <div>
                            <div className="font-medium">{dropdownItem.title}</div>
                            {dropdownItem.description && (
                              <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                            )}
                            {dropdownItem.specs && (
                              <div className="text-sm text-gray-400">{dropdownItem.specs[0]}</div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Menu Buttons */}
            <div className="grid grid-cols-2 gap-4 px-4 py-4 border-t border-[#fbbf24]/10">
              <Link
                href="/login"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick();
                }}
                className="bg-black border border-[#fbbf24] hover:bg-[#fbbf24] text-[#fbbf24] hover:text-black px-4 py-2 rounded-lg text-center text-sm font-medium transition-all duration-300"
              >
                LOGIN
              </Link>
              <Link
                href="/register"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick();
                }}
                className="bg-black border border-[#fbbf24] hover:bg-[#fbbf24] text-[#fbbf24] hover:text-black px-4 py-2 rounded-lg text-center text-sm font-medium transition-all duration-300"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
