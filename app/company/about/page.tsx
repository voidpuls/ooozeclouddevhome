'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/team/placeholder.png',
      bio: 'Visionary leader with 15+ years experience in cloud infrastructure.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/team/placeholder.png',
      bio: 'Tech genius with a passion for innovative hosting solutions.'
    },
    {
      name: 'Michael Rivera',
      role: 'Head of Operations',
      image: '/team/placeholder.png',
      bio: 'Ensures our data centers run flawlessly 24/7/365.'
    },
  ];

  const milestones = [
    { year: '2017', title: 'OozeCloud Founded', description: 'Started with one data center in Germany' },
    { year: '2019', title: 'Expansion', description: 'Added UK data center and doubled our client base' },
    { year: '2021', title: 'Tech Upgrade', description: 'Implemented cutting-edge network architecture' },
    { year: '2023', title: 'Global Growth', description: 'Expanded to Poland and Turkey, serving clients worldwide' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CEO Message Section */}
      <section className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text text-lg font-medium tracking-wider">
                VISION & LEADERSHIP
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              A Vision for the Future of Infrastructure
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
          </div>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 leading-relaxed">
              In an era where digital infrastructure forms the backbone of innovation, OozeCloud stands at the forefront 
              of transformative hosting solutions. Our journey began with a clear vision: to revolutionize the hosting 
              industry by creating an infrastructure that adapts and evolves with the rapidly changing digital landscape.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6">
              The digital world demands more than just server space – it requires an ecosystem that understands and 
              anticipates the needs of modern businesses. At OozeCloud, we've built exactly that. Our state-of-the-art 
              data centers across Europe represent more than just physical infrastructure; they are gateways to 
              unlimited digital possibilities.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6">
              What sets OozeCloud apart is our unwavering commitment to three core principles:
            </p>

            <ul className="space-y-4 mt-6 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">Innovation at Scale:</strong> Our infrastructure is built on cutting-edge technology, 
                designed to scale seamlessly with your ambitions. We're not just keeping pace with technological advancement – we're helping define it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">Uncompromising Security:</strong> In today's digital landscape, security isn't an 
                add-on – it's foundational. Our multi-layered security approach ensures your data and applications are protected by 
                industry-leading safeguards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">Client-Centric Evolution:</strong> Every advancement we make is driven by our 
                clients' needs. Your challenges become our innovation catalysts, leading to solutions that don't just meet expectations – 
                they exceed them.</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              Our strategic presence in key European locations isn't just about geographical reach – it's about creating 
              a network that delivers unprecedented performance and reliability. Each data center is a testament to our 
              commitment to excellence, equipped with the latest in server technology and environmental control systems.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6">
              Looking ahead, our vision extends beyond traditional hosting. We're investing heavily in:
            </p>

            <ul className="space-y-4 mt-6 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">Next-Generation Infrastructure:</strong> Pushing the boundaries of what's possible 
                with advanced hardware and innovative cooling solutions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">AI-Driven Operations:</strong> Implementing intelligent systems that predict and 
                prevent issues before they impact your services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span><strong className="text-amber-400">Sustainable Computing:</strong> Leading the industry in environmentally 
                responsible hosting solutions without compromising on performance.</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              To our current clients: your trust in OozeCloud drives us to continually raise the bar in hosting excellence. 
              To those considering OozeCloud: we invite you to experience infrastructure that doesn't just host your 
              applications – it empowers their potential.
            </p>

            <p className="text-gray-300 leading-relaxed mt-6">
              The future of digital infrastructure is being written today, and OozeCloud is holding the pen. Join us in 
              shaping a future where technology knows no bounds.
            </p>

            <div className="mt-12 text-gray-300">
              <p>Forward-thinking regards,</p>
              <p className="font-bold text-gradient bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Alexander Reeves</p>
              <p>Chief Executive Officer, OozeCloud</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12 text-center backdrop-blur-sm bg-black/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Infrastructure?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join the ranks of forward-thinking companies who trust OozeCloud with their digital future.
            </p>
            <Link href="https://client.oozecloud.com/">
              <button className="px-8 py-3 bg-black text-amber-400 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                Begin Your Journey
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 
