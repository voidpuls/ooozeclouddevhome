'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LayoutToggle from '../../components/LayoutToggle';
import Image from 'next/image';
import Head from 'next/head';
import { Pricing } from '@/components/ui/pricing';
import { motion } from 'framer-motion';
import { Shield, Cpu, Network, HardDrive, Server, Globe, Lock, Clock } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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
  us: {
    location: "United States",
    name: "New York",
    ping: "120ms",
    plans: {
      starter: {
        monthly: 4.99,
        yearly: 47.88
      },
      pro: {
        monthly: 9.99,
        yearly: 95.88
      },
      enterprise: {
        monthly: 19.99,
        yearly: 191.88
      }
    }
  },
  uk: {
    location: "United Kingdom",
    name: "London",
    ping: "45ms",
    plans: {
      starter: {
        monthly: 5.99,
        yearly: 57.48
      },
      pro: {
        monthly: 11.99,
        yearly: 115.08
      },
      enterprise: {
        monthly: 23.99,
        yearly: 230.28
      }
    }
  },
  tr: {
    location: "Turkey",
    name: "Istanbul",
    ping: "5ms",
    plans: {
      starter: {
        monthly: 3.99,
        yearly: 38.28
      },
      pro: {
        monthly: 7.99,
        yearly: 76.68
      },
      enterprise: {
        monthly: 15.99,
        yearly: 153.48
      }
    }
  },
  pl: {
    location: "Poland",
    name: "Warsaw",
    ping: "35ms",
    plans: {
      starter: {
        monthly: 4.49,
        yearly: 43.08
      },
      pro: {
        monthly: 8.99,
        yearly: 86.28
      },
      enterprise: {
        monthly: 17.99,
        yearly: 172.68
      }
    }
  }
};

const vpsPlans = [
  {
    name: "Basic VPS",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "2GB DDR4",
      storage: "20GB SSD",
      bandwidth: "1TB @ 1Gbps",
      ddos: "Basic Protection",
      price: "$4.99/month"
    },
    features: [
      "Full Root Access",
      "DDoS Protection",
      "24/7 Support",
      "99.9% Uptime",
      "Instant Setup",
      "Linux OS Options"
    ]
  },
  {
    name: "Value VPS",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "4GB DDR4",
      storage: "40GB SSD",
      bandwidth: "2TB @ 1Gbps",
      ddos: "Basic Protection",
      price: "$9.99/month"
    },
    features: [
      "Full Root Access",
      "DDoS Protection",
      "24/7 Support",
      "99.9% Uptime",
      "Instant Setup",
      "Linux OS Options"
    ]
  },
  {
    name: "Plus VPS",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8GB DDR4",
      storage: "80GB SSD",
      bandwidth: "3TB @ 1Gbps",
      ddos: "Basic Protection",
      price: "$19.99/month"
    },
    features: [
      "Full Root Access",
      "DDoS Protection",
      "24/7 Support",
      "99.9% Uptime",
      "Instant Setup",
      "Linux OS Options"
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
  }
];

const features = [
  {
    title: "Donanım",
    description: "AMD EPYC işlemciler",
    details: [
      "4 Core CPU Desteği",
      "8GB DDR4 RAM",
      "SSD Depolama",
      "KVM Erişimi"
    ],
    icon: <Cpu className="w-6 h-6 text-[#228B22]" />,
    value: "4 Core"
  },
  {
    title: "Depolama",
    description: "SSD Diskler",
    details: [
      "80GB SSD Kapasite",
      "500MB/s Okuma Hızı",
      "Yedekleme Desteği",
      "Anlık Disk Yönetimi"
    ],
    icon: <HardDrive className="w-6 h-6 text-[#228B22]" />,
    value: "80GB"
  },
  {
    title: "Network",
    description: "Güvenilir Ağ Altyapısı",
    details: [
      "1 Gbps Port Hızı",
      "Sınırsız Trafik",
      "DDoS Koruması",
      "IPv4 Desteği"
    ],
    icon: <Network className="w-6 h-6 text-[#228B22]" />,
    value: "1 Gbps"
  }
];

