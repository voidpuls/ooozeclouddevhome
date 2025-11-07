'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LayoutToggle from '../components/LayoutToggle';
import Image from 'next/image';
import Head from 'next/head';
import { Pricing } from '@/components/ui/pricing';
import { motion } from 'framer-motion';
import { Shield, Cpu, Network, HardDrive, Server, Globe, Lock, Clock } from 'lucide-react';
import Link from 'next/link';

// Preload images
const preloadImages = [
  '/images/ubuntu.svg',
  '/images/centos.svg',
  '/images/debian.svg',
  '/images/windows.svg',
  '/images/dashboard.png'
];

// Preload component
const PreloadImages = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {preloadImages.map((src) => (
        <link
          key={src}
          rel="preload"
          as="image"
          href={src}
          type={src.endsWith('.svg') ? 'image/svg+xml' : 'image/png'}
          crossOrigin="anonymous"
        />
      ))}
    </>
  );
};

// Ülke bazlı fiyatlandırma
const countryPricing = {
  de: {
    currency: "EUR",
    location: "Frankfurt",
    name: "Germany",
    multiplier: 1.0,
    plans: {
      starter: {
        monthly: 19.99,
        yearly: 15.99
      },
      pro: {
        monthly: 39.99,
        yearly: 31.99
      },
      enterprise: {
        monthly: 79.99,
        yearly: 63.99
      }
    }
  },
  uk: {
    currency: "GBP",
    location: "London",
    name: "United Kingdom",
    multiplier: 0.9,
    plans: {
      starter: {
        monthly: 17.99,
        yearly: 14.39
      },
      pro: {
        monthly: 35.99,
        yearly: 28.79
      },
      enterprise: {
        monthly: 71.99,
        yearly: 57.59
      }
    }
  },
  pl: {
    currency: "EUR",
    location: "Warsaw",
    name: "Poland",
    multiplier: 0.85,
    plans: {
      starter: {
        monthly: 16.99,
        yearly: 13.59
      },
      pro: {
        monthly: 33.99,
        yearly: 27.19
      },
      enterprise: {
        monthly: 67.99,
        yearly: 54.39
      }
    }
  },
  tr: {
    currency: "USD",
    location: "Istanbul",
    name: "Turkey",
    multiplier: 0.8,
    plans: {
      starter: {
        monthly: 15.99,
        yearly: 12.79
      },
      pro: {
        monthly: 31.99,
        yearly: 25.59
      },
      enterprise: {
        monthly: 63.99,
        yearly: 51.19
      }
    }
  }
};

const vpsPlans = [
  {
    name: "Starter VPS",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8GB DDR4",
      storage: "100GB NVMe SSD",
      bandwidth: "2TB @ 1Gbps",
      ddos: "Basic Protection",
      price: "$19.99/month"
    },
    features: [
      "Full Root Access",
      "DDoS Protection",
      "24/7 Support",
      "99.9% Uptime",
      "Instant Setup",
      "Multiple OS Options"
    ]
  },
  {
    name: "Pro VPS",
    specs: {
      cpu: "8 vCPU Cores",
      ram: "16GB DDR4",
      storage: "200GB NVMe SSD",
      bandwidth: "4TB @ 1Gbps",
      ddos: "Advanced Protection",
      price: "$39.99/month"
    },
    features: [
      "Full Root Access",
      "Advanced DDoS",
      "Priority Support",
      "99.9% Uptime",
      "Instant Setup",
      "Multiple OS Options"
    ]
  },
  {
    name: "Enterprise VPS",
    specs: {
      cpu: "16 vCPU Cores",
      ram: "32GB DDR4",
      storage: "400GB NVMe SSD",
      bandwidth: "8TB @ 1Gbps",
      ddos: "Premium Protection",
      price: "$79.99/month"
    },
    features: [
      "Full Root Access",
      "Premium DDoS",
      "24/7 Priority Support",
      "99.99% Uptime",
      "Instant Setup",
      "Multiple OS Options"
    ]
  }
];

