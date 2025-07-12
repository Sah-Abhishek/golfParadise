import placeholderProfile from '../assets/placeholder-profile.png';
import { Edit, Eye, Trash2 } from "lucide-react";

const MemberRow = ({ member }) => {
  const getPlanBadgeColor = (plan) => {
    switch (plan) {
      case 'Premium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Standard':
        return 'bg-blue-100 text-blue-800';
      case 'Basic':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center space-x-3">
          <img
            src={member.avatar || placeholderProfile}
            alt={member.name}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderProfile;
            }}
          />
          <div>
            <div className="font-medium text-gray-900">{member.name}</div>
            <div className="text-sm text-gray-500">{member.email}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className="text-gray-600 font-mono text-sm">#{member.id}</span>
      </td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPlanBadgeColor(member.plan)}`}>
          {member.plan}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(member.status)}`}>
          {member.status}
        </span>
      </td>
      <td className="py-4 px-6 text-gray-600 text-sm">{member.joinDate}</td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-1">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};


export default MemberRow;
