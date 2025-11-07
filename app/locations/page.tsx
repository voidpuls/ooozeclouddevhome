'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Location {
  id: string;
  name: string;
  country: string;
  flag: string;
  position: {
    top: string;
    left: string;
  };
  specs: string[];
  ip: string;
  basePing: number;
}

export default function LocationsPage() {
  const [pings, setPings] = useState<Record<string, number>>({});
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [pingError, setPingError] = useState<Record<string, boolean>>({});

  const locations: Location[] = [
    {
      id: 'germany',
      name: 'Frankfurt',
      country: 'Germany',
      flag: 'de',
      position: {
        top: '37.1%',
        left: '50%'
      },
      specs: ['10 Gbps Network', 'Intel Xeon Processors', 'NVMe Storage'],
      ip: '78.46.170.2',
      basePing: 45
    },
    {
      id: 'norway',
      name: 'Oslo',
      country: 'Norway',
      flag: 'no',
      position: {
        top: '27.2%',
        left: '50%'
      },
      specs: ['10 Gbps Network', 'AMD EPYC Processors', 'NVMe Storage'],
      ip: '185.243.216.1',
      basePing: 60
    },
    {
      id: 'turkey',
      name: 'Istanbul',
      country: 'Turkey',
      flag: 'tr',
      position: {
        top: '44%',
        left: '55.7%'
      },
      specs: ['10 Gbps Network', 'AMD EPYC Processors', 'NVMe Storage'],
      ip: '185.50.70.47',
      basePing: 75
    },
    {
      id: 'russia',
      name: 'Moscow',
      country: 'Russia',
      flag: 'ru',
      position: {
        top: '33%',
        left: '61%'
      },
      specs: ['10 Gbps Network', 'Intel Xeon Processors', 'NVMe Storage'],
      ip: '185.71.67.1',
      basePing: 85
    },
    {
      id: 'india',
      name: 'Mumbai',
      country: 'India',
      flag: 'in',
      position: {
        top: '53%',
        left: '69%'
      },
      specs: ['10 Gbps Network', 'AMD EPYC Processors', 'NVMe Storage'],
      ip: '103.171.44.232',
      basePing: 140
    },
    {
      id: 'usa',
      name: 'New York',
      country: 'United States',
      flag: 'us',
      position: {
        top: '41.4%',
        left: '26.7%'
      },
      specs: ['20 Gbps Network', 'AMD EPYC Processors', 'Enterprise SSDs'],
      ip: '104.37.173.20',
      basePing: 120
    },
    {
      id: 'mexico',
      name: 'Mexico City',
      country: 'Mexico',
      flag: 'mx',
      position: {
        top: '51%',
        left: '21%'
      },
      specs: ['10 Gbps Network', 'Intel Xeon Processors', 'NVMe Storage'],
      ip: '189.201.128.1',
      basePing: 140
    },
    {
      id: 'japan',
      name: 'Tokyo',
      country: 'Japan',
      flag: 'jp',
      position: {
        top: '44%',
        left: '88.5%'
      },
      specs: ['15 Gbps Network', 'Ryzen Processors', 'High Performance SSDs'],
      ip: '223.27.68.216',
      basePing: 180
    },
    {
      id: 'australia',
      name: 'Sydney',
      country: 'Australia',
      flag: 'au',
      position: {
        top: '85.5%',
        left: '92.4%'
      },
      specs: ['10 Gbps Network', 'AMD EPYC Processors', 'NVMe Storage'],
      ip: '51.161.196.97',
      basePing: 220
    }
  ];

  // Gerçek ping isteği gönderme
  const sendPingRequest = async (locationId: string) => {
    try {
      const response = await fetch(`/api/ping?location=${locationId}`);
      const data = await response.json();
      
      if (data.success) {
        setPings(prev => ({
          ...prev,
          [locationId]: data.ping
        }));
        setPingError(prev => ({
          ...prev,
          [locationId]: false
        }));
      } else {
        setPingError(prev => ({
          ...prev,
          [locationId]: true
        }));
      }
    } catch (error) {
      setPingError(prev => ({
        ...prev,
        [locationId]: true
      }));
    }
  };

  // Ping isteğini periyodik olarak gönderme
  useEffect(() => {
    // Tüm lokasyonlar için ping isteği gönder
    const sendAllPings = () => {
      locations.forEach(location => {
        sendPingRequest(location.id);
      });
    };

    // İlk ping isteklerini hemen gönder
    sendAllPings();
    
    // Her 1 saniyede bir tüm lokasyonlar için yeni istek gönder
    const interval = setInterval(sendAllPings, 1000);

    return () => clearInterval(interval);
  }, []); // Boş dependency array ile sadece component mount olduğunda başlat

  // Ping değerine göre renk belirleme
  const getPingColor = (ping: number) => {
    if (ping < 100) return 'text-green-400';
    if (ping < 150) return 'text-[#228B22]';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <div className="mb-2 text-xl font-bold sm:mb-4 lg:text-3xl text-white">
            Our Global Reach
          </div>
          <p className="text-gray-300">
            With data centers around the world, we're always close to you.
          </p>
        </div>
        
        <div className="relative">
          <Image
            alt="World Map"
            src="/images/world-map.webp"
            width={1920}
            height={1080}
            className="h-full w-full object-cover rounded-xl"
          />
          
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute flex items-center justify-center"
              style={{
                top: location.position.top,
                left: location.position.left,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform'
              }}
            >
              <div 
                className="relative flex flex-col items-center"
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Flag */}
                <div className="relative w-8 h-5 rounded-sm overflow-hidden mb-2 shadow-lg">
                  <Image
                    src={`/images/flag/${location.flag}.svg`}
                    alt={location.country}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Location Point */}
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-[#228B22] rounded-sm transform rotate-45 border border-[#228B22]"></div>
                </div>

                {/* Ping Info */}
                <div className="mt-2 bg-[#0B0E14]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-[#228B22]/10">
                  {pingError[location.id] ? (
                    <div className="text-red-400 text-xs">Failed</div>
                  ) : (
                    <div className={`text-xs font-medium flex items-center gap-1 ${getPingColor(pings[location.id] || location.basePing)}`}>
                      {pings[location.id] !== undefined ? (
                        <>
                          {pings[location.id]}
                          <span className="text-[10px]">ms</span>
                        </>
                      ) : (
                        <div className="flex items-center gap-1">
                          <div className="animate-pulse w-6 h-3 bg-gray-700 rounded"></div>
                          <span className="text-[10px]">ms</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}