const operatingSystems = [
  {
    name: "Ubuntu",
    versions: ["22.04 LTS", "20.04 LTS", "18.04 LTS"],
    type: "Linux",
    image: "/images/ubuntu.svg"
  },
  {
    name: "CentOS",
    versions: ["Stream 9", "Stream 8", "7"],
    type: "Linux",
    image: "/images/centos.svg"
  },
  {
    name: "Debian",
    versions: ["11", "10", "9"],
    type: "Linux",
    image: "/images/debian.svg"
  },
  {
    name: "Windows",
    versions: ["Server 2022", "Server 2019", "Server 2016"],
    type: "Windows",
    image: "/images/windows.svg"
  }
];

const features = [
  {
    title: "Donanım",
    description: "En son nesil AMD EPYC ve Intel Xeon işlemciler",
    details: [
      "32 Core CPU Desteği",
      "128GB DDR4 ECC RAM",
      "RAID Yapılandırması",
      "IPMI / KVM Erişimi"
    ],
    icon: <Cpu className="w-6 h-6 text-[#228B22]" />,
    value: "32 Core"
  },
  {
    title: "Depolama",
    description: "Enterprise NVMe SSD Diskler",
    details: [
      "2TB NVMe SSD Kapasite",
      "3500MB/s Okuma Hızı",
      "RAID 1/5/10 Desteği",
      "Anlık Disk Klonlama"
    ],
    icon: <HardDrive className="w-6 h-6 text-[#228B22]" />,
    value: "2TB"
  },
  {
    title: "Network",
    description: "Yüksek Hızlı Ağ Altyapısı",
    details: [
      "10 Gbps Port Hızı",
      "Sınırsız Trafik",
      "BGP Optimizasyonu",
      "IPv4 ve IPv6 Desteği"
    ],
    icon: <Network className="w-6 h-6 text-[#228B22]" />,
    value: "10 Gbps"
  },
  {
    title: "Altyapı",
    description: "Global Veri Merkezi Ağı",
    details: [
      "4 Farklı Lokasyon",
      "Tier-3 Veri Merkezleri",
      "7/24 Fiziksel Güvenlik",
      "Çift Güç Kaynağı"
    ],
    icon: <Globe className="w-6 h-6 text-[#228B22]" />,
    value: "4 Lokasyon"
  },
  {
    title: "Yedekleme",
    description: "Otomatik Yedekleme Sistemi",
    details: [
      "30 Günlük Yedekleme",
      "Anlık Geri Yükleme",
      "Özel Yedekleme Planı",
      "Uzak Depolama"
    ],
    icon: <Clock className="w-6 h-6 text-[#228B22]" />,
    value: "30 Gün"
  },
  {
    title: "Kurulum",
    description: "Hızlı ve Otomatik Kurulum",
    details: [
      "60 Saniye Kurulum",
      "Özel ISO Desteği",
      "Şablon Sistemleri",
      "API Entegrasyonu"
    ],
    icon: <Server className="w-6 h-6 text-[#228B22]" />,
    value: "60 Saniye"
  }
];

