'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Shield, Cpu, Network, HardDrive, Globe, Clock, Server, Lock, Zap, Code, Palette, Gauge } from 'lucide-react';
import { Pricing } from '@/components/ui/pricing';

const features: BentoItem[] = [
  {
    title: "WordPress LiteSpeed Cache",
    description: "Built-in WordPress caching with LiteSpeed Cache plugin, image optimization, and page preloading for blazing fast performance.",
    icon: <Zap className="w-5 h-5 text-[#fbbf24]" />,
    status: "Premium",
    tags: ["WordPress", "Fast", "Optimized"],
    colSpan: 1,
    hasPersistentHover: true,
  },
  {
    title: "Automatic Backup",
    description: "Daily automatic backups for your WordPress site with one-click restore functionality.",
    icon: <Shield className="w-5 h-5 text-[#fbbf24]" />,
    status: "Daily",
    tags: ["Backup", "Secure"],
    colSpan: 1,
  },
  {
    title: "Free Themes",
    description: "Premium WordPress themes and customization tools to easily design your site.",
    icon: <Palette className="w-5 h-5 text-[#fbbf24]" />,
    status: "Premium",
    tags: ["Design", "Custom"],
    colSpan: 1,
  },
  {
    title: "Free SSL",
    description: "Secure your site with Let's Encrypt SSL certificate included for free.",
    icon: <Lock className="w-5 h-5 text-[#fbbf24]" />,
    status: "Secure",
    tags: ["Security", "Free"],
    colSpan: 1,
  },
  {
    title: "Easy Management",
    description: "Manage your site easily with cPanel and WordPress admin panel.",
    icon: <Server className="w-5 h-5 text-[#fbbf24]" />,
    status: "Easy",
    tags: ["Management", "cPanel"],
    colSpan: 1,
  },
  {
    title: "24/7 Support",
    description: "24/7 technical support and custom development assistance from WordPress experts.",
    icon: <Clock className="w-5 h-5 text-[#fbbf24]" />,
    status: "24/7",
    tags: ["Support", "Expert"],
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
        monthly: 5.99,
        yearly: 4.99
      },
      professional: {
        monthly: 11.99,
        yearly: 9.99
      },
      business: {
        monthly: 24.99,
        yearly: 19.99
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
        monthly: 4.99,
        yearly: 4.19
      },
      professional: {
        monthly: 10.99,
        yearly: 8.99
      },
      business: {
        monthly: 21.99,
        yearly: 17.99
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
        monthly: 24.99,
        yearly: 19.99
      },
      professional: {
        monthly: 49.99,
        yearly: 39.99
      },
      business: {
        monthly: 99.99,
        yearly: 79.99
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
        monthly: 179.99,
        yearly: 149.99
      },
      professional: {
        monthly: 359.99,
        yearly: 289.99
      },
      business: {
        monthly: 719.99,
        yearly: 579.99
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

export default function WordPressHosting() {
  const [selectedCountry, setSelectedCountry] = useState('de');
  const [countryPings, setCountryPings] = useState({
    de: '35ms',
    uk: '45ms',
    pl: '35ms',
    tr: '5ms'
  });
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
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

  const handleCountrySelect = useCallback((code: string) => {
    setSelectedCountry(code);
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Country Selector Component
  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your WordPress site visitors</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(countryPricing).map(([code, data]) => (
          <button
            key={code}
            onClick={() => handleCountrySelect(code)}
            className={`relative group p-6 rounded-xl border-2 transition-all duration-300 min-w-[200px] ${
              selectedCountry === code
                ? 'border-[#fbbf24] bg-[#fbbf24]/10'
                : 'border-gray-800 hover:border-[#fbbf24]/50 hover:bg-[#fbbf24]/5'
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
                  <div className="w-6 h-6 bg-[#fbbf24] rounded-full flex items-center justify-center">
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
      description: "Perfect for small WordPress sites",
      price: "$5.99",
      yearlyPrice: "$59.99",
      period: "monthly",
      features: [
        "1 WordPress Site",
        "10GB SSD Storage",
        "100GB Bandwidth",
        "Free SSL Certificate",
        "LiteSpeed Cache",
        "Daily Backups",
        "24/7 Support"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: false
    },
    {
      name: "PROFESSIONAL",
      description: "Ideal for growing businesses",
      price: "$12.99",
      yearlyPrice: "$129.99", 
      period: "monthly",
      features: [
        "5 WordPress Sites",
        "25GB SSD Storage", 
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "LiteSpeed Cache Pro",
        "Daily Backups",
        "Priority Support",
        "Staging Environment",
        "Free Domain"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: true
    },
    {
      name: "BUSINESS",
      description: "For high-traffic WordPress sites",
      price: "$24.99",
      yearlyPrice: "$249.99",
      period: "monthly", 
      features: [
        "10 WordPress Sites",
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate", 
        "LiteSpeed Cache Pro",
        "Real-time Backups",
        "Priority Support",
        "Staging Environment",
        "Free Domain",
        "WooCommerce Ready",
        "Redis Cache"
      ],
      buttonText: "Get Started",
      href: "#",
      isPopular: false
    }
  ];

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
              <div className="w-2 h-2 bg-[#fbbf24]/10 rounded-full blur-sm"></div>
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
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse mr-2"></span>
                  WordPress Hosting
                </div>
                <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                  The Best Hosting for
                  <span className="relative">
                    <span className="relative z-10 text-[#fbbf24]"> WordPress Sites</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-[#fbbf24]/20 rounded-full blur-sm"></span>
                  </span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  Experience 300% faster WordPress with LiteSpeed Cache,
                  NVMe SSD, and WordPress optimizations.
                </p>

                {/* Stats with Animation */}
                <div className="mt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
                  {[
                    { value: "300%", label: "Faster" },
                    { value: "1-Click", label: "Install" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                      <div className="relative text-center">
                        <div className="text-2xl font-bold text-[#fbbf24] mb-1">{stat.value}</div>
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-2xl opacity-20 blur"></div>
                  
                  <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800/50">
                    {/* Terminal Header */}
                    <div className="bg-black px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-sm text-gray-400">WordPress Installation</span>
                      </div>
                      <div className="w-20"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 font-mono text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-400">
                          <span className="text-[#fbbf24]">$</span>
                          <span className="ml-2 typing-animation">wp core download</span>
                        </div>
                        <div className="pl-4">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span>Downloading WordPress...</span>
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
                              <span>WordPress files downloaded</span>
                            </div>
                            <div className="flex items-center text-green-400">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>wp-config.php created</span>
                            </div>
                            <div className="flex items-center text-[#fbbf24]">
                              <span className="w-4 h-4 mr-2 animate-pulse">⚡</span>
                              <span>Installing LiteSpeed Cache...</span>
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
                          <span className="text-[#fbbf24]">75%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#fbbf24] w-[75%] rounded-full"></div>
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fbbf24] mr-2"></span>
                WordPress Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything You Need for Your 
                <span className="text-[#fbbf24]"> WordPress Site</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Powerful features designed to make your WordPress site fast, secure, and easy to manage.
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fbbf24] mr-2"></span>
                WordPress Hosting Plans
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your 
                <span className="text-[#fbbf24]"> WordPress Plan</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Select the perfect plan for your WordPress site with our flexible hosting options.
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center items-center space-x-4 mb-12">
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-[#fbbf24]' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none
                  ${billingPeriod === 'yearly' ? 'bg-[#fbbf24]' : 'bg-gray-700'}`}
              >
                <div
                  className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-300
                    ${billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`}
                ></div>
              </button>
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-[#fbbf24]' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-1 text-xs text-[#fbbf24]">Save 20%</span>
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.isPopular
                      ? 'bg-gradient-to-b from-[#fbbf24]/20 to-transparent border-2 border-[#fbbf24]'
                      : 'bg-black border border-gray-800'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#fbbf24] text-black text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold">
                        {billingPeriod === 'monthly' ? plan.price : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-[#fbbf24] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-[#fbbf24] text-black hover:bg-[#f59e0b]'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-16 pb-24">
            <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {[
                {
                  question: "What is WordPress Hosting?",
                  answer: "WordPress hosting is a specialized hosting service optimized specifically for WordPress websites. It includes pre-installed WordPress, automatic updates, enhanced security features, and performance optimizations like LiteSpeed Cache."
                },
                {
                  question: "Why choose LiteSpeed WordPress Hosting?",
                  answer: "LiteSpeed WordPress hosting offers superior performance with built-in caching, image optimization, and server-level optimizations. This results in up to 300% faster page load times compared to standard hosting."
                },
                {
                  question: "Do you provide WordPress migration service?",
                  answer: "Yes! We offer free WordPress migration service. Our technical team will handle the entire process, ensuring your WordPress site is transferred seamlessly without any downtime."
                },
                {
                  question: "What security features are included?",
                  answer: "Our WordPress hosting includes free SSL certificates, automatic malware scanning, regular security updates, advanced firewall protection, and daily backups to keep your site secure."
                },
                {
                  question: "Can I install WordPress plugins and themes?",
                  answer: "Yes, you have full access to install any WordPress plugins and themes. We also provide a selection of premium themes and security plugins at no additional cost."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We provide 24/7 WordPress-specific technical support through multiple channels including live chat, ticket system, and email. Our WordPress experts are always ready to help."
                },
                {
                  question: "How often is my site backed up?",
                  answer: "We perform daily automated backups of your WordPress site with a 30-day retention period. You can also create manual backups anytime through your control panel."
                },
                {
                  question: "Can I upgrade my hosting plan later?",
                  answer: "Absolutely! You can upgrade your WordPress hosting plan at any time as your website grows. The upgrade process is seamless and doesn't cause any downtime."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-bold text-[#fbbf24]">{faq.question}</h3>
                    <svg 
                      className={`w-6 h-6 text-[#fbbf24] transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
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