'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LayoutToggle from '../components/LayoutToggle';
import Image from 'next/image';
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Shield, Cpu, Network, HardDrive, Globe, Clock, Server, Lock } from 'lucide-react';
import { Pricing } from '@/components/ui/pricing';

const features: BentoItem[] = [
  {
    title: "SSD Storage",
    description: "Lightning-fast SSD storage for optimal performance and reliability.",
    icon: <HardDrive className="w-4 h-4 text-blue-500" />,
    status: "Enterprise",
    tags: ["NVMe", "Fast", "Reliable"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "SSL Certificates",
    description: "Free SSL certificates with automatic renewal and setup.",
    icon: <Lock className="w-4 h-4 text-emerald-500" />,
    status: "Included",
    tags: ["Security", "Free"],
  },
  {
    title: "Global CDN",
    description: "Content delivery network with global edge locations.",
    icon: <Globe className="w-4 h-4 text-purple-500" />,
    tags: ["Speed", "Global"],
    colSpan: 2,
  },
  {
    title: "24/7 Support",
    description: "Expert technical support available around the clock.",
    icon: <Clock className="w-4 h-4 text-sky-500" />,
    status: "Live",
    tags: ["Support", "Priority"],
  },
  {
    title: "DDoS Protection",
    description: "Advanced protection against DDoS attacks and threats.",
    icon: <Shield className="w-4 h-4 text-red-500" />,
    status: "Active",
    tags: ["Security", "Protection"],
    colSpan: 2,
  },
  {
    title: "Server Management",
    description: "Full server management with cPanel control panel.",
    icon: <Server className="w-4 h-4 text-amber-500" />,
    status: "Managed",
    tags: ["cPanel", "Easy"],
  }
];

const countryPricing = {
  de: {
    currency: "EUR",
    location: "Frankfurt",
    name: "Germany",
    multiplier: 1.0,
    plans: {
      starter: {
        monthly: 4.99,
        yearly: 3.99
      },
      professional: {
        monthly: 9.99,
        yearly: 7.99
      },
      business: {
        monthly: 19.99,
        yearly: 15.99
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
        monthly: 3.99,
        yearly: 3.19
      },
      professional: {
        monthly: 8.99,
        yearly: 7.19
      },
      business: {
        monthly: 17.99,
        yearly: 14.39
      }
    }
  },
  pl: {
    currency: "PLN",
    location: "Warsaw",
    name: "Poland",
    multiplier: 0.85,
    plans: {
      starter: {
        monthly: 19.99,
        yearly: 15.99
      },
      professional: {
        monthly: 39.99,
        yearly: 31.99
      },
      business: {
        monthly: 79.99,
        yearly: 63.99
      }
    }
  },
  tr: {
    currency: "TRY",
    location: "Istanbul",
    name: "Turkey",
    multiplier: 0.8,
    plans: {
      starter: {
        monthly: 149.99,
        yearly: 119.99
      },
      professional: {
        monthly: 299.99,
        yearly: 239.99
      },
      business: {
        monthly: 599.99,
        yearly: 479.99
      }
    }
  }
};

export default function WebHosting() {
  const [isHorizontalLayout, setIsHorizontalLayout] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('de');
  const [countryPings, setCountryPings] = useState({
    de: '35ms',
    uk: '45ms',
    pl: '35ms',
    tr: '5ms'
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const updatePings = () => {
      setCountryPings({
        de: `${35 + Math.floor(Math.random() * 10)}ms`, // 35-45ms
        uk: `${40 + Math.floor(Math.random() * 10)}ms`, // 40-50ms
        pl: `${30 + Math.floor(Math.random() * 10)}ms`, // 30-40ms
        tr: `${3 + Math.floor(Math.random() * 4)}ms`,   // 3-7ms
      });
    };

    const interval = setInterval(updatePings, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLayoutChange = useCallback((isHorizontal: boolean) => {
    setIsHorizontalLayout(isHorizontal);
  }, []);

  const handleCountrySelect = useCallback((code: string) => {
    setSelectedCountry(code);
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Grid sınıfını dinamik olarak hesapla
  const gridClass = useMemo(() => {
    return isHorizontalLayout
      ? "flex flex-col space-y-4"
      : "grid grid-cols-1 md:grid-cols-3 gap-8";
  }, [isHorizontalLayout]);

  // Plan kartı sınıfını dinamik olarak hesapla
  const cardClass = useMemo(() => {
    return `${
      isHorizontalLayout 
        ? 'flex items-center bg-[#1a1d26] rounded-lg p-6 hover:scale-[1.02] transition-transform'
        : 'bg-[#1a1d26] rounded-lg p-6 hover:scale-105 transition-transform'
    }`;
  }, [isHorizontalLayout]);

  // Country Selector Component
  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your target audience for optimal performance</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(countryPricing).map(([code, data]) => (
          <button
            key={code}
            onClick={() => handleCountrySelect(code)}
            className={`relative group p-6 rounded-xl border-2 transition-all duration-300 min-w-[200px] ${
              selectedCountry === code
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
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <span className="text-lg font-medium mb-1">{data.location}</span>
              <span className="text-base text-gray-400">{data.name}</span>
              {selectedCountry === code && (
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
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Main Background */}
      <div className="fixed inset-0">
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

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="relative pt-32 pb-20">
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#228B22]/10 text-[#228B22] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#228B22] animate-pulse mr-2"></span>
                  Professional Web Hosting
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                  Your Website's 
                  <span className="relative">
                    <span className="relative z-10 text-[#228B22]"> Perfect Home</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-[#228B22]/20 rounded-full blur-sm"></span>
                  </span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  Lightning-fast SSD hosting with free SSL, daily backups, and 24/7 support.
                  Perfect for websites, blogs, and e-commerce.
                </p>

                {/* Stats with Animation */}
                <div className="mt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
                  {[
                    { value: "99.9%", label: "Uptime" },
                    { value: "24/7", label: "Support" },
                    { value: "1-Click", label: "Install" }
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
                        <span className="text-sm text-gray-400">Installation Wizard</span>
                      </div>
                      <div className="w-20"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 font-mono text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-400">
                          <span className="text-[#228B22]">$</span>
                          <span className="ml-2 typing-animation">install --type wordpress --domain example.com</span>
                        </div>
                        <div className="pl-4">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span>Installing WordPress...</span>
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center text-green-400">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>Database created</span>
                            </div>
                            <div className="flex items-center text-green-400">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>Files downloaded</span>
                            </div>
                            <div className="flex items-center text-[#228B22]">
                              <span className="w-4 h-4 mr-2 animate-pulse">⚡</span>
                              <span>Configuring WordPress...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-black p-4 border-t border-gray-800/50">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-[#228B22]">75%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#228B22] w-[75%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section using BentoGrid */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#228B22]/10 text-[#228B22] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#228B22] mr-2"></span>
                Premium Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything You Need to 
                <span className="text-[#228B22]"> Succeed Online</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Powerful features designed to help you build and grow your online presence.
              </p>
            </div>

            <BentoGrid items={features} />
          </div>
        </div>

        {/* Country Selector */}
        <CountrySelector />

        {/* Plans Section */}
        <div id="pricing-section" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 relative">
            <Pricing 
              plans={[
                {
                  name: "STARTER",
                  price: countryPricing[selectedCountry as keyof typeof countryPricing].plans.starter.monthly.toFixed(2),
                  yearlyPrice: countryPricing[selectedCountry as keyof typeof countryPricing].plans.starter.yearly.toFixed(2),
                  period: "per month",
                  features: [
                    `10GB SSD Storage`,
                    `100GB Bandwidth`,
                    `1 Domain`,
                    `5 Subdomains`,
                    `2 Databases`,
                    `cPanel Control Panel`,
                    `1-Click Installers`,
                    `Free SSL Certificate`,
                    `Daily Backups`,
                    `99.9% Uptime`,
                    <div key="location" className="flex items-center gap-2">
                      <span>Location: {countryPricing[selectedCountry as keyof typeof countryPricing].location}</span>
                      <Image
                        src={`/images/flags/${selectedCountry}.svg`}
                        alt={countryPricing[selectedCountry as keyof typeof countryPricing].location}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                    </div>
                  ],
                  description: "Perfect for small to medium websites and applications",
                  buttonText: "Get Started",
                  href: "/deploy",
                  isPopular: false,
                },
                {
                  name: "PROFESSIONAL",
                  price: countryPricing[selectedCountry as keyof typeof countryPricing].plans.professional.monthly.toFixed(2),
                  yearlyPrice: countryPricing[selectedCountry as keyof typeof countryPricing].plans.professional.yearly.toFixed(2),
                  period: "per month",
                  features: [
                    `50GB SSD Storage`,
                    `500GB Bandwidth`,
                    `5 Domains`,
                    `20 Subdomains`,
                    `10 Databases`,
                    `cPanel Control Panel`,
                    `1-Click Installers`,
                    `Wildcard SSL`,
                    `Daily Backups`,
                    `99.9% Uptime`,
                    `Priority Support`,
                    <div key="location" className="flex items-center gap-2">
                      <span>Location: {countryPricing[selectedCountry as keyof typeof countryPricing].location}</span>
                      <Image
                        src={`/images/flags/${selectedCountry}.svg`}
                        alt={countryPricing[selectedCountry as keyof typeof countryPricing].location}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                    </div>
                  ],
                  description: "Ideal for growing businesses and high-traffic sites",
                  buttonText: "Deploy Now",
                  href: "/deploy",
                  isPopular: true,
                },
                {
                  name: "BUSINESS",
                  price: countryPricing[selectedCountry as keyof typeof countryPricing].plans.business.monthly.toFixed(2),
                  yearlyPrice: countryPricing[selectedCountry as keyof typeof countryPricing].plans.business.yearly.toFixed(2),
                  period: "per month",
                  features: [
                    `100GB SSD Storage`,
                    `1000GB Bandwidth`,
                    `Unlimited Domains`,
                    `Unlimited Subdomains`,
                    `Unlimited Databases`,
                    `cPanel Control Panel`,
                    `1-Click Installers`,
                    `Wildcard SSL`,
                    `Daily Backups`,
                    `99.99% Uptime`,
                    `24/7 Priority Support`,
                    <div key="location" className="flex items-center gap-2">
                      <span>Location: {countryPricing[selectedCountry as keyof typeof countryPricing].location}</span>
                      <Image
                        src={`/images/flags/${selectedCountry}.svg`}
                        alt={countryPricing[selectedCountry as keyof typeof countryPricing].location}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                    </div>
                  ],
                  description: "Perfect for large businesses and high-traffic sites",
                  buttonText: "Get Started",
                  href: "/deploy",
                  isPopular: false,
                }
              ]}
            />
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-16 pb-24">
            <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {[
                {
                  question: "What is Web Hosting?",
                  answer: "Web hosting is a service that allows you to publish your website files on the internet. It provides the necessary server space, bandwidth, and technology to keep your website accessible 24/7. Think of it as your website's home on the internet."
                },
                {
                  question: "Do you provide SSL certificates?",
                  answer: "Yes, all our hosting plans include free SSL certificates with automatic setup and renewal. This ensures your website is secure with HTTPS protocol, protecting your visitors' data and improving your search engine rankings."
                },
                {
                  question: "How does the backup system work?",
                  answer: "We provide automated daily backups for all hosting plans with a 30-day retention period. You can also create manual backups anytime through your control panel. This ensures your data is always safe and recoverable."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We provide 24/7 technical support through multiple channels including live chat, ticket system, and email. Our expert team is always ready to help you with any questions or technical issues you might encounter."
                },
                {
                  question: "Can you help migrate my existing website?",
                  answer: "Yes! We offer free website migration service. Our technical team will handle the entire process, ensuring your website is transferred seamlessly without any downtime. This includes moving your files, databases, and emails."
                },
                {
                  question: "What control panel do you use?",
                  answer: "We use cPanel, the industry-leading control panel, known for its user-friendly interface and robust features. It makes managing your hosting account, emails, databases, and files simple and efficient."
                },
                {
                  question: "What about uptime guarantee?",
                  answer: "We offer a 99.9% uptime guarantee for all hosting plans. Our infrastructure is built with redundancy at every level to ensure maximum reliability and continuous availability of your website."
                },
                {
                  question: "Can I upgrade my hosting plan later?",
                  answer: "Absolutely! You can upgrade your hosting plan at any time as your website grows. The upgrade process is seamless and doesn't cause any downtime to your website. We'll help you choose the right plan based on your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-bold text-[#228B22]">{faq.question}</h3>
                    <svg 
                      className={`w-6 h-6 text-[#228B22] transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}