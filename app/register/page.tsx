'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User, Phone, Building2, Globe2, MapPin, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postcode: '',
    country: 'TR',
    password: '',
    confirmPassword: '',
    newsletter: false,
    terms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log('Register attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white py-16 px-4 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative">
        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 shadow-2xl"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
            >
              Create Account
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              Join our gaming community
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] mx-auto mt-6 rounded-full"
            />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80">
                  First Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80">
                  Last Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-white/80">
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="+49 (___) ___-____"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company Information (Optional) */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-white/80">
                Company Name (Optional)
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                </div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="address1" className="block text-sm font-medium text-white/80">
                  Address Line 1
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="Street address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address2" className="block text-sm font-medium text-white/80">
                  Address Line 2 (Optional)
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="Apartment, suite, unit, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-white/80">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="state" className="block text-sm font-medium text-white/80">
                    State/Region
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="State/Region"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="postcode" className="block text-sm font-medium text-white/80">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="Postal code"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium text-white/80">
                    Country
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Globe2 className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                    </div>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all text-white/80"
                      required
                    >
                      <option value="AF" className="bg-[#0f1117]">Afghanistan</option>
                      <option value="AX" className="bg-[#0f1117]">Aland Islands</option>
                      <option value="AL" className="bg-[#0f1117]">Albania</option>
                      <option value="DZ" className="bg-[#0f1117]">Algeria</option>
                      <option value="AS" className="bg-[#0f1117]">American Samoa</option>
                      <option value="AD" className="bg-[#0f1117]">Andorra</option>
                      <option value="AO" className="bg-[#0f1117]">Angola</option>
                      <option value="AI" className="bg-[#0f1117]">Anguilla</option>
                      <option value="AQ" className="bg-[#0f1117]">Antarctica</option>
                      <option value="AG" className="bg-[#0f1117]">Antigua and Barbuda</option>
                      <option value="AR" className="bg-[#0f1117]">Argentina</option>
                      <option value="AM" className="bg-[#0f1117]">Armenia</option>
                      <option value="AW" className="bg-[#0f1117]">Aruba</option>
                      <option value="AU" className="bg-[#0f1117]">Australia</option>
                      <option value="AT" className="bg-[#0f1117]">Austria</option>
                      <option value="AZ" className="bg-[#0f1117]">Azerbaijan</option>
                      <option value="BS" className="bg-[#0f1117]">Bahamas</option>
                      <option value="BH" className="bg-[#0f1117]">Bahrain</option>
                      <option value="BD" className="bg-[#0f1117]">Bangladesh</option>
                      <option value="BB" className="bg-[#0f1117]">Barbados</option>
                      <option value="BY" className="bg-[#0f1117]">Belarus</option>
                      <option value="BE" className="bg-[#0f1117]">Belgium</option>
                      <option value="BZ" className="bg-[#0f1117]">Belize</option>
                      <option value="BJ" className="bg-[#0f1117]">Benin</option>
                      <option value="BM" className="bg-[#0f1117]">Bermuda</option>
                      <option value="BT" className="bg-[#0f1117]">Bhutan</option>
                      <option value="BO" className="bg-[#0f1117]">Bolivia</option>
                      <option value="BA" className="bg-[#0f1117]">Bosnia and Herzegovina</option>
                      <option value="BW" className="bg-[#0f1117]">Botswana</option>
                      <option value="BV" className="bg-[#0f1117]">Bouvet Island</option>
                      <option value="BR" className="bg-[#0f1117]">Brazil</option>
                      <option value="IO" className="bg-[#0f1117]">British Indian Ocean Territory</option>
                      <option value="BN" className="bg-[#0f1117]">Brunei Darussalam</option>
                      <option value="BG" className="bg-[#0f1117]">Bulgaria</option>
                      <option value="BF" className="bg-[#0f1117]">Burkina Faso</option>
                      <option value="BI" className="bg-[#0f1117]">Burundi</option>
                      <option value="KH" className="bg-[#0f1117]">Cambodia</option>
                      <option value="CM" className="bg-[#0f1117]">Cameroon</option>
                      <option value="CA" className="bg-[#0f1117]">Canada</option>
                      <option value="CV" className="bg-[#0f1117]">Cape Verde</option>
                      <option value="KY" className="bg-[#0f1117]">Cayman Islands</option>
                      <option value="CF" className="bg-[#0f1117]">Central African Republic</option>
                      <option value="TD" className="bg-[#0f1117]">Chad</option>
                      <option value="CL" className="bg-[#0f1117]">Chile</option>
                      <option value="CN" className="bg-[#0f1117]">China</option>
                      <option value="CX" className="bg-[#0f1117]">Christmas Island</option>
                      <option value="CC" className="bg-[#0f1117]">Cocos (Keeling) Islands</option>
                      <option value="CO" className="bg-[#0f1117]">Colombia</option>
                      <option value="KM" className="bg-[#0f1117]">Comoros</option>
                      <option value="CG" className="bg-[#0f1117]">Congo</option>
                      <option value="CD" className="bg-[#0f1117]">Congo, Democratic Republic</option>
                      <option value="CK" className="bg-[#0f1117]">Cook Islands</option>
                      <option value="CR" className="bg-[#0f1117]">Costa Rica</option>
                      <option value="CI" className="bg-[#0f1117]">Cote D'Ivoire</option>
                      <option value="HR" className="bg-[#0f1117]">Croatia</option>
                      <option value="CU" className="bg-[#0f1117]">Cuba</option>
                      <option value="CY" className="bg-[#0f1117]">Cyprus</option>
                      <option value="CZ" className="bg-[#0f1117]">Czech Republic</option>
                      <option value="DK" className="bg-[#0f1117]">Denmark</option>
                      <option value="DJ" className="bg-[#0f1117]">Djibouti</option>
                      <option value="DM" className="bg-[#0f1117]">Dominica</option>
                      <option value="DO" className="bg-[#0f1117]">Dominican Republic</option>
                      <option value="EC" className="bg-[#0f1117]">Ecuador</option>
                      <option value="EG" className="bg-[#0f1117]">Egypt</option>
                      <option value="SV" className="bg-[#0f1117]">El Salvador</option>
                      <option value="GQ" className="bg-[#0f1117]">Equatorial Guinea</option>
                      <option value="ER" className="bg-[#0f1117]">Eritrea</option>
                      <option value="EE" className="bg-[#0f1117]">Estonia</option>
                      <option value="ET" className="bg-[#0f1117]">Ethiopia</option>
                      <option value="FK" className="bg-[#0f1117]">Falkland Islands</option>
                      <option value="FO" className="bg-[#0f1117]">Faroe Islands</option>
                      <option value="FJ" className="bg-[#0f1117]">Fiji</option>
                      <option value="FI" className="bg-[#0f1117]">Finland</option>
                      <option value="FR" className="bg-[#0f1117]">France</option>
                      <option value="GF" className="bg-[#0f1117]">French Guiana</option>
                      <option value="PF" className="bg-[#0f1117]">French Polynesia</option>
                      <option value="TF" className="bg-[#0f1117]">French Southern Territories</option>
                      <option value="GA" className="bg-[#0f1117]">Gabon</option>
                      <option value="GM" className="bg-[#0f1117]">Gambia</option>
                      <option value="GE" className="bg-[#0f1117]">Georgia</option>
                      <option value="DE" className="bg-[#0f1117]">Germany</option>
                      <option value="GH" className="bg-[#0f1117]">Ghana</option>
                      <option value="GI" className="bg-[#0f1117]">Gibraltar</option>
                      <option value="GR" className="bg-[#0f1117]">Greece</option>
                      <option value="GL" className="bg-[#0f1117]">Greenland</option>
                      <option value="GD" className="bg-[#0f1117]">Grenada</option>
                      <option value="GP" className="bg-[#0f1117]">Guadeloupe</option>
                      <option value="GU" className="bg-[#0f1117]">Guam</option>
                      <option value="GT" className="bg-[#0f1117]">Guatemala</option>
                      <option value="GG" className="bg-[#0f1117]">Guernsey</option>
                      <option value="GN" className="bg-[#0f1117]">Guinea</option>
                      <option value="GW" className="bg-[#0f1117]">Guinea-Bissau</option>
                      <option value="GY" className="bg-[#0f1117]">Guyana</option>
                      <option value="HT" className="bg-[#0f1117]">Haiti</option>
                      <option value="HM" className="bg-[#0f1117]">Heard Island and McDonald Islands</option>
                      <option value="VA" className="bg-[#0f1117]">Holy See (Vatican City State)</option>
                      <option value="HN" className="bg-[#0f1117]">Honduras</option>
                      <option value="HK" className="bg-[#0f1117]">Hong Kong</option>
                      <option value="HU" className="bg-[#0f1117]">Hungary</option>
                      <option value="IS" className="bg-[#0f1117]">Iceland</option>
                      <option value="IN" className="bg-[#0f1117]">India</option>
                      <option value="ID" className="bg-[#0f1117]">Indonesia</option>
                      <option value="IR" className="bg-[#0f1117]">Iran</option>
                      <option value="IQ" className="bg-[#0f1117]">Iraq</option>
                      <option value="IE" className="bg-[#0f1117]">Ireland</option>
                      <option value="IM" className="bg-[#0f1117]">Isle of Man</option>
                      <option value="IL" className="bg-[#0f1117]">Israel</option>
                      <option value="IT" className="bg-[#0f1117]">Italy</option>
                      <option value="JM" className="bg-[#0f1117]">Jamaica</option>
                      <option value="JP" className="bg-[#0f1117]">Japan</option>
                      <option value="JE" className="bg-[#0f1117]">Jersey</option>
                      <option value="JO" className="bg-[#0f1117]">Jordan</option>
                      <option value="KZ" className="bg-[#0f1117]">Kazakhstan</option>
                      <option value="KE" className="bg-[#0f1117]">Kenya</option>
                      <option value="KI" className="bg-[#0f1117]">Kiribati</option>
                      <option value="KP" className="bg-[#0f1117]">Korea, Democratic People's Republic</option>
                      <option value="KR" className="bg-[#0f1117]">Korea, Republic of</option>
                      <option value="KW" className="bg-[#0f1117]">Kuwait</option>
                      <option value="KG" className="bg-[#0f1117]">Kyrgyzstan</option>
                      <option value="LA" className="bg-[#0f1117]">Lao People's Democratic Republic</option>
                      <option value="LV" className="bg-[#0f1117]">Latvia</option>
                      <option value="LB" className="bg-[#0f1117]">Lebanon</option>
                      <option value="LS" className="bg-[#0f1117]">Lesotho</option>
                      <option value="LR" className="bg-[#0f1117]">Liberia</option>
                      <option value="LY" className="bg-[#0f1117]">Libya</option>
                      <option value="LI" className="bg-[#0f1117]">Liechtenstein</option>
                      <option value="LT" className="bg-[#0f1117]">Lithuania</option>
                      <option value="LU" className="bg-[#0f1117]">Luxembourg</option>
                      <option value="MO" className="bg-[#0f1117]">Macao</option>
                      <option value="MK" className="bg-[#0f1117]">Macedonia</option>
                      <option value="MG" className="bg-[#0f1117]">Madagascar</option>
                      <option value="MW" className="bg-[#0f1117]">Malawi</option>
                      <option value="MY" className="bg-[#0f1117]">Malaysia</option>
                      <option value="MV" className="bg-[#0f1117]">Maldives</option>
                      <option value="ML" className="bg-[#0f1117]">Mali</option>
                      <option value="MT" className="bg-[#0f1117]">Malta</option>
                      <option value="MH" className="bg-[#0f1117]">Marshall Islands</option>
                      <option value="MQ" className="bg-[#0f1117]">Martinique</option>
                      <option value="MR" className="bg-[#0f1117]">Mauritania</option>
                      <option value="MU" className="bg-[#0f1117]">Mauritius</option>
                      <option value="YT" className="bg-[#0f1117]">Mayotte</option>
                      <option value="MX" className="bg-[#0f1117]">Mexico</option>
                      <option value="FM" className="bg-[#0f1117]">Micronesia</option>
                      <option value="MD" className="bg-[#0f1117]">Moldova</option>
                      <option value="MC" className="bg-[#0f1117]">Monaco</option>
                      <option value="MN" className="bg-[#0f1117]">Mongolia</option>
                      <option value="ME" className="bg-[#0f1117]">Montenegro</option>
                      <option value="MS" className="bg-[#0f1117]">Montserrat</option>
                      <option value="MA" className="bg-[#0f1117]">Morocco</option>
                      <option value="MZ" className="bg-[#0f1117]">Mozambique</option>
                      <option value="MM" className="bg-[#0f1117]">Myanmar</option>
                      <option value="NA" className="bg-[#0f1117]">Namibia</option>
                      <option value="NR" className="bg-[#0f1117]">Nauru</option>
                      <option value="NP" className="bg-[#0f1117]">Nepal</option>
                      <option value="NL" className="bg-[#0f1117]">Netherlands</option>
                      <option value="AN" className="bg-[#0f1117]">Netherlands Antilles</option>
                      <option value="NC" className="bg-[#0f1117]">New Caledonia</option>
                      <option value="NZ" className="bg-[#0f1117]">New Zealand</option>
                      <option value="NI" className="bg-[#0f1117]">Nicaragua</option>
                      <option value="NE" className="bg-[#0f1117]">Niger</option>
                      <option value="NG" className="bg-[#0f1117]">Nigeria</option>
                      <option value="NU" className="bg-[#0f1117]">Niue</option>
                      <option value="NF" className="bg-[#0f1117]">Norfolk Island</option>
                      <option value="MP" className="bg-[#0f1117]">Northern Mariana Islands</option>
                      <option value="NO" className="bg-[#0f1117]">Norway</option>
                      <option value="OM" className="bg-[#0f1117]">Oman</option>
                      <option value="PK" className="bg-[#0f1117]">Pakistan</option>
                      <option value="PW" className="bg-[#0f1117]">Palau</option>
                      <option value="PS" className="bg-[#0f1117]">Palestine</option>
                      <option value="PA" className="bg-[#0f1117]">Panama</option>
                      <option value="PG" className="bg-[#0f1117]">Papua New Guinea</option>
                      <option value="PY" className="bg-[#0f1117]">Paraguay</option>
                      <option value="PE" className="bg-[#0f1117]">Peru</option>
                      <option value="PH" className="bg-[#0f1117]">Philippines</option>
                      <option value="PN" className="bg-[#0f1117]">Pitcairn</option>
                      <option value="PL" className="bg-[#0f1117]">Poland</option>
                      <option value="PT" className="bg-[#0f1117]">Portugal</option>
                      <option value="PR" className="bg-[#0f1117]">Puerto Rico</option>
                      <option value="QA" className="bg-[#0f1117]">Qatar</option>
                      <option value="RE" className="bg-[#0f1117]">Reunion</option>
                      <option value="RO" className="bg-[#0f1117]">Romania</option>
                      <option value="RU" className="bg-[#0f1117]">Russian Federation</option>
                      <option value="RW" className="bg-[#0f1117]">Rwanda</option>
                      <option value="BL" className="bg-[#0f1117]">Saint Barthelemy</option>
                      <option value="SH" className="bg-[#0f1117]">Saint Helena</option>
                      <option value="KN" className="bg-[#0f1117]">Saint Kitts and Nevis</option>
                      <option value="LC" className="bg-[#0f1117]">Saint Lucia</option>
                      <option value="MF" className="bg-[#0f1117]">Saint Martin</option>
                      <option value="PM" className="bg-[#0f1117]">Saint Pierre and Miquelon</option>
                      <option value="VC" className="bg-[#0f1117]">Saint Vincent and the Grenadines</option>
                      <option value="WS" className="bg-[#0f1117]">Samoa</option>
                      <option value="SM" className="bg-[#0f1117]">San Marino</option>
                      <option value="ST" className="bg-[#0f1117]">Sao Tome and Principe</option>
                      <option value="SA" className="bg-[#0f1117]">Saudi Arabia</option>
                      <option value="SN" className="bg-[#0f1117]">Senegal</option>
                      <option value="RS" className="bg-[#0f1117]">Serbia</option>
                      <option value="SC" className="bg-[#0f1117]">Seychelles</option>
                      <option value="SL" className="bg-[#0f1117]">Sierra Leone</option>
                      <option value="SG" className="bg-[#0f1117]">Singapore</option>
                      <option value="SK" className="bg-[#0f1117]">Slovakia</option>
                      <option value="SI" className="bg-[#0f1117]">Slovenia</option>
                      <option value="SB" className="bg-[#0f1117]">Solomon Islands</option>
                      <option value="SO" className="bg-[#0f1117]">Somalia</option>
                      <option value="ZA" className="bg-[#0f1117]">South Africa</option>
                      <option value="GS" className="bg-[#0f1117]">South Georgia and the South Sandwich Islands</option>
                      <option value="ES" className="bg-[#0f1117]">Spain</option>
                      <option value="LK" className="bg-[#0f1117]">Sri Lanka</option>
                      <option value="SD" className="bg-[#0f1117]">Sudan</option>
                      <option value="SR" className="bg-[#0f1117]">Suriname</option>
                      <option value="SJ" className="bg-[#0f1117]">Svalbard and Jan Mayen</option>
                      <option value="SZ" className="bg-[#0f1117]">Swaziland</option>
                      <option value="SE" className="bg-[#0f1117]">Sweden</option>
                      <option value="CH" className="bg-[#0f1117]">Switzerland</option>
                      <option value="SY" className="bg-[#0f1117]">Syrian Arab Republic</option>
                      <option value="TW" className="bg-[#0f1117]">Taiwan</option>
                      <option value="TJ" className="bg-[#0f1117]">Tajikistan</option>
                      <option value="TZ" className="bg-[#0f1117]">Tanzania</option>
                      <option value="TH" className="bg-[#0f1117]">Thailand</option>
                      <option value="TL" className="bg-[#0f1117]">Timor-Leste</option>
                      <option value="TG" className="bg-[#0f1117]">Togo</option>
                      <option value="TK" className="bg-[#0f1117]">Tokelau</option>
                      <option value="TO" className="bg-[#0f1117]">Tonga</option>
                      <option value="TT" className="bg-[#0f1117]">Trinidad and Tobago</option>
                      <option value="TN" className="bg-[#0f1117]">Tunisia</option>
                      <option value="TR" className="bg-[#0f1117]">Turkey</option>
                      <option value="TM" className="bg-[#0f1117]">Turkmenistan</option>
                      <option value="TC" className="bg-[#0f1117]">Turks and Caicos Islands</option>
                      <option value="TV" className="bg-[#0f1117]">Tuvalu</option>
                      <option value="UG" className="bg-[#0f1117]">Uganda</option>
                      <option value="UA" className="bg-[#0f1117]">Ukraine</option>
                      <option value="AE" className="bg-[#0f1117]">United Arab Emirates</option>
                      <option value="GB" className="bg-[#0f1117]">United Kingdom</option>
                      <option value="US" className="bg-[#0f1117]">United States</option>
                      <option value="UM" className="bg-[#0f1117]">United States Minor Outlying Islands</option>
                      <option value="UY" className="bg-[#0f1117]">Uruguay</option>
                      <option value="UZ" className="bg-[#0f1117]">Uzbekistan</option>
                      <option value="VU" className="bg-[#0f1117]">Vanuatu</option>
                      <option value="VE" className="bg-[#0f1117]">Venezuela</option>
                      <option value="VN" className="bg-[#0f1117]">Vietnam</option>
                      <option value="VG" className="bg-[#0f1117]">Virgin Islands, British</option>
                      <option value="VI" className="bg-[#0f1117]">Virgin Islands, U.S.</option>
                      <option value="WF" className="bg-[#0f1117]">Wallis and Futuna</option>
                      <option value="EH" className="bg-[#0f1117]">Western Sahara</option>
                      <option value="YE" className="bg-[#0f1117]">Yemen</option>
                      <option value="ZM" className="bg-[#0f1117]">Zambia</option>
                      <option value="ZW" className="bg-[#0f1117]">Zimbabwe</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="grid md:grid-cols-2 gap-6">
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
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/40 group-focus-within:text-[#fbbf24] transition-colors" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/50 transition-all placeholder:text-white/30"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center transition-opacity"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-white/40 hover:text-white/60" />
                    ) : (
                      <Eye className="h-5 w-5 text-white/40 hover:text-white/60" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="h-4 w-4 rounded-md border-white/10 bg-white/5 text-[#fbbf24] focus:ring-[#fbbf24]/50 focus:ring-offset-0 focus:ring-offset-transparent"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-white/60">
                  Subscribe to our newsletter
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded-md border-white/10 bg-white/5 text-[#fbbf24] focus:ring-[#fbbf24]/50 focus:ring-offset-0 focus:ring-offset-transparent"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white/60">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-semibold py-4 rounded-xl transition-all hover:opacity-90 disabled:opacity-50"
            >
              <span className={`${isLoading ? 'invisible' : ''}`}>
                Create Account
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              )}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-10 transition-opacity"></div>
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-white/60">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors font-medium"
              >
                Sign in →
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