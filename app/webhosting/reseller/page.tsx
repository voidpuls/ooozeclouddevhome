'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Shield, Users, Network, HardDrive, Globe, Clock, Server, Lock, Zap, DollarSign, Gauge, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features: BentoItem[] = [
  {
    title: "White Label Solution",
    description: "Fully brandable hosting platform with your own logo, brand, and domain name.",
    icon: <DollarSign className="w-5 h-5 text-[#228B22]" />,
    status: "Premium",
    tags: ["Branding", "Custom"],
    colSpan: 1,
    hasPersistentHover: true,
  },
  {
    title: "Client Management",
    description: "Easy-to-use client management panel with billing and support integration.",
    icon: <Users className="w-5 h-5 text-[#228B22]" />,
    status: "Advanced",
    tags: ["Management", "Billing"],
    colSpan: 1,
  },
  {
    title: "WHM Control Panel",
    description: "Full access to WHM for complete control over your hosting business.",
    icon: <Server className="w-5 h-5 text-[#228B22]" />,
    status: "Included",
    tags: ["Control", "WHM"],
    colSpan: 1,
  },
  {
    title: "Resource Allocation",
    description: "Flexible resource allocation with easy scaling options for your clients.",
    icon: <Gauge className="w-5 h-5 text-[#228B22]" />,
    status: "Dynamic",
    tags: ["Resources", "Scaling"],
    colSpan: 1,
  },
  {
    title: "High Performance",
    description: "LiteSpeed Web Server with built-in caching and optimization features.",
    icon: <Zap className="w-5 h-5 text-[#228B22]" />,
    status: "Premium",
    tags: ["Speed", "Performance"],
    colSpan: 1,
  },
  {
    title: "24/7 Support",
    description: "Priority technical support to help you manage your hosting business.",
    icon: <Clock className="w-5 h-5 text-[#228B22]" />,
    status: "24/7",
    tags: ["Support", "Priority"],
    colSpan: 1,
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
        monthly: 29.99,
        yearly: 24.99
      },
      professional: {
        monthly: 49.99,
        yearly: 44.99
      },
      business: {
        monthly: 89.99,
        yearly: 79.99
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
        monthly: 24.99,
        yearly: 21.99
      },
      professional: {
        monthly: 44.99,
        yearly: 39.99
      },
      business: {
        monthly: 79.99,
        yearly: 69.99
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
        monthly: 119.99,
        yearly: 99.99
      },
      professional: {
        monthly: 199.99,
        yearly: 179.99
      },
      business: {
        monthly: 359.99,
        yearly: 319.99
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
        monthly: 599.99,
        yearly: 499.99
      },
      professional: {
        monthly: 999.99,
        yearly: 899.99
      },
      business: {
        monthly: 1799.99,
        yearly: 1599.99
      }
    }
  }
};

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export default function ResellerHosting() {
  const [selectedCountry, setSelectedCountry] = useState('de');
  const [countryPings, setCountryPings] = useState({
    de: '35ms',
    uk: '45ms',
    pl: '35ms',
    tr: '5ms'
  });
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const updatePings = () => {
      setCountryPings({
        de: `${Math.floor(Math.random() * (50 - 30 + 1)) + 30}ms`,
        uk: `${Math.floor(Math.random() * (55 - 35 + 1)) + 35}ms`,
        pl: `${Math.floor(Math.random() * (45 - 25 + 1)) + 25}ms`,
        tr: `${Math.floor(Math.random() * (10 - 1 + 1)) + 1}ms`,
      });
    };

    const interval = setInterval(updatePings, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCountrySelect = useCallback((code: string) => {
    setSelectedCountry(code);
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12 h-[120px] flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your target audience</p>
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

  const pricingPlans: PricingPlan[] = [
    {
      name: "STARTER",
      description: "Perfect for starting your hosting business",
      price: "$29.99",
      yearlyPrice: "$299.99",
      period: "monthly",
      features: [
        "Up to 25 cPanel Accounts",
        "50GB SSD Storage",
        "500GB Bandwidth",
        "Free SSL Certificates",
        "LiteSpeed Web Server",
        "WHM Control Panel",
        "White Label Solution",
        "24/7 Support"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: false
    },
    {
      name: "PROFESSIONAL",
      description: "Ideal for growing hosting businesses",
      price: "$49.99",
      yearlyPrice: "$499.99", 
      period: "monthly",
      features: [
        "Up to 50 cPanel Accounts",
        "100GB SSD Storage",
        "1TB Bandwidth",
        "Free SSL Certificates",
        "LiteSpeed Web Server",
        "WHM Control Panel",
        "White Label Solution",
        "Priority Support",
        "WHMCS License",
        "Free Domain Reseller"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: true
    },
    {
      name: "BUSINESS",
      description: "For established hosting providers",
      price: "$89.99",
      yearlyPrice: "$899.99",
      period: "monthly", 
      features: [
        "Unlimited cPanel Accounts",
        "250GB SSD Storage",
        "2TB Bandwidth",
        "Free SSL Certificates",
        "LiteSpeed Web Server",
        "WHM Control Panel",
        "White Label Solution",
        "Priority Support",
        "WHMCS License",
        "Free Domain Reseller",
        "DDoS Protection",
        "Dedicated IP"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#228B22]/20 via-black to-black"></div>
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                  transform: `scale(${0.5 + Math.random() * 1.5})`
                }}
              >
                <div className="w-2 h-2 bg-[#228B22]/20 rounded-full blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#228B22]/20 to-[#f59e0b]/20 text-[#228B22] text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#228B22] animate-pulse mr-2"></span>
                New Generation Reseller Hosting
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-8xl font-bold mb-8 tracking-tight leading-none"
              >
                Build Your
                <span className="relative block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#228B22] to-[#f59e0b] text-transparent bg-clip-text">
                    Hosting Empire
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#228B22]/20 to-[#f59e0b]/20 rounded-full blur-lg"></span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-xl mb-12 max-w-xl mx-auto lg:mx-0"
              >
                Launch your hosting business with enterprise-grade infrastructure, automated billing, and white-label solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  { value: "Unlimited", label: "Accounts", icon: <Users className="w-6 h-6" /> },
                  { value: "Enterprise", label: "Infrastructure", icon: <Server className="w-6 h-6" /> },
                  { value: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#228B22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    <div className="relative text-center p-4">
                      <div className="text-[#228B22] mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Interactive Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 w-full max-w-xl"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#228B22] to-[#f59e0b] rounded-2xl opacity-20 blur"></div>
                
                <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800/50">
                  <div className="bg-black/50 backdrop-blur-xl px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-400">WHM Setup Wizard</span>
                    </div>
                    <div className="w-20"></div>
                  </div>

                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-400">
                        <span className="text-[#228B22]">$</span>
                        <span className="ml-2 typing-animation">whm-setup --init</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center text-green-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Initializing WHM environment...</span>
                        </div>
                        <div className="flex items-center text-green-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Configuring WHMCS license...</span>
                        </div>
                        <div className="flex items-center text-green-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Setting up SSL certificates...</span>
                        </div>
                        <div className="flex items-center text-[#228B22] animate-pulse">
                          <span className="w-4 h-4 mr-2">⚡</span>
                          <span>Configuring nameservers...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 backdrop-blur-xl p-4 border-t border-gray-800/50">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Setup Progress</span>
                        <span className="text-[#228B22]">75%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#228B22] to-[#f59e0b] w-[75%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section with Carousel */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#228B22]/5 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#228B22]/20 to-[#f59e0b]/20 text-[#228B22] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#228B22] mr-2"></span>
              Premium Features
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Everything You Need to
              <span className="text-[#228B22]"> Succeed</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Powerful tools and features designed to help you grow and manage your hosting business efficiently.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={() => setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-[#228B22]/10 text-[#228B22] hover:bg-[#228B22]/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-b from-[#228B22]/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-[#228B22]/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#228B22]/20">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                          <div className="flex items-center gap-2 mt-4">
                            {feature.tags?.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 text-xs rounded-full bg-[#228B22]/10 text-[#228B22]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() => setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-[#228B22]/10 text-[#228B22] hover:bg-[#228B22]/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeFeature === index ? 'bg-[#228B22]' : 'bg-[#228B22]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Country Selector */}
      <CountrySelector />

      {/* Plans Section */}
      <div id="pricing-section" className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#228B22]/10 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Choose Your
              <span className="text-[#228B22]"> Business Plan</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Select the perfect plan to start and grow your hosting business. All plans include enterprise features.
            </motion.p>
          </div>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center space-x-4 mb-12"
          >
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-[#228B22]' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none
                ${billingPeriod === 'yearly' ? 'bg-[#228B22]' : 'bg-gray-700'}`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-300
                  ${billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`}
              ></div>
            </button>
            <div className="flex items-center">
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-[#228B22]' : 'text-gray-400'}`}>
                Yearly
              </span>
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full bg-[#228B22]/10 text-[#228B22] text-xs font-medium">
                Save 20%
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#228B22]/20 to-transparent border-2 border-[#228B22]'
                    : 'bg-black border border-gray-800'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#228B22] text-black text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold">
                        {billingPeriod === 'monthly' ? plan.price : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-[#228B22] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-[#228B22] text-black hover:bg-[#f59e0b]'
                        : 'bg-[#228B22]/10 text-[#228B22] hover:bg-[#228B22]/20'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-6xl mx-auto px-4 bg-black">
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {[
              {
                question: "What is reseller hosting?",
                answer: "Reseller hosting allows you to sell hosting services under your own brand. You purchase hosting resources in bulk from us and resell them to your clients with your own pricing and branding."
              },
              {
                question: "Do I get WHM/cPanel access?",
                answer: "Yes, you get full access to WHM (Web Host Manager) to manage your hosting business and create cPanel accounts for your clients. Each of your clients gets their own cPanel access."
              },
              {
                question: "Is WHMCS included?",
                answer: "WHMCS license is included with our Professional and Business plans. This allows you to automate billing, provisioning, and support for your hosting business."
              },
              {
                question: "Can I use my own branding?",
                answer: "Absolutely! Our white-label solution allows you to use your own brand name, logo, and domain name. Your clients will never know you're reselling our services."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide 24/7 technical support to help you manage your hosting business. This includes server management, security updates, and assistance with technical issues."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Yes, you can upgrade your reseller hosting plan at any time as your business grows. The upgrade process is seamless and doesn't affect your existing clients."
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
  );
} 