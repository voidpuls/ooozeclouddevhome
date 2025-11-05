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
        monthly: 24.99,
        yearly: 19.99
      },
      pro: {
        monthly: 49.99,
        yearly: 39.99
      },
      enterprise: {
        monthly: 89.99,
        yearly: 71.99
      }
    }
  },
  uk: {
    location: "United Kingdom",
    name: "London",
    plans: {
      starter: {
        monthly: 29.99,
        yearly: 23.99
      },
      pro: {
        monthly: 59.99,
        yearly: 47.99
      },
      enterprise: {
        monthly: 109.99,
        yearly: 87.99
      }
    }
  },
  tr: {
    location: "Turkey",
    name: "Istanbul",
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
  pl: {
    location: "Poland",
    name: "Warsaw",
    plans: {
      starter: {
        monthly: 22.99,
        yearly: 18.39
      },
      pro: {
        monthly: 45.99,
        yearly: 36.79
      },
      enterprise: {
        monthly: 85.99,
        yearly: 68.79
      }
    }
  }
};

export default function ArkServer() {
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

  // Ülke seçim komponenti
  const CountrySelector = () => (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Server Location</h3>
        <p className="text-gray-400 text-lg">Choose the datacenter closest to your tribe for optimal performance</p>
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
                    ? 'border-[#45a853] bg-[#45a853]/10'
                    : 'border-gray-800 hover:border-[#45a853]/50 hover:bg-[#45a853]/5'
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
                    <div className="w-6 h-6 bg-[#45a853] rounded-full flex items-center justify-center">
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

  // Seçili ülkeye göre plan fiyatlarını hesapla
  const getPlansForCountry = (countryCode: string) => {
    const countryData = countryPricing[countryCode as keyof typeof countryPricing];
    
    return [
      {
        name: "STARTER ARK",
        price: countryData.plans.starter.monthly.toFixed(2),
        yearlyPrice: countryData.plans.starter.yearly.toFixed(2),
        period: "per month",
        image: "/images/ark.jpg",
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
        description: "Perfect for small ARK tribes up to 20 players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: false,
      },
      {
        name: "PRO ARK",
        price: countryData.plans.pro.monthly.toFixed(2),
        yearlyPrice: countryData.plans.pro.yearly.toFixed(2),
        period: "per month",
        image: "/images/ark.jpg",
        features: [
          "6 vCPU Cores",
          "16GB DDR4 RAM",
          "300GB NVMe SSD",
          "Unmetered @ 1Gbps",
          "Advanced DDoS Protection",
          "Game Panel Access",
          "Premium Mod Support",
          "Hourly Backups",
          "99.99% Uptime",
          "Priority Support",
          "Cluster Support",
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
        description: "Ideal for medium-sized tribes with up to 50 players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: true,
      },
      {
        name: "ENTERPRISE ARK",
        price: countryData.plans.enterprise.monthly.toFixed(2),
        yearlyPrice: countryData.plans.enterprise.yearly.toFixed(2),
        period: "per month",
        image: "/images/ark.jpg",
        features: [
          "8 vCPU Cores",
          "32GB DDR4 RAM",
          "500GB NVMe SSD",
          "Unmetered @ 10Gbps",
          "Premium DDoS Protection",
          "Game Panel Access",
          "Premium Mod Support",
          "Real-time Backups",
          "100% Uptime SLA",
          "24/7 Priority Support",
          "Multi-Cluster Support",
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
        description: "For large ARK communities with 100+ players",
        buttonText: "Deploy Now",
        href: "/deploy",
        isPopular: false,
      }
    ];
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[800px]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/5fIAPcVdZO8?autoplay=1&mute=1&controls=0&loop=1&playlist=5fIAPcVdZO8&showinfo=0&modestbranding=1&rel=0&hq=1&vq=hd1080"
              allow="autoplay; encrypted-media"
              className="absolute w-[180%] h-[180%] -top-[40%] -left-[40%] origin-center"
              style={{
                opacity: 1,
                filter: 'brightness(1) contrast(1) saturate(1)',
                pointerEvents: 'none',
                border: 'none',
                transform: 'scale(1.1)',
                zIndex: 5
              }}
            />
          </div>
          <div className="absolute inset-0 from-transparent via-transparent to-[#0f1117] z-10 opacity-0"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 z-20 pt-32">
          <div className="p-12">
            <h1 className="text-8xl font-bold text-white mb-8 tracking-tight text-shadow-xl">
              ARK <span className="text-[#45a853] relative">
                Servers
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#45a853]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-white text-3xl mb-12 max-w-3xl mx-auto leading-relaxed text-shadow-xl font-semibold">
              High-performance ARK: Survival Evolved servers with mod support, cluster capability, and 24/7 support.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-24 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Country Selector */}
          <CountrySelector />

          <div id="pricing-section">
          <Pricing 
              plans={getPlansForCountry(selectedCountry)}
              title={`ARK Server Plans in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}`}
              description={`Choose the perfect ARK: Survival Evolved server for your tribe in ${countryPricing[selectedCountry as keyof typeof countryPricing].location}.
All plans include game panel access, DDoS protection, and mod support.`}
            />
          </div>
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
                    src="/images/ark.jpg" 
                    alt="ARK Server Screenshot 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-full h-full relative group-hover:ring-4 group-hover:ring-[#FFB800] transition-all duration-300">
                  <img 
                    src="/images/ark1.jpg" 
                    alt="ARK Server Screenshot 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-full h-full relative group-hover:ring-4 group-hover:ring-[#FFB800] transition-all duration-300">
                  <img 
                    src="/images/ark2.jpg" 
                    alt="ARK Server Screenshot 3"
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
                <p className="text-sm text-white/90">PHOTOS: ARK.GAME</p>
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
                answer: "Our ARK servers are hosted in multiple locations including the United States (Ashburn, VA), United Kingdom, Turkey, and Poland. Choose the location closest to your tribe for the best performance."
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
                question: "How do I manage my ARK server?",
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