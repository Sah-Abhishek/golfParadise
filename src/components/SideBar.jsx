import { BarChart3, Bell, Crown, MapPin, RotateCcw, Settings, Tag, Users, Menu } from "lucide-react";
import Logo from "./LogoComponent";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

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

  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      <div className="flex items-center justify-between px-4 py-3">
        {!collapsed && <Logo />}
        <button
          className="ml-auto p-2 rounded hover:bg-gray-100"
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 py-4">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${collapsed ? "justify-center" : ""} px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-200 ${item.active
              ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            <item.icon className={`w-5 h-5 ${!collapsed ? "mr-3" : ""}`} />
            {!collapsed && item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;