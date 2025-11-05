'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbbf24]/5 to-transparent opacity-20"
             style={{
               backgroundSize: '50px 50px',
               backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(251, 191, 36, 0.03) 25%, rgba(251, 191, 36, 0.03) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.03) 75%, rgba(251, 191, 36, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(251, 191, 36, 0.03) 25%, rgba(251, 191, 36, 0.03) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.03) 75%, rgba(251, 191, 36, 0.03) 76%, transparent 77%, transparent)'
             }}
        ></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 shadow-2xl"
        >
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
            >
              Welcome Back
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              Sign in to your account
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] mx-auto mt-6 rounded-full"
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                  placeholder="name@example.com"
                  required
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#fbbf24]/0 to-[#fbbf24]/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white/80">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center transition-opacity"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-white/40 hover:text-white/60" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/40 hover:text-white/60" />
                  )}
                </button>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#fbbf24]/0 to-[#fbbf24]/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded-md border-white/10 bg-white/5 text-[#fbbf24] focus:ring-[#fbbf24]/50 focus:ring-offset-0 focus:ring-offset-transparent"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-white/60">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-semibold py-4 rounded-xl transition-all hover:opacity-90 disabled:opacity-50"
            >
              <span className={`${isLoading ? 'invisible' : ''}`}>
                Sign In
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              )}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-10 transition-opacity"></div>
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-white/60">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors font-medium"
              >
                Create one →
              </Link>
            </p>
          </form>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fbbf24]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
} 