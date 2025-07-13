import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import backgroundGolf from "../assets/background-2.avif"
import { useNavigate } from 'react-router-dom';

export default function ParadiseGolfLogin() {
  const [email, setEmail] = useState('admin@paradisegolf.com');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    let valid = true;
    if (!password || password.trim() === '') {
      setPasswordErrorMsg('Password cannot be empty');
      valid = false;
    } else {
      setPasswordErrorMsg('');
    }
    if (!email || email.trim() === '') {
      setEmailErrorMsg('Email cannot be empty');
      valid = false;
    } else {
      setEmailErrorMsg('');
    }
    if (!valid) return;
    console.log('Login attempt:', { email, password, rememberMe });
    navigate('/members');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Golf course image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src={backgroundGolf} alt="Golf Course"
          className="w-full h-full object-cover"
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-12 text-white">
          <div className="max-w-md text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold">Paradise Golf</h1>
            </div>

            <h2 className="text-xl font-semibold mb-4">Admin Management Portal</h2>
            <p className="text-lg opacity-90">
              Manage memberships, coupons, and golf course partnerships with our comprehensive admin dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your admin account</p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="admin@paradisegolf.com"
                  required
                />
              </div>
              {emailErrorMsg && (
                <p className="text-sm text-red-600 mt-1">{emailErrorMsg}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordErrorMsg && (
                <p className="text-sm text-red-600 mt-1">{passwordErrorMsg}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition-colors"
            >
              Sign In
            </button>

            {/* Create Account Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">Need admin access? </span>
              <button
                type="button"
                className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Create Admin Account
              </button>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure Admin Access Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
