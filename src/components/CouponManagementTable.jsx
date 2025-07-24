import React, { useState } from 'react';
import { Search, Eye, Edit, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CouponManagementTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('All Seasons');
  const [courseFilter, setCourseFilter] = useState('All Courses');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const itemsPerPage = 5;

  // Dummy data
  const allCoupons = [
    {
      id: '#CPN-2024-001',
      type: 'Free Round',
      typeColor: 'bg-blue-100 text-blue-800',
      plan: 'Summer Single',
      course: 'Paradise Valley',
      member: 'John Smith',
      email: 'john@email.com',
      validity: 'Dec 31, 2024',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CPN-2024-002',
      type: '50% Off Cart',
      typeColor: 'bg-purple-100 text-purple-800',
      plan: 'Summer Family',
      course: 'Sunset Hills',
      member: 'Sarah Johnson',
      email: 'sarah@email.com',
      validity: 'Nov 30, 2024',
      status: 'Used',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: '#CPN-2024-003',
      type: '20% Off Pro Shop',
      typeColor: 'bg-green-100 text-green-800',
      plan: 'Annual Single',
      course: 'Green Meadows',
      member: 'Mike Davis',
      email: 'mike@email.com',
      validity: 'Dec 31, 2024',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CPN-2024-004',
      type: 'Free Lesson',
      typeColor: 'bg-yellow-100 text-yellow-800',
      plan: 'Summer Family',
      course: 'Paradise Valley',
      member: 'Lisa Chen',
      email: 'lisa@email.com',
      validity: 'Oct 15, 2024',
      status: 'Expired',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: '#CPN-2024-005',
      type: 'Free Round',
      typeColor: 'bg-blue-100 text-blue-800',
      plan: 'Winter Single',
      course: 'Mountain View',
      member: 'David Brown',
      email: 'david@email.com',
      validity: 'Jan 31, 2025',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CPN-2024-006',
      type: '30% Off Cart',
      typeColor: 'bg-purple-100 text-purple-800',
      plan: 'Annual Family',
      course: 'Sunset Hills',
      member: 'Emma Wilson',
      email: 'emma@email.com',
      validity: 'Dec 15, 2024',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CPN-2024-007',
      type: 'Free Lesson',
      typeColor: 'bg-yellow-100 text-yellow-800',
      plan: 'Summer Single',
      course: 'Green Meadows',
      member: 'Tom Anderson',
      email: 'tom@email.com',
      validity: 'Sep 30, 2024',
      status: 'Expired',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: '#CPN-2024-008',
      type: '40% Off Pro Shop',
      typeColor: 'bg-green-100 text-green-800',
      plan: 'Winter Family',
      course: 'Paradise Valley',
      member: 'Rachel Green',
      email: 'rachel@email.com',
      validity: 'Feb 28, 2025',
      status: 'Used',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: '#CPN-2024-009',
      type: 'Free Round',
      typeColor: 'bg-blue-100 text-blue-800',
      plan: 'Annual Single',
      course: 'Mountain View',
      member: 'Kevin Lee',
      email: 'kevin@email.com',
      validity: 'Mar 31, 2025',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CPN-2024-010',
      type: '25% Off Cart',
      typeColor: 'bg-purple-100 text-purple-800',
      plan: 'Summer Family',
      course: 'Sunset Hills',
      member: 'Amy Taylor',
      email: 'amy@email.com',
      validity: 'Nov 15, 2024',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  // Filter coupons based on search and filters
  const filteredCoupons = allCoupons.filter(coupon => {
    const matchesSearch = coupon.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSeason = seasonFilter === 'All Seasons' || coupon.plan.includes(seasonFilter);
    const matchesCourse = courseFilter === 'All Courses' || coupon.course === courseFilter;
    const matchesStatus = statusFilter === 'All Status' || coupon.status === statusFilter;

    return matchesSearch && matchesSeason && matchesCourse && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCoupons = filteredCoupons.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ActionButton = ({ icon: Icon, className, onClick }) => (
    <button
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
      onClick={onClick}
    >
      <Icon size={16} />
    </button>
  );

  return (
    <div className="w-full bg-white">
      {/* Search and Filter Section */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search coupons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base"
            />
          </div>

          {/* Filter Dropdowns - Horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <select
              value={seasonFilter}
              onChange={(e) => setSeasonFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm whitespace-nowrap flex-shrink-0"
            >
              <option>All Seasons</option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Annual</option>
            </select>

            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm whitespace-nowrap flex-shrink-0"
            >
              <option>All Courses</option>
              <option>Paradise Valley</option>
              <option>Sunset Hills</option>
              <option>Green Meadows</option>
              <option>Mountain View</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm whitespace-nowrap flex-shrink-0"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Used</option>
              <option>Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-32">Coupon ID</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-32">Type</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-28">Plan</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-32 hidden sm:table-cell">Course</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-40 hidden md:table-cell">Member</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-28 hidden lg:table-cell">Validity</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-24">Status</th>
              <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-medium text-gray-700 min-w-24">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCoupons.map((coupon, index) => (
              <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-3 sm:py-4 sm:px-6">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{coupon.id}</div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {coupon.type === 'Free Round' && 'Free Round'}
                      {coupon.type.includes('Cart') && 'Cart Discount'}
                      {coupon.type.includes('Pro Shop') && 'Pro Shop Discount'}
                      {coupon.type === 'Free Lesson' && 'Lesson Credit'}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-6">
                  <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${coupon.typeColor} whitespace-nowrap`}>
                    {coupon.type}
                  </span>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-6">
                  <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">{coupon.plan}</span>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 text-xs sm:text-sm hidden sm:table-cell">{coupon.course}</td>
                <td className="py-3 px-3 sm:py-4 sm:px-6 hidden md:table-cell">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{coupon.member}</div>
                    <div className="text-xs text-gray-500">{coupon.email}</div>
                  </div>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 text-xs sm:text-sm hidden lg:table-cell whitespace-nowrap">{coupon.validity}</td>
                <td className="py-3 px-3 sm:py-4 sm:px-6">
                  <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${coupon.statusColor} whitespace-nowrap`}>
                    {coupon.status}
                  </span>
                </td>
                <td className="py-3 px-3 sm:py-4 sm:px-6">
                  <div className="flex space-x-1">
                    <ActionButton icon={Eye} className="text-blue-600 hover:text-blue-800" />
                    <ActionButton icon={Edit} className="text-gray-600 hover:text-gray-800" />
                    <ActionButton icon={X} className="text-red-600 hover:text-red-800" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-t border-gray-200 gap-4">
        <div className="text-xs sm:text-sm text-gray-700 order-2 sm:order-1">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredCoupons.length)} of {filteredCoupons.length} results
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={14} />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium ${currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponManagementTable;
