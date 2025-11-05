'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import LayoutToggle from '../components/LayoutToggle';
import { Pricing } from '@/components/ui/pricing';
import Image from 'next/image';
import { Globe } from 'lucide-react';

// Ülkelere göre plan detayları
const countryPlans = {
  au: {
    currency: "AUD",
    location: "Sydney",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "240ms",
      eu: "180ms",
      asia: "90ms"
    },
    plans: {
      starter: {
        monthly: 150.99,
        yearly: 119.99
      },
      pro: {
        monthly: 299.99,
        yearly: 239.99
      },
      enterprise: {
        monthly: 599.99,
        yearly: 479.99
      }
    }
  },
  bg: {
    currency: "BGN",
    location: "Sofia",
    network: "1Gbps - 10Gbps",
    latency: {
      us: "150ms",
      eu: "40ms",
      asia: "160ms"
    },
    plans: {
      starter: {
        monthly: 195.99,
        yearly: 156.99
      },
      pro: {
        monthly: 389.99,
        yearly: 311.99
      },
      enterprise: {
        monthly: 779.99,
        yearly: 623.99
      }
    }
  },
  br: {
    currency: "BRL",
    location: "São Paulo",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "120ms",
      eu: "190ms",
      asia: "350ms"
    },
    plans: {
      starter: {
        monthly: 499.99,
        yearly: 399.99
      },
      pro: {
        monthly: 999.99,
        yearly: 799.99
      },
      enterprise: {
        monthly: 1999.99,
        yearly: 1599.99
      }
    }
  },
  ca: {
    currency: "CAD",
    location: "Toronto",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "20ms",
      eu: "100ms",
      asia: "220ms"
    },
    plans: {
      starter: {
        monthly: 135.99,
        yearly: 108.99
      },
      pro: {
        monthly: 269.99,
        yearly: 215.99
      },
      enterprise: {
        monthly: 539.99,
        yearly: 431.99
      }
    }
  },
  fi: {
    currency: "EUR",
    location: "Helsinki",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "130ms",
      eu: "30ms",
      asia: "160ms"
    },
    plans: {
      starter: {
        monthly: 95.99,
        yearly: 76.99
      },
      pro: {
        monthly: 189.99,
        yearly: 151.99
      },
      enterprise: {
        monthly: 379.99,
        yearly: 303.99
      }
    }
  },
  fr: {
    currency: "EUR",
    location: "Paris",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "85ms",
      eu: "<5ms",
      asia: "145ms"
    },
    plans: {
      starter: {
        monthly: 89.99,
        yearly: 71.99
      },
      pro: {
        monthly: 179.99,
        yearly: 143.99
      },
      enterprise: {
        monthly: 359.99,
        yearly: 287.99
      }
    }
  },
  de: {
    currency: "EUR",
    location: "Frankfurt",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "90ms",
      eu: "<5ms",
      asia: "150ms"
    },
    plans: {
      starter: {
        monthly: 89.99,
        yearly: 71.99
      },
      pro: {
        monthly: 179.99,
        yearly: 143.99
      },
      enterprise: {
        monthly: 359.99,
        yearly: 287.99
      }
    }
  },
  hk: {
    currency: "HKD",
    location: "Hong Kong",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "200ms",
      eu: "180ms",
      asia: "<5ms"
    },
    plans: {
      starter: {
        monthly: 779.99,
        yearly: 623.99
      },
      pro: {
        monthly: 1559.99,
        yearly: 1247.99
      },
      enterprise: {
        monthly: 3119.99,
        yearly: 2495.99
      }
    }
  },
  it: {
    currency: "EUR",
    location: "Milan",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "100ms",
      eu: "20ms",
      asia: "160ms"
    },
    plans: {
      starter: {
        monthly: 89.99,
        yearly: 71.99
      },
      pro: {
        monthly: 179.99,
        yearly: 143.99
      },
      enterprise: {
        monthly: 359.99,
        yearly: 287.99
      }
    }
  },
  jp: {
    currency: "JPY",
    location: "Tokyo",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "200ms",
      eu: "160ms",
      asia: "<10ms"
    },
    plans: {
      starter: {
        monthly: 14499.99,
        yearly: 11599.99
      },
      pro: {
        monthly: 28999.99,
        yearly: 23199.99
      },
      enterprise: {
        monthly: 57999.99,
        yearly: 46399.99
      }
    }
  },
  lt: {
    currency: "EUR",
    location: "Vilnius",
    network: "1Gbps - 10Gbps",
    latency: {
      us: "140ms",
      eu: "40ms",
      asia: "170ms"
    },
    plans: {
      starter: {
        monthly: 84.99,
        yearly: 67.99
      },
      pro: {
        monthly: 169.99,
        yearly: 135.99
      },
      enterprise: {
        monthly: 339.99,
        yearly: 271.99
      }
    }
  },
  nl: {
    currency: "EUR",
    location: "Amsterdam",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "80ms",
      eu: "<5ms",
      asia: "140ms"
    },
    plans: {
      starter: {
        monthly: 89.99,
        yearly: 71.99
      },
      pro: {
        monthly: 179.99,
        yearly: 143.99
      },
      enterprise: {
        monthly: 359.99,
        yearly: 287.99
      }
    }
  },
  no: {
    currency: "NOK",
    location: "Oslo",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "120ms",
      eu: "20ms",
      asia: "180ms"
    },
    plans: {
      starter: {
        monthly: 1049.99,
        yearly: 839.99
      },
      pro: {
        monthly: 2099.99,
        yearly: 1679.99
      },
      enterprise: {
        monthly: 4199.99,
        yearly: 3359.99
      }
    }
  },
  pl: {
    currency: "PLN",
    location: "Warsaw",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "110ms",
      eu: "25ms",
      asia: "150ms"
    },
    plans: {
      starter: {
        monthly: 399.99,
        yearly: 319.99
      },
      pro: {
        monthly: 799.99,
        yearly: 639.99
      },
      enterprise: {
        monthly: 1599.99,
        yearly: 1279.99
      }
    }
  },
  ro: {
    currency: "RON",
    location: "Bucharest",
    network: "1Gbps - 10Gbps",
    latency: {
      us: "130ms",
      eu: "35ms",
      asia: "140ms"
    },
    plans: {
      starter: {
        monthly: 449.99,
        yearly: 359.99
      },
      pro: {
        monthly: 899.99,
        yearly: 719.99
      },
      enterprise: {
        monthly: 1799.99,
        yearly: 1439.99
      }
    }
  },
  ru: {
    currency: "RUB",
    location: "Moscow",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "150ms",
      eu: "40ms",
      asia: "100ms"
    },
    plans: {
      starter: {
        monthly: 9199.99,
        yearly: 7359.99
      },
      pro: {
        monthly: 18399.99,
        yearly: 14719.99
      },
      enterprise: {
        monthly: 36799.99,
        yearly: 29439.99
      }
    }
  },
  sg: {
    currency: "SGD",
    location: "Singapore",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "220ms",
      eu: "140ms",
      asia: "<5ms"
    },
    plans: {
      starter: {
        monthly: 134.99,
        yearly: 107.99
      },
      pro: {
        monthly: 269.99,
        yearly: 215.99
      },
      enterprise: {
        monthly: 539.99,
        yearly: 431.99
      }
    }
  },
  za: {
    currency: "ZAR",
    location: "Johannesburg",
    network: "1Gbps - 10Gbps",
    latency: {
      us: "250ms",
      eu: "160ms",
      asia: "200ms"
    },
    plans: {
      starter: {
        monthly: 1899.99,
        yearly: 1519.99
      },
      pro: {
        monthly: 3799.99,
        yearly: 3039.99
      },
      enterprise: {
        monthly: 7599.99,
        yearly: 6079.99
      }
    }
  },
  se: {
    currency: "SEK",
    location: "Stockholm",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "110ms",
      eu: "20ms",
      asia: "170ms"
    },
    plans: {
      starter: {
        monthly: 1049.99,
        yearly: 839.99
      },
      pro: {
        monthly: 2099.99,
        yearly: 1679.99
      },
      enterprise: {
        monthly: 4199.99,
        yearly: 3359.99
      }
    }
  },
  tr: {
    currency: "TRY",
    location: "Istanbul",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "140ms",
      eu: "45ms",
      asia: "120ms"
    },
    plans: {
      starter: {
        monthly: 3149.99,
        yearly: 2519.99
      },
      pro: {
        monthly: 6299.99,
        yearly: 5039.99
      },
      enterprise: {
        monthly: 12599.99,
        yearly: 10079.99
      }
    }
  },
  uk: {
    currency: "GBP",
    location: "London",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "80ms",
      eu: "<5ms",
      asia: "140ms"
    },
    plans: {
      starter: {
        monthly: 79.99,
        yearly: 63.99
      },
      pro: {
        monthly: 159.99,
        yearly: 127.99
      },
      enterprise: {
        monthly: 319.99,
        yearly: 255.99
      }
    }
  },
  us: {
    currency: "USD",
    location: "New York",
    network: "1Gbps - 25Gbps",
    latency: {
      us: "<5ms",
      eu: "80ms",
      asia: "220ms"
    },
    plans: {
      starter: {
        monthly: 99.99,
        yearly: 79.99
      },
      pro: {
        monthly: 199.99,
        yearly: 159.99
      },
      enterprise: {
        monthly: 399.99,
        yearly: 319.99
      }
    }
  },
  ua: {
    currency: "UAH",
    location: "Kiev",
    network: "1Gbps - 10Gbps",
    latency: {
      us: "140ms",
      eu: "35ms",
      asia: "150ms"
    },
    plans: {
      starter: {
        monthly: 3799.99,
        yearly: 3039.99
      },
      pro: {
        monthly: 7599.99,
        yearly: 6079.99
      },
      enterprise: {
        monthly: 15199.99,
        yearly: 12159.99
      }
    }
  }
};

