import React, { useState } from 'react';
import {
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Crown,
  Tag,
  MapPin,
  RotateCcw,
  Bell,
  Settings
} from 'lucide-react';

const MembershipDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All Plans');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);

  const members = [
    {
      id: 'PG001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      plan: 'Premium',
      status: 'Active',
      joinDate: 'Jan 15, 2024',
      avatar: '👨‍💼'
    },
    {
      id: 'PG002',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      plan: 'Standard',
      status: 'Active',
      joinDate: 'Feb 03, 2024',
      avatar: '👩‍💼'
    },
    {
      id: 'PG003',
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      plan: 'Basic',
      status: 'Expired',
      joinDate: 'Dec 20, 2023',
      avatar: '👨‍🦲'
    },
    {
      id: 'PG004',
      name: 'Emily Wilson',
      email: 'emily.wilson@email.com',
      plan: 'Premium',
      status: 'Pending',
      joinDate: 'Mar 10, 2024',
      avatar: '👩‍🦰'
    },
    {
      id: 'PG005',
      name: 'David Brown',
      email: 'david.brown@email.com',
      plan: 'Standard',
      status: 'Active',
      joinDate: 'Mar 15, 2024',
      avatar: '👨‍🎓'
    }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Users, label: 'Members', active: true },
    { icon: Crown, label: 'Membership Plans', active: false },
    { icon: Tag, label: 'Coupons', active: false },
    { icon: MapPin, label: 'Golf Courses', active: false },
    { icon: RotateCcw, label: 'Redemption Logs', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  const getPlanBadgeColor = (plan) => {
    switch (plan) {
      case 'Premium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Standard':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Basic':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expired':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = selectedPlan === 'All Plans' || member.plan === selectedPlan;
    const matchesStatus = selectedStatus === 'All Status' || member.status === selectedStatus;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-6 py-3 text-sm font-medium cursor-pointer transition-colors ${item.active
                  ? 'bg-green-50 text-green-700 border-r-2 border-green-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                >
                  <option>All Plans</option>
                  <option>Premium</option>
                  <option>Standard</option>
                  <option>Basic</option>
                </select>

                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Expired</option>
                </select>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add Member</span>
            </button>
          </div>
        </div>

        {/* Members Table */}
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Member</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Member ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Plan Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Join Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={member.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-mono">#{member.id}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPlanBadgeColor(member.plan)}`}>
                        {member.plan}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadgeColor(member.status)}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{member.joinDate}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-700">
              Showing 1 to 5 of 2,847 members
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="px-3 py-1 bg-green-600 text-white rounded font-medium">
                1
              </button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                2
              </button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                3
              </button>
              <span className="text-gray-400">...</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                570
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDashboard;
