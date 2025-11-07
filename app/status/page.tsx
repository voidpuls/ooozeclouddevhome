'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Activity, 
  Clock, 
  Users, 
  Cpu, 
  HardDrive, 
  Network, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: number;
  latency: number;
}

interface SystemMetrics {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
}

export default function StatusPage() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'Game Servers',
      status: 'operational',
      uptime: 99.99,
      latency: 28
    },
    {
      name: 'Website',
      status: 'operational',
      uptime: 99.98,
      latency: 42
    },
    {
      name: 'Control Panel',
      status: 'operational',
      uptime: 99.95,
      latency: 85
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: 99.99,
      latency: 15
    }
  ]);

  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 45,
    memory: 68,
    storage: 72,
    network: 58
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.min(100, Math.max(0, prev.memory + (Math.random() - 0.5) * 5)),
        storage: Math.min(100, Math.max(0, prev.storage + (Math.random() - 0.5) * 2)),
        network: Math.min(100, Math.max(0, prev.network + (Math.random() - 0.5) * 15))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getMetricColor = (value: number) => {
    if (value < 70) return 'text-green-400';
    if (value < 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white pt-24 pb-12">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#228B22]/5 to-transparent opacity-20"
             style={{
               backgroundSize: '50px 50px',
               backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(36, 251, 57, 0.03) 25%, rgba(36, 251, 57, 0.03) 26%, transparent 27%, transparent 74%, rgba(36, 251, 57, 0.03) 75%, rgba(36, 251, 57, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(36, 251, 57, 0.03) 25%, rgba(36, 251, 57, 0.03) 26%, transparent 27%, transparent 74%, rgba(36, 251, 57, 0.03) 75%, rgba(36, 251, 57, 0.03) 76%, transparent 77%, transparent)'
             }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            System Status
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400"
          >
            Real-time monitoring of our services and infrastructure
          </motion.p>
        </div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Server className="w-8 h-8 text-[#228B22]" />
              <div>
                <h2 className="text-2xl font-bold">All Systems Operational</h2>
                <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                })}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">99.98%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(service.status)}
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
                <span className={`${getStatusColor(service.status)} font-medium`}>
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Uptime</div>
                  <div className="text-xl font-bold text-green-400">{service.uptime}%</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Latency</div>
                  <div className="text-xl font-bold text-[#228B22]">{service.latency}ms</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">System Metrics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'CPU Usage', value: metrics.cpu, icon: Cpu },
              { name: 'Memory Usage', value: metrics.memory, icon: HardDrive },
              { name: 'Storage', value: metrics.storage, icon: HardDrive },
              { name: 'Network', value: metrics.network, icon: Network }
            ].map((metric, index) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <metric.icon className="w-5 h-5" />
                  <span>{metric.name}</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getMetricColor(metric.value)} bg-current transition-all duration-500`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
                <div className={`text-right text-sm ${getMetricColor(metric.value)}`}>
                  {metric.value.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 