// Ülke isimleri
const countryNames = {
  au: "Australia",
  bg: "Bulgaria",
  br: "Brazil",
  ca: "Canada",
  fi: "Finland",
  fr: "France",
  de: "Germany",
  hk: "Hong Kong",
  it: "Italy",
  jp: "Japan",
  lt: "Lithuania",
  nl: "Netherlands",
  no: "Norway",
  pl: "Poland",
  ro: "Romania",
  ru: "Russia",
  sg: "Singapore",
  za: "South Africa",
  se: "Sweden",
  tr: "Turkey",
  uk: "United Kingdom",
  us: "United States",
  ua: "Ukraine"
};

// Baz planlar
const basePlans = [
  {
    name: "STARTER DEDICATED",
    basePrice: 99.99,
    yearlyBasePrice: 79.99,
    period: "per month",
    baseFeatures: [
      "Intel Xeon E-2276G",
      "32GB DDR4 RAM",
      "2x 512GB NVMe SSD",
      "Unmetered @ 1Gbps",
      "5 IPv4 Addresses",
      "DDoS Protection",
      "Full Root Access",
      "Remote KVM-IP",
      "99.9% Uptime SLA",
      "24/7 Support"
    ],
    description: "Perfect for small to medium businesses and game servers",
    buttonText: "Deploy Now",
    href: "/deploy",
    isPopular: false,
  },
  {
    name: "PRO DEDICATED",
    basePrice: 199.99,
    yearlyBasePrice: 159.99,
    period: "per month",
    baseFeatures: [
      "AMD EPYC 7443P",
      "64GB DDR4 RAM",
      "2x 1TB NVMe SSD",
      "Unmetered @ 10Gbps",
      "10 IPv4 Addresses",
      "Advanced DDoS Protection",
      "Full Root Access",
      "Remote KVM-IP",
      "99.99% Uptime SLA",
      "Priority Support",
      "Hardware Monitoring"
    ],
    description: "Ideal for high-traffic websites and enterprise applications",
    buttonText: "Deploy Now",
    href: "/deploy",
    isPopular: true,
  },
  {
    name: "ENTERPRISE DEDICATED",
    basePrice: 399.99,
    yearlyBasePrice: 319.99,
    period: "per month",
    baseFeatures: [
      "Dual AMD EPYC 7443P",
      "128GB DDR4 RAM",
      "4x 1TB NVMe SSD",
      "Unmetered @ 25Gbps",
      "20 IPv4 Addresses",
      "Premium DDoS Protection",
      "Full Root Access",
      "Remote KVM-IP",
      "100% Uptime SLA",
      "24/7 Priority Support",
      "Advanced Monitoring",
      "Custom Configuration"
    ],
    description: "For large enterprises requiring maximum performance",
    buttonText: "Deploy Now",
    href: "/deploy",
    isPopular: false,
  }
];

