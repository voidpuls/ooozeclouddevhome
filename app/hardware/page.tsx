'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  HardDrive, 
  Gauge, 
  Server, 
  Shield, 
  Wifi, 
  BarChart3,
  Zap,
  CheckCircle
} from 'lucide-react';

export default function HardwarePage() {
  const serverSpecs = [
    {
      name: "Pro Series",
      cpu: "AMD EPYC 7543P",
      cores: "32 Cores / 64 Threads",
      clock: "2.8GHz - 3.7GHz",
      ram: "Up to 256GB DDR4 ECC",
      storage: "NVMe SSD",
      network: "10 Gbps",
      features: [
        "Enterprise Grade Hardware",
        "RAID Configuration",
        "DDoS Protection",
        "24/7 Hardware Monitoring"
      ]
    },
    {
      name: "Enterprise Series",
      cpu: "AMD EPYC 7763",
      cores: "64 Cores / 128 Threads",
      clock: "2.45GHz - 3.5GHz",
      ram: "Up to 512GB DDR4 ECC",
      storage: "NVMe SSD RAID",
      network: "25 Gbps",
      features: [
        "Enterprise Grade Hardware",
        "Advanced RAID Configuration",
        "Enhanced DDoS Protection",
        "Dedicated Hardware Support"
      ]
    }
  ];

  const performanceMetrics = [
    {
      title: "CPU Performance",
      value: "Up to 3.7 GHz",
      icon: Cpu,
      description: "High-frequency processors for optimal gaming performance"
    },
    {
      title: "Storage Speed",
      value: "7000 MB/s",
      icon: HardDrive,
      description: "Ultra-fast NVMe SSDs for instant loading times"
    },
    {
      title: "Network Latency",
      value: "< 1ms",
      icon: Wifi,
      description: "Low-latency network infrastructure for smooth gameplay"
    },
    {
      title: "Power Efficiency",
      value: "95%",
      icon: Zap,
      description: "Energy-efficient hardware for sustainable hosting"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] text-white pt-24 pb-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbbf24]/5 to-transparent opacity-20"
             style={{
               backgroundSize: '50px 50px',
               backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(251, 191, 36, 0.03) 25%, rgba(251, 191, 36, 0.03) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.03) 75%, rgba(251, 191, 36, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(251, 191, 36, 0.03) 25%, rgba(251, 191, 36, 0.03) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.03) 75%, rgba(251, 191, 36, 0.03) 76%, transparent 77%, transparent)'
             }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 rounded-xl bg-[#fbbf24]/10">
              <Server className="w-8 h-8 text-[#fbbf24]" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            Enterprise Grade Hardware
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Powered by the latest AMD EPYC processors and NVMe storage technology for
            unparalleled gaming performance.
          </motion.p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 hover:border-[#fbbf24]/20 transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#fbbf24]/10 w-fit mb-4">
                <metric.icon className="w-6 h-6 text-[#fbbf24]" />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-[#fbbf24] transition-colors">
                {metric.title}
              </h3>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">
                {metric.value}
              </div>
              <p className="text-gray-400 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Server Specifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {serverSpecs.map((server, index) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-[#fbbf24]/10 mr-4">
                  <Gauge className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <h2 className="text-2xl font-bold">{server.name}</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Processor</div>
                    <div className="font-medium">{server.cpu}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Cores/Threads</div>
                    <div className="font-medium">{server.cores}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Clock Speed</div>
                    <div className="font-medium">{server.clock}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Memory</div>
                    <div className="font-medium">{server.ram}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Storage</div>
                    <div className="font-medium">{server.storage}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Network</div>
                    <div className="font-medium">{server.network}</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-3">Key Features</div>
                <ul className="space-y-2">
                  {server.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-[#fbbf24] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infrastructure Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8">Infrastructure Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Network Infrastructure",
                description: "Enterprise-grade networking with multiple 100Gbps uplinks and advanced routing",
                icon: Wifi
              },
              {
                title: "Security Measures",
                description: "Multi-layered DDoS protection and advanced firewall configurations",
                icon: Shield
              },
              {
                title: "Performance Monitoring",
                description: "24/7 hardware monitoring and automated performance optimization",
                icon: BarChart3
              }
            ].map((highlight, index) => (
              <div key={highlight.title} className="space-y-3">
                <div className="p-3 rounded-xl bg-[#fbbf24]/10 w-fit">
                  <highlight.icon className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <h3 className="text-lg font-semibold">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 