export default function VPS() {
  // Random value generation functions
  const getRandomCPU = () => Math.floor(Math.random() * (67 - 50 + 1)) + 50;
  const getRandomMemory = () => Math.floor(Math.random() * (40 - 23 + 1)) + 23;
  const getRandomNetwork = () => Math.floor(Math.random() * 40) + 30;

  // Ülkelere göre ping aralıkları
  const pingRanges = {
    de: { min: 35, max: 45 },    // Almanya
    uk: { min: 40, max: 50 },    // İngiltere
    pl: { min: 30, max: 40 },    // Polonya
    tr: { min: 3, max: 7 }       // Türkiye
  };

  const getRandomPing = (countryCode: string) => {
    const range = pingRanges[countryCode as keyof typeof pingRanges];
    if (!range) return '40ms';
    const ping = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    return `${ping}ms`;
  };

  const [countryPings, setCountryPings] = useState<Record<string, string>>({
    de: getRandomPing('de'),
    uk: getRandomPing('uk'),
    pl: getRandomPing('pl'),
    tr: getRandomPing('tr')
  });

  const updatePings = useCallback(() => {
    setCountryPings({
      de: getRandomPing('de'),
      uk: getRandomPing('uk'),
      pl: getRandomPing('pl'),
      tr: getRandomPing('tr')
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updatePings, 2000);
    return () => clearInterval(interval);
  }, [updatePings]);

  const [metrics, setMetrics] = useState({
    cpu: getRandomCPU(),
    memory: getRandomMemory(),
    network: getRandomNetwork(),
  });

  const updateMetrics = useCallback(() => {
    setMetrics({
      cpu: getRandomCPU(),
      memory: getRandomMemory(),
      network: getRandomNetwork(),
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const [isHorizontalLayout, setIsHorizontalLayout] = useState(false);

  useEffect(() => {
    // Get user preference from localStorage
    const savedLayout = localStorage.getItem('pricingLayout');
    if (savedLayout) {
      setIsHorizontalLayout(savedLayout === 'horizontal');
    }
  }, []);

  const handleLayoutChange = useCallback((isHorizontal: boolean) => {
    setIsHorizontalLayout(isHorizontal);
  }, []);

  // Grid sınıfını dinamik olarak hesapla
  const gridClass = useMemo(() => {
    return isHorizontalLayout
      ? "flex flex-col space-y-4 transition-all duration-300 ease-in-out"
      : "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300 ease-in-out";
  }, [isHorizontalLayout]);

  // Plan kartı sınıfını dinamik olarak hesapla
  const cardClass = useMemo(() => {
    return `${
      isHorizontalLayout 
        ? 'flex items-center bg-[#1a1d26] rounded-lg p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out'
        : 'bg-[#1a1d26] rounded-lg p-6 hover:scale-105 transition-all duration-300 ease-in-out'
    }`;
  }, [isHorizontalLayout]);

  const [selectedCountry, setSelectedCountry] = useState('de');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Ülke seçim komponenti
  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-16">
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Server Location</h3>
        <p className="text-gray-400 text-base md:text-lg">Choose the datacenter closest to your target audience for optimal performance</p>
      </div>
      <div className="flex flex-nowrap md:flex-wrap overflow-x-auto justify-start md:justify-center gap-4 md:gap-6 pb-4 md:pb-0">
        {Object.entries(countryPricing).map(([code, data]) => {
          const isOutOfStock = false;
          return (
            <button
              key={code}
              onClick={() => {
                setSelectedCountry(code);
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              disabled={isOutOfStock}
              className={`relative group p-3 md:p-6 rounded-xl border-2 transition-all duration-300 min-w-[140px] md:min-w-[200px] flex-shrink-0 ${
                selectedCountry === code
                  ? 'border-[#228B22] bg-[#228B22]/10'
                  : 'border-gray-800 hover:border-[#228B22]/50 hover:bg-[#228B22]/5'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-16 md:h-16 relative mb-2 md:mb-4">
                  <Image
                    src={`/images/flags/${code}.svg`}
                    alt={data.location}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <span className="text-base md:text-lg font-medium mb-0.5 md:mb-1">{data.location}</span>
                <span className="text-sm md:text-base text-gray-400">{data.name}</span>
                {selectedCountry === code && (
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#228B22] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // Seçili ülkeye göre plan fiyatlarını hesapla
  const getPlansForCountry = useCallback((countryCode: string) => {
    const countryData = countryPricing[countryCode as keyof typeof countryPricing];
    
    return [
      {
        name: "STARTER VPS",
        price: countryData.plans.starter.monthly.toFixed(2),
        yearlyPrice: countryData.plans.starter.yearly.toFixed(2),
        period: "per month",
        features: [
          "2 vCPU Cores",
          "4GB DDR4 RAM",
          "80GB NVMe SSD",
          "2TB Bandwidth",
          "1 IPv4 Address",
          "DDoS Protection",
          "Full Root Access",
          "24/7 Support",
          "99.9% Uptime",
          <div key="location" className="flex items-center gap-2">
            <span>Location: {countryData.location}</span>
            <Image
              src={`/images/flags/${countryCode}.svg`}
              alt={countryData.location}
              width={20}
              height={20}
              className="rounded-sm"
            />
          </div>
        ],
        description: "Perfect for small to medium websites and applications",
        buttonText: "Deploy Now",
        href: `/vps/deploy/${countryCode}/starter`,
        isPopular: false
      },
      {
        name: "PRO VPS",
        price: countryData.plans.pro.monthly.toFixed(2),
        yearlyPrice: countryData.plans.pro.yearly.toFixed(2),
        period: "per month",
        features: [
          "4 vCPU Cores",
          "8GB DDR4 RAM",
          "160GB NVMe SSD",
          "4TB Bandwidth",
          "2 IPv4 Addresses",
          "DDoS Protection",
          "Full Root Access",
          "Priority Support",
          "99.9% Uptime",
          "Automated Backups",
          <div key="location" className="flex items-center gap-2">
            <span>Location: {countryData.location}</span>
            <Image
              src={`/images/flags/${countryCode}.svg`}
              alt={countryData.location}
              width={20}
              height={20}
              className="rounded-sm"
            />
          </div>
        ],
        description: "Ideal for high-traffic websites and applications",
        buttonText: "Deploy Now",
        href: `/vps/deploy/${countryCode}/pro`,
        isPopular: true
      },
      {
        name: "ENTERPRISE VPS",
        price: countryData.plans.enterprise.monthly.toFixed(2),
        yearlyPrice: countryData.plans.enterprise.yearly.toFixed(2),
        period: "per month",
        features: [
          "8 vCPU Cores",
          "16GB DDR4 RAM",
          "320GB NVMe SSD",
          "8TB Bandwidth",
          "4 IPv4 Addresses",
          "DDoS Protection",
          "Full Root Access",
          "24/7 Priority Support",
          "99.99% Uptime",
          "Daily Backups",
          "Load Balancer",
          <div key="location" className="flex items-center gap-2">
            <span>Location: {countryData.location}</span>
            <Image
              src={`/images/flags/${countryCode}.svg`}
              alt={countryData.location}
              width={20}
              height={20}
              className="rounded-sm"
            />
          </div>
        ],
        description: "For large organizations with specific needs",
        buttonText: "Deploy Now",
        href: `/vps/deploy/${countryCode}/enterprise`,
        isPopular: false
      }
    ];
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Head>
        <PreloadImages />
      </Head>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              >
                <div className="w-2 h-2 bg-[#228B22]/10 rounded-full blur-sm"></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#228B22]/10 text-[#228B22] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#228B22] animate-pulse mr-2"></span>
                High Performance VPS
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                Cloud VPS with
                <span className="relative">
                  <span className="relative z-10 text-[#228B22]"> NVMe SSD</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#228B22]/20 rounded-full blur-sm"></span>
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Deploy your virtual private server in seconds. Powered by latest AMD EPYC processors
                and NVMe SSDs for maximum performance.
              </p>

              {/* Stats with Animation */}
              <div className="mt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                  { value: "<60s", label: "Deploy" }
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#228B22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    <div className="relative text-center">
                      <div className="text-2xl font-bold text-[#228B22] mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Terminal */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative">
                {/* Terminal Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#228B22] to-[#f59e0b] rounded-2xl opacity-20 blur"></div>
                
                <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800/50">
                  {/* Terminal Header */}
                  <div className="bg-black px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-400">Server Metrics</span>
                    </div>
                    <div className="w-20"></div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <span className="text-[#228B22]">$</span>
                        <span className="ml-2 typing-animation">monitor --server vps-01</span>
                      </div>
                      <div className="pl-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          <span>Monitoring server metrics...</span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">CPU Usage</span>
                              <span className="text-[#228B22]">{metrics.cpu}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#228B22] rounded-full transition-all duration-500"
                                style={{ width: `${metrics.cpu}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Memory Usage</span>
                              <span className="text-[#228B22]">{metrics.memory}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#228B22] rounded-full transition-all duration-500"
                                style={{ width: `${metrics.memory}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Network Usage</span>
                              <span className="text-[#228B22]">{metrics.network} Mbps</span>
                            </div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#228B22] rounded-full transition-all duration-500"
                                style={{ width: `${(metrics.network / 70) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shadow transition */}
      <div className="h-24 bg-gradient-to-b from-[#000000] to-black"></div>

      {/* Rest of the content with black background */}
      <div className="bg-black">
        {/* Country Selector */}
        <CountrySelector />

        {/* Plans Section */}
        <div id="pricing-section" className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <Pricing 
              plans={getPlansForCountry(selectedCountry)}
              title={`VPS Plans in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}`}
              description={`Choose the perfect VPS plan for your needs in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}.
All plans include NVMe SSDs, DDoS protection, and 24/7 support.`}
            />
        </div>
      </div>

        {/* Features Grid */}
        <div className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Operating Systems Slider */}
            <div className="mb-24">
              <div className="relative overflow-hidden">
                {/* Left shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10"></div>
                
                <div className="flex space-x-6 animate-scroll">
                  {[...operatingSystems, ...operatingSystems, ...operatingSystems].map((os, index) => (
                    <div
                      key={`${os.name}-${index}`}
                      className="flex-none w-44 bg-[#1a1d26] p-4 rounded-xl border border-gray-800 hover:border-[#228B22] transition-colors group"
                    >
                      <div className="relative h-24 w-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={os.image}
                          alt={os.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-300">{os.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10"></div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Do you offer Windows OS?",
                    answer: "Yes! When setting up a VPS, it is possible to opt for a free deployment of the Windows operating system."
                  },
                  {
                    question: "How quickly can I deploy a VPS?",
                    answer: "Our VPS deployment is instant. Once your payment is confirmed, your server will be automatically provisioned and ready to use within 60 seconds."
                  },
                  {
                    question: "Do you offer DDoS protection?",
                    answer: "Yes, all our VPS plans include enterprise-grade DDoS protection at no additional cost. Our protection system can mitigate attacks up to 10Tbps."
                  },
                  {
                    question: "What operating systems do you support?",
                    answer: "We support a wide range of operating systems including Ubuntu, CentOS, Debian, and Windows Server. You can also upload your own ISO if needed."
                  },
                  {
                    question: "Do you provide backups?",
                    answer: "Yes, we provide automated daily backups with 30-day retention for all VPS plans. You can also create manual backups anytime through the control panel."
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer: "We provide 24/7 technical support through live chat, ticket system, and WhatsApp. Our expert team is always ready to help you with any questions or issues."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-black border border-[#1a1d26] rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left bg-[#1a1d26] hover:bg-[#1a1d26]/80 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-xl font-semibold text-[#228B22]">{faq.question}</h3>
                      <svg 
                        className={`w-6 h-6 text-[#228B22] transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
                      }`}
                    >
                      <div className="border border-[#228B22]/20 rounded-xl bg-[#228B22]/5 p-4">
                        <p className="text-[#228B22]/90">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          font-family: 'Chakra Petch', sans-serif;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.33% - 1.5rem));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #228B22;
          white-space: nowrap;
          animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #228B22 }
        }
      `}</style>
    </div>
  );
} 