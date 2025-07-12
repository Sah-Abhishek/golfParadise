import React, { useState } from 'react';
import { X, User, Plus, Mail, Calendar, Shield, UserCheck } from 'lucide-react';

const AddMemberModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000) + 1,
    name: '',
    email: '',
    plan: '',
    status: '',
    joinDate: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.plan) {
      newErrors.plan = 'Plan type is required';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    }

    if (!formData.joinDate) {
      newErrors.joinDate = 'Join date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      plan: '',
      status: '',
      joinDate: new Date().toISOString().split('T')[0]
    });
    setErrors({});
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className=" fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 scale-100 border border-gray-100">
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-6 rounded-t-2xl">
          <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] rounded-t-2xl`}></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-1">Add New Member</h2>
            <p className="text-emerald-100 text-sm">Create a new golf club membership</p>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          {/* Profile Picture Section */}
          <div className="text-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <User size={40} className="text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Plus size={16} className="text-white" />
              </div>
            </div>
            <p className="text-xs text-gray-400 font-medium">Profile picture placeholder</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name *
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-0 bg-gray-50/50 ${errors.name
                    ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                    : 'border-gray-200 focus:border-emerald-500 focus:bg-white group-focus-within:bg-white'
                    }`}
                  placeholder="Enter member's full name"
                />
              </div>
              {errors.name && <p className="mt-2 text-xs text-red-500 font-medium">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address *
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-0 bg-gray-50/50 ${errors.email
                    ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                    : 'border-gray-200 focus:border-emerald-500 focus:bg-white group-focus-within:bg-white'
                    }`}
                  placeholder="Enter email address"
                />
              </div>
              {errors.email && <p className="mt-2 text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>

            {/* Plan Type and Status Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label htmlFor="plan" className="block text-sm font-semibold text-gray-700 mb-3">
                  Plan Type *
                </label>
                <div className="relative">
                  <Shield size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-0 bg-gray-50/50 appearance-none cursor-pointer ${errors.planType
                      ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                      : 'border-gray-200 focus:border-emerald-500 focus:bg-white group-focus-within:bg-white'
                      }`}
                  >
                    <option value="">Select plan</option>
                    <option value="Premium">Premium</option>
                    <option value="Standard">Standard</option>
                    <option value="Basic">Basic</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.plan && <p className="mt-2 text-xs text-red-500 font-medium">{errors.planType}</p>}
              </div>

              <div className="group">
                <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-3">
                  Status *
                </label>
                <div className="relative">
                  <UserCheck size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-0 bg-gray-50/50 appearance-none cursor-pointer ${errors.status
                      ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                      : 'border-gray-200 focus:border-emerald-500 focus:bg-white group-focus-within:bg-white'
                      }`}
                  >
                    <option value="">Select status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Expired">Expired</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.status && <p className="mt-2 text-xs text-red-500 font-medium">{errors.status}</p>}
              </div>
            </div>

            {/* Join Date Field */}
            <div className="group">
              <label htmlFor="joinDate" className="block text-sm font-semibold text-gray-700 mb-3">
                Join Date *
              </label>
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="date"
                  id="joinDate"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-0 bg-gray-50/50 ${errors.joinDate
                    ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                    : 'border-gray-200 focus:border-emerald-500 focus:bg-white group-focus-within:bg-white'
                    }`}
                />
              </div>
              {errors.joinDate && <p className="mt-2 text-xs text-red-500 font-medium">{errors.joinDate}</p>}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-2xl border-t border-gray-200/50">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 hover:shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Member
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AddMemberModal;
