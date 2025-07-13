import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Mobile Layout - Overlay Design */}
      <div className="lg:hidden min-h-screen relative">
        {/* Background Image - Full Screen */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto">
            {/* Mobile Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-5 h-5 bg-white rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Paradise Golf</h1>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-sm text-gray-600">Sign in to your admin account</p>
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm"
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
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm"
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
                    id="remember-mobile"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label htmlFor="remember-mobile" className="ml-2 text-sm text-gray-700">
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
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition-colors text-sm"
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

      {/* Desktop Layout - Original Split Design */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Golf course image */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Golf Course"
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
                <label htmlFor="email-desktop" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email-desktop"
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
                <label htmlFor="password-desktop" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password-desktop"
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
                    id="remember-desktop"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <label htmlFor="remember-desktop" className="ml-2 text-sm text-gray-700">
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
    </div>
  );
}
