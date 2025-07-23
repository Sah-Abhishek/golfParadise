import { Plus } from "lucide-react";
import { useState } from "react";

const QuickActionSection = ({ onModalOpen, selectedCoupon }) => {
  const [selectedTypes, setSelectedType] = useState('');
  const couponTypes = [
    "Flat", "Fixed Price", "Percentage"
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
      <button onClick={onModalOpen} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2">
        {/* <Plus className="w-4 h-4 " /> */}
        {selectedCoupon ? <span>{selectedCoupon}</span> : <span>Select</span>}
      </button>
    </div>
  )
}

export default QuickActionSection;
