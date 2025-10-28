import { memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Server, Layers, ShieldCheck, Clock, Globe, Zap, Gift, Award } from 'lucide-react';
import 'aos/dist/aos.css';

const GlobalNetworkPage = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-[#030014] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-20"
  >
    <div className="container mx-auto py-20 text-center">
      <div data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent tracking-tight">
          Global Infrastructure Network
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          Built for Performance
        </h2>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Experience low-latency gaming with our enterprise-grade hardware and globally distributed network infrastructure.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12" data-aos="fade-up" data-aos-delay="200">
        {/* Left Card: SHARED HOSTING */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="text-violet-500" size={20} />
              SHARED HOSTING
            </h3>
            <span className="flex items-center gap-1 text-sm font-medium text-yellow-400">
              <CheckCircle size={16} />
              Coming Soon
            </span>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-200">Singapore</h4>
                <span className="flex items-center gap-1 text-sm font-medium text-yellow-400">
                  <CheckCircle size={16} />
                  Coming Soon
                </span>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex items-center gap-2">
                  <Server size={14} />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} />
                  <span>-</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={14} />
                  <span>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle Card: BASIC HOSTING */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="text-pink-500" size={20} />
              BASIC HOSTING
            </h3>
            <span className="flex items-center gap-1 text-sm font-medium text-green-400">
              <CheckCircle size={16} />
              Operational
            </span>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-200">Singapore</h4>
                <span className="flex items-center gap-1 text-sm font-medium text-green-400">
                  <CheckCircle size={16} />
                  Operational
                </span>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex items-center gap-2">
                  <Server size={14} />
                  <span>AMD EPYC 4244P</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} />
                  <span>128GB DDR5</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>Anti DDoS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Online 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} />
                  <span>Subdomain gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={14} />
                  <span>Free setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Card: PREMIUM HOSTING */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="text-emerald-500" size={20} />
              PREMIUM HOSTING
            </h3>
            <span className="flex items-center gap-1 text-sm font-medium text-green-400">
              <CheckCircle size={16} />
              Operational
            </span>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-200">Singapore</h4>
                <span className="flex items-center gap-1 text-sm font-medium text-green-400">
                  <CheckCircle size={16} />
                  Operational
                </span>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex items-center gap-2">
                  <Server size={14} />
                  <span>AMD EPYC 4344P</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} />
                  <span>128GB DDR5</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>Anti DDoS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Online 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} />
                  <span>Subdomain gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={14} />
                  <span>Free setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

export default GlobalNetworkPage;
