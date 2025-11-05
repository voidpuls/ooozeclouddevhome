'use client';

import { Pricing } from '@/components/ui/pricing';

export default function SevenDaysServer() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1d26] to-[#0f1117] pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#ff6b6b]/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              7 Days to Die <span className="text-[#ff6b6b] relative">
                Servers
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff6b6b]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              High-performance 7 Days to Die servers with mod support, custom configurations, and automatic updates.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-24 bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b6b]/10 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <Pricing 
            plans={[
              {
                name: "STARTER 7DTD",
                price: "14.99",
                yearlyPrice: "11.99",
                period: "per month",
                features: [
                  "4 vCPU Cores",
                  "8GB DDR4 RAM",
                  "100GB NVMe SSD",
                  "Unmetered @ 1Gbps",
                  "Basic DDoS Protection",
                  "Game Panel Access",
                  "Mod Support",
                  "Daily Backups",
                  "99.9% Uptime",
                  "24/7 Support"
                ],
                description: "Perfect for small survivor groups up to 8 players",
                buttonText: "Deploy Now",
                href: "/deploy",
                isPopular: false,
              },
              {
                name: "PRO 7DTD",
                price: "29.99",
                yearlyPrice: "23.99",
                period: "per month",
                features: [
                  "6 vCPU Cores",
                  "16GB DDR4 RAM",
                  "200GB NVMe SSD",
                  "Unmetered @ 1Gbps",
                  "Advanced DDoS Protection",
                  "Game Panel Access",
                  "Advanced Mod Support",
                  "Custom Maps",
                  "Hourly Backups",
                  "99.99% Uptime",
                  "Priority Support",
                  "Discord Integration"
                ],
                description: "Ideal for medium-sized communities with up to 16 players",
                buttonText: "Deploy Now",
                href: "/deploy",
                isPopular: true,
              },
              {
                name: "ENTERPRISE 7DTD",
                price: "54.99",
                yearlyPrice: "43.99",
                period: "per month",
                features: [
                  "8 vCPU Cores",
                  "32GB DDR4 RAM",
                  "500GB NVMe SSD",
                  "Unmetered @ 10Gbps",
                  "Premium DDoS Protection",
                  "Game Panel Access",
                  "Advanced Mod Support",
                  "Custom Maps",
                  "Real-time Backups",
                  "100% Uptime SLA",
                  "24/7 Priority Support",
                  "API Access",
                  "Custom Configuration"
                ],
                description: "For large communities with 32+ players",
                buttonText: "Deploy Now",
                href: "/deploy",
                isPopular: false,
              }
            ]}
            title="7 Days to Die Server Plans"
            description="Choose the perfect 7 Days to Die server for your survivors.
All plans include game panel access, DDoS protection, and mod support."
          />
        </div>
      </div>
    </div>
  );
} 