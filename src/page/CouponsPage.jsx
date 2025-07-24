import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import StatsCard from "../components/StatsCard";
import { FaCheckCircle, FaGift, FaTicketAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import QuickActionSection from "../components/QuickActionsSection";
import CouponModal from "../components/CouponModal";
import CouponManagementTable from "../components/CouponManagementTable"; // Import the new component
import { useState } from "react";
import FlatForm from "../components/form/PercentageForm";
import PercentageForm from "../components/form/PercentageForm";
import FixedForm from "../components/form/FixedForm";

const CouponsPage = () => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const onModalClose = () => {
    setIsCouponModalOpen(false);
  }

  const onModalOpen = () => {
    console.log("The modal should be open by now");
    setIsCouponModalOpen(true);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header heading={"Coupons Manager"} subHeading={"Manage digital coupons and redemptions"} />

        {/* Stats Section */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Coupons"
              value="1,247"
              icon=<FaTicketAlt className="text-blue-600" />
              iconBg="bg-blue-100"
            />
            <StatsCard
              title="Active Coupons"
              value="892"
              icon=<FaCheckCircle className="text-green-600" />
              iconBg="bg-green-100"
            />
            <StatsCard
              title="Redeemed Today"
              value="47"
              icon=<FaGift className="text-purple-600" />
              iconBg="bg-purple-100"
            />
            <StatsCard
              title="Value Redeemed"
              value="$2,340"
              icon=<FaDollarSign className="text-green-700" />
              iconBg="bg-green-100"
            />
          </div>

          {/* Quick Actions */}
          <QuickActionSection onModalOpen={onModalOpen} selectedCoupon={selectedCoupon} />
          {selectedCoupon === 'Flat' && <FlatForm />}
          {selectedCoupon === 'Percentage' && <PercentageForm />}
          {selectedCoupon === 'Fixed' && <FixedForm />}

          {/* Coupons Management Table */}
          <div className="mt-8">
            <CouponManagementTable />
          </div>
        </div>
      </div>

      {isCouponModalOpen && (
        <CouponModal
          onClose={() => setIsCouponModalOpen(false)}
          isCouponModalOpen={isCouponModalOpen}
          setIsCouponModalOpen={setIsCouponModalOpen}
          setSelectedCoupon={setSelectedCoupon}
          onSelectCoupon={(coupon) => console.log("Selected:", coupon)}
          selectedCoupon={selectedCoupon}
        />
      )}
    </div>
  )
}

export default CouponsPage;