export default function BudgetVPSPage() {
  const searchParams = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>(() => {
    const defaultCountry = 'us';
    const country = searchParams?.get('country');
    return country && Object.keys(countryPricing).includes(country) ? country : defaultCountry;
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [metrics, setMetrics] = useState({
    cpu: 25,
    memory: 45,
    network: 30
  });
  const [countryPings, setCountryPings] = useState({
    us: "120ms",
    uk: "45ms", 
    tr: "5ms",
    pl: "35ms"
  });

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 40) + 20,
        memory: Math.floor(Math.random() * 30) + 30,
        network: Math.floor(Math.random() * 40) + 20
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePings = () => {
      setCountryPings({
        us: `${110 + Math.floor(Math.random() * 20)}ms`, // 110-130ms
        uk: `${40 + Math.floor(Math.random() * 10)}ms`,  // 40-50ms
        tr: `${3 + Math.floor(Math.random() * 4)}ms`,    // 3-7ms
        pl: `${30 + Math.floor(Math.random() * 10)}ms`   // 30-40ms
      });
    };

    const interval = setInterval(updatePings, 2000);
    return () => clearInterval(interval);
  }, []);

  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your target audience for optimal performance</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(countryPricing).map(([code, data]) => {
          const isOutOfStock = ([] as string[]).includes(code);
          return (
            <button
              key={code}
              onClick={() => {
                if (!isOutOfStock) {
                  setSelectedCountry(code);
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative group p-6 rounded-xl border-2 transition-all duration-300 min-w-[200px] ${
                isOutOfStock 
                  ? 'border-red-500/50 bg-red-500/5 opacity-75 cursor-not-allowed'
                  : selectedCountry === code
                    ? 'border-[#228B22] bg-[#228B22]/10'
                    : 'border-gray-800 hover:border-[#228B22]/50 hover:bg-[#228B22]/5'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 relative mb-4">
                  <Image
                    src={`/images/flags/${code}.svg`}
                    alt={data.location}
                    fill
                    className={`object-cover rounded-lg shadow-lg ${isOutOfStock ? 'grayscale' : ''}`}
                  />
                </div>
                <span className="text-lg font-medium mb-1">{data.location}</span>
                <span className="text-base text-gray-400">{data.name}</span>
                {isOutOfStock && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </div>
                  </div>
                )}
                {selectedCountry === code && !isOutOfStock && (
                  <div className="absolute -top-3 -right-3">
                    <div className="w-6 h-6 bg-[#228B22] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const getPlansForCountry = useCallback((countryCode: string) => {
    const countryData = countryPricing[countryCode as keyof typeof countryPricing];
    
    // Check if the country is out of stock
    const isOutOfStock = ([] as string[]).includes(countryCode);
    
    return [
      {
        name: "BASIC VPS",
        price: countryData.plans.starter.monthly.toFixed(2),
        yearlyPrice: countryData.plans.starter.yearly.toFixed(2),
        period: "per month",
        features: [
          "2 vCPU Cores",
          "2GB DDR4 RAM",
          "20GB SSD",
          "1TB Bandwidth",
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
        description: "Perfect for small websites and applications",
        buttonText: isOutOfStock ? "Out of Stock" : "Deploy Now",
        href: "/deploy",
        isPopular: false,
        isOutOfStock: isOutOfStock,
        buttonDisabled: isOutOfStock,
        buttonClassName: isOutOfStock ? "bg-red-500/10 text-red-500 border-red-500/20 cursor-not-allowed" : ""
      },
      {
        name: "VALUE VPS",
        price: countryData.plans.pro.monthly.toFixed(2),
        yearlyPrice: countryData.plans.pro.yearly.toFixed(2),
        period: "per month",
        features: [
          "2 vCPU Cores",
          "4GB DDR4 RAM",
          "40GB SSD",
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
        description: "Great for medium-sized websites",
        buttonText: isOutOfStock ? "Out of Stock" : "Deploy Now",
        href: "/deploy",
        isPopular: true,
        isOutOfStock: isOutOfStock,
        buttonDisabled: isOutOfStock,
        buttonClassName: isOutOfStock ? "bg-red-500/10 text-red-500 border-red-500/20 cursor-not-allowed" : ""
      },
      {
        name: "PLUS VPS",
        price: countryData.plans.enterprise.monthly.toFixed(2),
        yearlyPrice: countryData.plans.enterprise.yearly.toFixed(2),
        period: "per month",
        features: [
          "4 vCPU Cores",
          "8GB DDR4 RAM",
          "80GB SSD",
          "3TB Bandwidth",
          "2 IPv4 Addresses",
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
        description: "Perfect for larger websites and applications",
        buttonText: isOutOfStock ? "Out of Stock" : "Deploy Now",
        href: "/deploy",
        isPopular: false,
        isOutOfStock: isOutOfStock,
        buttonDisabled: isOutOfStock,
        buttonClassName: isOutOfStock ? "bg-red-500/10 text-red-500 border-red-500/20 cursor-not-allowed" : ""
      }
    ];
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                Budget-Friendly VPS
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                Affordable VPS with
                <span className="relative">
                  <span className="relative z-10 text-[#228B22]"> SSD Storage</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#228B22]/20 rounded-full blur-sm"></span>
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Get started with our budget-friendly VPS solutions. Perfect for small to medium websites
                and applications.
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
                        <span className="ml-2 typing-animation">monitor --server budget-vps-01</span>
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
              title={`Budget VPS Plans in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}`}
              description={`Choose your budget-friendly VPS plan in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}.
All plans include SSD storage, DDoS protection, and 24/7 support.`}
            />
          </div>
        </div>

        {/* Operating Systems Slider */}
        <div className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4">
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
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What's the difference between Budget and Premium VPS?",
                answer: "Budget VPS offers cost-effective solutions with standard SSD storage and basic features, while Premium VPS provides NVMe SSDs, higher performance, and additional features for more demanding applications."
              },
              {
                question: "How quickly can I deploy a Budget VPS?",
                answer: "Our Budget VPS deployment is instant. Once your payment is confirmed, your server will be automatically provisioned and ready to use within 60 seconds."
              },
              {
                question: "Do you offer DDoS protection on Budget VPS?",
                answer: "Yes, all our Budget VPS plans include basic DDoS protection at no additional cost to ensure your services remain online and protected."
              },
              {
                question: "What operating systems do you support on Budget VPS?",
                answer: "We support popular Linux distributions including Ubuntu, CentOS, and Debian. Windows Server is not available on Budget VPS plans."
              },
              {
                question: "Can I upgrade my Budget VPS later?",
                answer: "Yes, you can easily upgrade to a higher Budget VPS plan or switch to our Premium VPS plans at any time without losing your data."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide 24/7 technical support through ticket system and email. Our expert team is always ready to help you with any questions or issues."
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
  );
} 