export default function Dedicated() {
  const [isHorizontalLayout, setIsHorizontalLayout] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('de');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [countryPings, setCountryPings] = useState({
    au: '180ms',
    bg: '45ms',
    br: '220ms',
    ca: '90ms',
    fi: '30ms',
    fr: '<5ms',
    de: '<5ms',
    hk: '<5ms',
    it: '20ms',
    jp: '<5ms',
    lt: '40ms',
    nl: '<5ms',
    no: '20ms',
    pl: '25ms',
    ro: '35ms',
    ru: '40ms',
    sg: '<5ms',
    za: '160ms',
    se: '20ms',
    tr: '45ms',
    uk: '<5ms',
    us: '<5ms',
    ua: '35ms'
  });
  
  // Random value generation functions
  const getRandomCPU = () => Math.floor(Math.random() * (67 - 50 + 1)) + 50;
  const getRandomMemory = () => Math.floor(Math.random() * (40 - 23 + 1)) + 23;
  const getRandomNetwork = () => Math.floor(Math.random() * 40) + 30;

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

  useEffect(() => {
    // Get user preference from localStorage
    const savedLayout = localStorage.getItem('pricingLayout');
    if (savedLayout) {
      setIsHorizontalLayout(savedLayout === 'horizontal');
    }
  }, []);

  useEffect(() => {
    const updatePings = () => {
      setCountryPings(prev => {
        const newPings = { ...prev };
        Object.keys(newPings).forEach(code => {
          const baseValue = countryPlans[code as keyof typeof countryPlans].latency;
          if (baseValue) {
            const minValue = parseInt(baseValue.eu.replace(/[^0-9]/g, '')) || 5;
            const randomValue = Math.floor(Math.random() * (minValue + 10 - minValue + 1)) + minValue;
            newPings[code as keyof typeof newPings] = randomValue <= 5 ? '<5ms' : `${randomValue}ms`;
          }
        });
        return newPings;
      });
    };

    const interval = setInterval(updatePings, 10000);
    return () => clearInterval(interval);
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

  // Ülke seçim komponenti
  const CountrySelector = () => (
    <div id="country-selector" className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12 h-[120px] flex flex-col items-center justify-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 text-[#fbbf24] text-sm font-medium mb-4">
          <Globe className="w-4 h-4 mr-2" />
          Global Network
        </div>
        <h3 className="text-3xl font-bold mb-2">Select Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your target audience for optimal performance</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {Object.entries(countryPlans).map(([code, data]) => {
          const isOutOfStock = ([] as string[]).includes(code);
          return (
            <button
              key={code}
              onClick={() => {
                setSelectedCountry(code);
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={isOutOfStock}
              className={`relative group p-4 rounded-xl border-2 transition-all duration-300 ${
                isOutOfStock 
                  ? 'border-red-500/50 bg-red-500/5 opacity-75 cursor-not-allowed'
                  : selectedCountry === code
                    ? 'border-[#fbbf24] bg-gradient-to-b from-[#fbbf24]/20 to-transparent'
                    : 'border-gray-800 hover:border-[#fbbf24]/50 hover:bg-[#fbbf24]/5'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 relative mb-2">
                  <Image
                    src={`/images/flags/${code}.svg`}
                    alt={data.location}
                    fill
                    className={`object-cover rounded-lg ${isOutOfStock ? 'grayscale' : ''}`}
                  />
                </div>
                <span className="text-sm font-medium">{data.location}</span>
                <span className="text-xs text-gray-400">{countryNames[code as keyof typeof countryNames]}</span>
                {isOutOfStock && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </div>
                  </div>
                )}
                {selectedCountry === code && !isOutOfStock && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-4 h-4 bg-[#fbbf24] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  // Seçilen ülkeye göre planları hesapla
  const getPlansForCountry = useCallback((countryCode: string) => {
    const countryData = countryPlans[countryCode as keyof typeof countryPlans];
    const isOutOfStock = ([] as string[]).includes(countryCode);
    
    return basePlans.map(plan => {
      let prices;
      switch(plan.name) {
        case "STARTER DEDICATED":
          prices = countryData.plans.starter;
          break;
        case "PRO DEDICATED":
          prices = countryData.plans.pro;
          break;
        case "ENTERPRISE DEDICATED":
          prices = countryData.plans.enterprise;
          break;
        default:
          prices = { monthly: 0, yearly: 0 };
      }

      return {
        ...plan,
        price: prices.monthly.toFixed(2),
        yearlyPrice: prices.yearly.toFixed(2),
        features: [
          ...plan.baseFeatures,
          <div key="location" className="flex items-center gap-2">
            <span>Location: {countryData.location}</span>
            <img src={`/images/flags/${countryCode}.svg`} alt={countryData.location} className="w-5 h-5 rounded-sm" />
          </div>,
          `Network: ${countryData.network}`,
          `Latency US: ${countryData.latency.us}`,
          `Latency EU: ${countryData.latency.eu}`,
          `Latency Asia: ${countryData.latency.asia}`
        ],
        isOutOfStock: isOutOfStock,
        buttonDisabled: isOutOfStock,
        buttonText: isOutOfStock ? "Out of Stock" : "Deploy Now",
        buttonClassName: isOutOfStock ? "bg-red-500/10 text-red-500 border-red-500/20 cursor-not-allowed" : ""
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-sm font-medium mb-6 relative">
                <div className="absolute inset-0 bg-black/80 rounded-full shadow-[0_4px_12px_rgba(251,191,36,0.3)] backdrop-blur-sm"></div>
                <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse mr-2 relative z-10"></span>
                <span className="relative z-10">Enterprise Grade Hardware</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                Dedicated 
                <span className="relative">
                  <span className="relative z-10 text-[#fbbf24]"> Servers</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#fbbf24]/20 rounded-full blur-sm"></span>
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                High-performance dedicated servers with full root access, premium hardware, and 24/7 expert support.
              </p>

              {/* Stats with Animation */}
              <div className="mt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
                {[
                  { value: "100%", label: "Root Access" },
                  { value: "24/7", label: "Support" },
                  { value: "10Gbps", label: "Network" }
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

            {/* Right Content - Interactive Server Preview */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative">
                {/* Server Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-2xl opacity-20 blur"></div>
                
                <div className="relative bg-[#0f1117] rounded-xl overflow-hidden border border-gray-800/50">
                  {/* Server Header */}
                  <div className="bg-[#12141c] px-4 py-3 flex items-center justify-between border-b border-gray-800/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-400">Server Status</span>
                    </div>
                    <div className="w-20"></div>
                  </div>

                  {/* Server Content */}
                  <div className="p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <span className="text-[#fbbf24]">$</span>
                        <span className="ml-2 typing-animation">systemctl status nginx</span>
                      </div>
                      <div className="pl-4">
                        <div className="flex items-center space-x-2 text-green-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Active (running)</span>
                        </div>
                        <div className="mt-2 space-y-1 text-gray-400">
                          <div>● nginx.service - A high performance web server</div>
                          <div className="pl-4">Loaded: loaded (/lib/systemd/system/nginx.service)</div>
                          <div className="pl-4">Active: active (running)</div>
                          <div className="pl-4">Main PID: 1234 (nginx)</div>
                          <div className="pl-4">Tasks: 2 (limit: 4915)</div>
                          <div className="pl-4">Memory: 2.5M</div>
                          <div className="pl-4">CPU: 1.2%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Server Stats */}
                  <div className="bg-[#12141c] p-4 border-t border-gray-800/50">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">CPU</span>
                          <span className="text-[#fbbf24]">{metrics.cpu}%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#fbbf24] rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${metrics.cpu}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">RAM</span>
                          <span className="text-[#fbbf24]">{metrics.memory}GB</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#fbbf24] rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(metrics.memory / 128) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Network</span>
                          <span className="text-[#fbbf24]">{metrics.network}Gbps</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#fbbf24] rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(metrics.network / 100) * 100}%` }}
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
            description={`Choose the perfect dedicated server for your needs in ${countryPlans[selectedCountry as keyof typeof countryPlans].location}. All plans include full root access, DDoS protection, and 24/7 support.`}
          />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-6xl mx-auto px-4 bg-black">
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {[
              {
                question: "What is a Dedicated Server?",
                answer: "A dedicated server is a physical server exclusively reserved for your use. Unlike shared hosting or VPS, you get full access to all server resources, ensuring maximum performance and reliability for your applications."
              },
              {
                question: "Do I get root access?",
                answer: "Yes, you get full root access to your dedicated server. This means you can install any software, configure custom settings, and optimize performance according to your specific needs."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support with all dedicated servers. Enterprise customers get additional benefits like priority support and dedicated account managers to ensure maximum uptime and performance."
              },
              {
                question: "How is DDoS Protection handled?",
                answer: "All our dedicated servers include enterprise-grade DDoS protection with up to 10Tbps of mitigation capacity. This ensures your services stay online even during large-scale attacks."
              },
              {
                question: "What about server management?",
                answer: "You get access to remote KVM-IP for complete control over your server, including remote power management and console access. We also provide advanced monitoring tools to track server performance."
              },
              {
                question: "What hardware do you use?",
                answer: "We use latest generation AMD EPYC & Intel Xeon processors, DDR4 ECC RAM, and NVMe SSDs. Our hardware is enterprise-grade and regularly maintained to ensure optimal performance."
              },
              {
                question: "How is the network connectivity?",
                answer: "We provide high-speed private network access with unmetered bandwidth up to 25Gbps. Our network is optimized for low latency and high availability across multiple global locations."
              },
              {
                question: "What is your uptime guarantee?",
                answer: "We offer up to 100% uptime SLA for enterprise plans and 99.99% for other plans. Our infrastructure is built with redundancy at every level to ensure maximum reliability."
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
  );
} 