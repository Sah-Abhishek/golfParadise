import {
  BarChart3,
  Bell,
  Crown,
  MapPin,
  RotateCcw,
  Settings,
  Tag,
  Users,
  Menu,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./LogoComponent"; // Optional

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Members", path: "/members" },
    { icon: Crown, label: "Membership Plans", path: "/plans" },
    { icon: Tag, label: "Coupons", path: "/coupons" },
    { icon: MapPin, label: "Golf Courses", path: "/courses" },
    { icon: RotateCcw, label: "Redemption Logs", path: "/logs" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-64"
        }`}
    >
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
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center ${collapsed ? "justify-center" : ""
                } px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-200 ${isActive
                  ? "bg-green-50 text-green-700 border-r-2 border-green-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <item.icon className={`w-5 h-5 ${!collapsed ? "mr-3" : ""}`} />
              {!collapsed && item.label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
