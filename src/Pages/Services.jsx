import { memo } from 'react';
import { motion } from 'framer-motion';
import { Server, TerminalSquare, Layers, Shield, Cloud, Globe } from 'lucide-react';
import 'aos/dist/aos.css';

const SERVICES_DATA = [
  {
    icon: <Server className="text-purple-400" size={16} />,
    game: "Lightning-Fast NVMe SSD",
    players: "Blazing I/O Speeds",
    region: "Optimized for Gaming",
    trend: "🚀 Unmatched Performance",
    color: "text-purple-400",
  },
  {
    icon: <TerminalSquare className="text-pink-400" size={16} />,
    game: "Intuitive Control Panel",
    players: "Beginner & Pro Friendly",
    region: "Full Server Management",
    trend: "⚙️ Total Control",
    color: "text-pink-400",
  },
  {
    icon: <Layers className="text-indigo-400" size={16} />,
    game: "Scalable Server Resources",
    players: "Upgrade Anytime",
    region: "Pay for What You Need",
    trend: "📈 Growth-Ready Plans",
    color: "text-indigo-400",
  },
  {
    icon: <Shield className="text-green-400" size={16} />,
    game: "Advanced DDoS Protection",
    players: "Enterprise-Grade Security",
    region: "Guaranteed Uptime",
    trend: "🔒 Play Without Worry",
    color: "text-green-400",
  },
  {
    icon: <Cloud className="text-blue-400" size={16} />,
    game: "Global Hosting Network",
    players: "Low Latency Worldwide",
    region: "Multiple Data Center Locations",
    trend: "🌐 Anywhere, Anytime",
    color: "text-blue-400",
  },
  {
    icon: <Globe className="text-yellow-400" size={16} />,
    game: "24/7 Expert Support",
    players: "Fast Response Team",
    region: "Always Ready to Assist",
    trend: "🤝 Support You Can Trust",
    color: "text-yellow-400",
  },
];

const ServicesCard = memo(({ icon, game, players, region, trend, color }) => (
  <div
    className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
    data-aos="fade-up"
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-white/5 rounded-3xl blur-md opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
    <div className={`absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-500/10 rounded-3xl blur-2xl opacity-10`}></div>

    <div className="relative z-10 flex flex-col items-start gap-4">
      <div className={`p-3 rounded-full bg-white/10`}>
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          {game}
        </h3>
        <p className="text-sm text-gray-400 font-light">{players}</p>
        <p className="text-sm text-gray-400 font-light">{region}</p>
      </div>
      <span className="mt-2 text-sm font-medium bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
        {trend}
      </span>
    </div>
  </div>
));

const ServicesPage = memo(() => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="container mx-auto px-[5%] sm:px-[5%] lg:px-[10%] min-h-screen flex flex-col justify-start pt-20 pb-32"
    id="Layanan"
  >
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
        Our Core Services
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        We provide a comprehensive suite of features designed to give you an unparalleled gaming experience.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {SERVICES_DATA.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </div>
  </motion.section>
));

export default ServicesPage;