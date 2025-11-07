'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[120px] animate-pulse delay-300"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
        />
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email",
              info: "support@OozeCloud.com",
              action: "mailto:support@OozeCloud.com"
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Phone",
              info: "+1 (555) 123-4567",
              action: "tel:+15551234567"
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Location",
              info: "New York, USA",
              action: "#map"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.action}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-400">{item.title}</h3>
                  <p className="text-gray-400">{item.info}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/20 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map & Social Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="space-y-6 lg:sticky lg:top-20"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564658827!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl text-black hover:shadow-lg hover:shadow-amber-500/20 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 