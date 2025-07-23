
const CouponModal = ({ onClose, onSelectCoupon, selectedCoupon, setSelectedCoupon }) => {
  const couponTypes = ["Flat", "Fixed", "Percentage"];

  const handleSelect = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const handleSubmit = () => {
    if (selectedCoupon) {
      onSelectCoupon(selectedCoupon);
      onClose();
    } else {
      alert("Please select a coupon!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Translucent Background Overlay */}
      <div
        className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 ">Select Coupon Type</h2>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 absolute top-4 right-4"
          >
            <span className="text-xl font-semibold">&times;</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Coupon Selection Options */}
          <div className="space-y-4">
            {couponTypes.map((coupon) => (
              <div
                key={coupon}
                onClick={() => handleSelect(coupon)}
                className={`p-4 border rounded-lg cursor-pointer hover:bg-green-50 transition duration-200 
                  ${selectedCoupon === coupon ? 'bg-green-100 border-green-600' : 'border-gray-300'}`}
              >
                <h3 className="font-medium text-gray-800">{coupon}</h3>
                <p className="text-sm text-gray-600">
                  {coupon === "Flat" ? "A flat amount off your purchase" :
                    coupon === "Fixed" ? "A fixed discount value" :
                      "A percentage off your purchase"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
