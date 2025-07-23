
import { FaTicketAlt, FaCheckCircle, FaGift, FaDollarSign } from "react-icons/fa";

const stats = [
  {
    title: "Total Coupons",
    value: "1,247",
    Icon: <FaTicketAlt className="text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Active Coupons",
    value: "892",
    Icon: <FaCheckCircle className="text-green-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Redeemed Today",
    value: "47",
    Icon: <FaGift className="text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Value Redeemed",
    value: "$2,340",
    Icon: <FaDollarSign className="text-green-700" />,
    iconBg: "bg-green-100",
  },
];

export default function CouponStats() {
  return (
    <div className="flex flex-wrap gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-white shadow-sm rounded-xl px-6 py-4 w-64"
        >
          <div>
            <div className="text-sm text-gray-500 font-medium">{stat.title}</div>
            <div className="text-2xl font-semibold text-gray-800">{stat.value}</div>
          </div>
          <div className={`ml-4 p-2 rounded-lg ${stat.iconBg}`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
