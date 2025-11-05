'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
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
          {/* Back to Login */}
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-white/60 hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
          >
            Reset Password
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 text-lg mb-8"
          >
            Enter your email to receive reset instructions
          </motion.div>

          {isSuccess ? (
            // Success Message
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Check Your Email</h3>
              <p className="text-white/60 mb-8">
                We've sent password reset instructions to your email address. Please check your inbox.
              </p>
              <Link
                href="/login"
                className="inline-block w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-semibold py-4 rounded-xl text-center transition-all hover:opacity-90"
              >
                Return to Login
              </Link>
            </motion.div>
          ) : (
            // Reset Form
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="name@example.com"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#fbbf24]/0 to-[#fbbf24]/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-semibold py-4 rounded-xl transition-all hover:opacity-90 disabled:opacity-50"
              >
                <span className={`${isLoading ? 'invisible' : ''}`}>
                  Send Reset Instructions
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-10 transition-opacity"></div>
              </button>
            </form>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fbbf24]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
} 