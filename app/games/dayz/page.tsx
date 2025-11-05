'use client';

import { Pricing } from '@/components/ui/pricing';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Ülke bazlı fiyatlandırma
const countryPricing = {
  us: {
    location: "United States",
    name: "New York",
    plans: {
      starter: {
        monthly: 14.99,
        yearly: 11.99
      },
      pro: {
        monthly: 29.99,
        yearly: 23.99
      },
      enterprise: {
        monthly: 59.99,
        yearly: 47.99
      }
    }
  },
  uk: {
    location: "United Kingdom",
    name: "London",
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
    location: "Turkey",
    name: "Istanbul",
    plans: {
      starter: {
        monthly: 12.99,
        yearly: 10.39
      },
      pro: {
        monthly: 25.99,
        yearly: 20.79
      },
      enterprise: {
        monthly: 51.99,
        yearly: 41.59
      }
    }
  },
  pl: {
    location: "Poland",
    name: "Warsaw",
    plans: {
      starter: {
        monthly: 13.99,
        yearly: 11.19
      },
      pro: {
        monthly: 27.99,
        yearly: 22.39
      },
      enterprise: {
        monthly: 55.99,
        yearly: 44.79
      }
    }
  }
};

export default function DayZ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string>('tr');
  const totalSlides = 3;

  const handleCountrySelect = (code: string) => {
    setSelectedCountry(code);
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Seçili ülkeye göre plan fiyatlarını hesapla
  const getPlansForCountry = (countryCode: string) => {
    const countryData = countryPricing[countryCode as keyof typeof countryPricing];
    
    return [
      {
        name: "STARTER DAYZ",
        price: countryData.plans.starter.monthly.toFixed(2),
        yearlyPrice: countryData.plans.starter.yearly.toFixed(2),
        period: "per month",
        image: "/images/dayz.jpg",
        features: [
          "4 vCPU Cores",
          "8GB DDR4 RAM",
          "150GB NVMe SSD",
          "Unmetered @ 1Gbps",
          "Basic DDoS Protection",
          "Game Panel Access",
          "Mod Support",
          "Daily Backups",
          "99.9% Uptime",
          "24/7 Support",
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
        description: "Perfect for small communities up to 20 players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: false,
      },
      {
        name: "PRO DAYZ",
        price: countryData.plans.pro.monthly.toFixed(2),
        yearlyPrice: countryData.plans.pro.yearly.toFixed(2),
        period: "per month",
        image: "/images/dayz.jpg",
        features: [
          "6 vCPU Cores",
          "16GB DDR4 RAM",
          "300GB NVMe SSD",
          "Unmetered @ 1Gbps",
          "Advanced DDoS Protection",
          "Game Panel Access",
          "Premium Mod Support",
          "Hourly Backups",
          "Custom World Gen",
          "99.99% Uptime",
          "Priority Support",
          "Discord Integration",
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
        description: "Ideal for medium-sized communities with up to 50 players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: true,
      },
      {
        name: "ENTERPRISE DAYZ",
        price: countryData.plans.enterprise.monthly.toFixed(2),
        yearlyPrice: countryData.plans.enterprise.yearly.toFixed(2),
        period: "per month",
        image: "/images/dayz.jpg",
        features: [
          "8 vCPU Cores",
          "32GB DDR4 RAM",
          "500GB NVMe SSD",
          "Unmetered @ 10Gbps",
          "Premium DDoS Protection",
          "Game Panel Access",
          "Premium Mod Support",
          "Real-time Backups",
          "Custom World Gen",
          "100% Uptime SLA",
          "24/7 Priority Support",
          "API Access",
          "Custom Configuration",
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
        description: "For large communities with 100+ players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: false,
      }
    ];
  };

  // Ülke seçim komponenti
  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your survivors for optimal performance</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(countryPricing).map(([code, data]) => {
          const isOutOfStock = false;
          return (
            <button
              key={code}
              onClick={() => {
                if (!isOutOfStock) {
                  setSelectedCountry(code);
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              disabled={isOutOfStock}
              className={`relative group p-6 rounded-xl border-2 transition-all duration-300 min-w-[200px] ${
                isOutOfStock 
                  ? 'border-red-500/50 bg-red-500/5 opacity-75 cursor-not-allowed'
                  : selectedCountry === code
                    ? 'border-[#88c149] bg-[#88c149]/10'
                    : 'border-gray-800 hover:border-[#88c149]/50 hover:bg-[#88c149]/5'
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
                    <div className="w-6 h-6 bg-[#88c149] rounded-full flex items-center justify-center">
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

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1d26] to-[#0f1117] pt-32 pb-20 min-h-[800px]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/fJmMbl3bqE0?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&modestbranding=1&rel=0"
              allow="autoplay; encrypted-media"
              className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] scale-[2] origin-center"
              style={{
                opacity: 0.9,
                filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
                pointerEvents: 'none',
                border: 'none'
              }}
            />
          </div>
          <div className="absolute inset-0 from-[#1a1d26]/30 via-[#1a1d26]/40 to-[#0f1117] z-10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 z-20 mt-12">
          <div className="animate-fade-in-up backdrop-blur-sm bg-black/0 p-12 rounded-3xl">
            <h1 className="text-7xl font-bold text-white mb-8 tracking-tight">
              DayZ <span className="text-[#88c149] relative">
                Servers
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#88c149]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-gray-100 text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              High-performance DayZ servers with instant setup, mod support, and automated backups.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-24 bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/10 via-transparent to-transparent"></div>
        </div>

        {/* Country Selector */}
        <CountrySelector />

        <div id="pricing-section" className="max-w-7xl mx-auto px-4 relative">
          <Pricing 
            plans={getPlansForCountry(selectedCountry)}
            title={`DayZ Server Plans in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}`}
            description="Choose the perfect DayZ server for your community. All plans include game panel access, DDoS protection, and mod support."
          />
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-24 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden group">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="min-w-full h-full relative group-hover:ring-4 group-hover:ring-[#FFB800] transition-all duration-300">
                  <img 
                    src="/images/dayz.jpg" 
                    alt="DayZ Server Screenshot 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-full h-full relative group-hover:ring-4 group-hover:ring-[#FFB800] transition-all duration-300">
                  <img 
                    src="/images/dayz1.jpg" 
                    alt="DayZ Server Screenshot 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-full h-full relative group-hover:ring-4 group-hover:ring-[#FFB800] transition-all duration-300">
                  <img 
                    src="/images/dayz2.jpg" 
                    alt="DayZ Server Screenshot 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Attribution */}
              <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full">
                <p className="text-sm text-white/90">PHOTOS: DAYZ.COM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-[#000000] relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What server locations are available?",
                answer: "Our DayZ servers are hosted in multiple locations including the United States (Ashburn, VA), United Kingdom, Turkey, and Poland. Choose the location closest to your survivors for the best performance."
              },
              {
                question: "Can I install custom mods?",
                answer: "Yes! All our plans support custom mods. Pro and Enterprise plans include one-click mod installations and automatic mod updates. You can easily manage your mods through our game panel."
              },
              {
                question: "What type of server performance can I expect?",
                answer: "Our servers use high-performance NVMe SSDs and latest generation processors to ensure smooth gameplay. The Starter plan supports up to 20 players, Pro up to 50 players, and Enterprise 100+ players with minimal lag."
              },
              {
                question: "How does the backup system work?",
                answer: "Backup frequency varies by plan: Starter includes daily backups, Pro offers hourly backups, and Enterprise provides real-time backups. All backups are stored securely and can be restored with one click."
              },
              {
                question: "What kind of DDoS protection do you provide?",
                answer: "All plans include DDoS protection. Starter plans have basic protection, while Pro and Enterprise plans include advanced mitigation systems that can handle large-scale attacks without affecting gameplay."
              },
              {
                question: "How do I manage my DayZ server?",
                answer: "Our custom game panel makes server management easy. You can start/stop your server, change settings, install mods, manage players, and view real-time performance metrics. No technical knowledge required!"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black border border-[#1a1d26] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => handleQuestionClick(index)}
                  className="w-full px-6 py-4 text-left bg-[#1a1d26] hover:bg-[#1a1d26]/80 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-[#FFB800]">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-[#FFB800] transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openQuestion === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                  }`}
                >
                  <div className="border border-[#FFB800]/20 rounded-xl bg-[#FFB800]/5 p-4">
                    <p className="text-[#FFB800]/90">{faq.answer}</p>
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