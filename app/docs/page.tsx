'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code2, 
  FileText, 
  Terminal, 
  Copy, 
  CheckCheck,
  ChevronRight,
  Search,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language }: { code: string, language: string }) => (
    <div className="relative group">
      <div className="absolute right-4 top-4">
        <button
          onClick={() => copyToClipboard(code)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          {copiedCode === code ? (
            <CheckCheck className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="bg-black/20 rounded-xl p-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-300">{code}</code>
      </pre>
    </div>
  );

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
            Documentation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about our services, APIs, and game server management.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#228B22]/50 focus:ring-1 focus:ring-[#228B22]/50 transition-colors placeholder:text-gray-500"
            />
          </div>
        </motion.div>

        {/* Documentation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Getting Started',
              description: 'Learn the basics of setting up and managing your game server.',
              icon: Book,
              link: '/docs/getting-started'
            },
            {
              title: 'API Reference',
              description: 'Detailed documentation of our RESTful API endpoints.',
              icon: Code2,
              link: '/docs/api'
            },
            {
              title: 'Game Guides',
              description: 'Game-specific setup guides and configuration tutorials.',
              icon: FileText,
              link: '/docs/guides'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 hover:border-[#228B22]/20 transition-colors group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#228B22]/10 text-[#228B22]">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#228B22] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-sm text-[#228B22] hover:text-[#228B22]/80 transition-colors"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Start Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="space-y-6">
            <p className="text-gray-400">
              Get your game server up and running in minutes with our simple API:
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST \\
  https://api.yourdomain.com/v1/servers \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "game": "minecraft",
    "plan": "pro",
    "location": "us-east"
  }'`}
            />
            <div className="flex items-center space-x-2 text-sm">
              <Terminal className="w-4 h-4 text-[#228B22]" />
              <span className="text-gray-400">Need help? Check out our</span>
              <Link
                href="/docs/api/authentication"
                className="text-[#228B22] hover:text-[#228B22]/80 transition-colors"
              >
                Authentication Guide
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            {
              title: 'Popular Articles',
              items: [
                { title: 'Server Requirements', link: '/docs/requirements' },
                { title: 'Backup and Restore', link: '/docs/backup' },
                { title: 'Performance Tuning', link: '/docs/performance' },
                { title: 'Security Best Practices', link: '/docs/security' }
              ]
            },
            {
              title: 'Resources',
              items: [
                { title: 'API Status', link: '/status', external: true },
                { title: 'GitHub Repository', link: 'https://github.com/gameserverhost', external: true },
                { title: 'Community Forums', link: '/community', external: true },
                { title: 'Video Tutorials', link: '/tutorials', external: true }
              ]
            }
          ].map((section, index) => (
            <div
              key={section.title}
              className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors"
                    >
                      <span>{item.title}</span>
                      {'external' in item && item.external ? (
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 