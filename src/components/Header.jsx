import { Bell } from "lucide-react";

const Header = ({ onAddMember }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Members Management</h1>
        <p className="text-gray-600 mt-1">Manage all golf club members</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          <Bell className="w-6 h-6 text-gray-600" />
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">👨‍💼</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
