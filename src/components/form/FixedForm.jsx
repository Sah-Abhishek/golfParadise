
import { useState } from "react";

export default function FixedForm() {
  const [step, setStep] = useState(0);

  const steps = [
    <StepOne key="1" />,
    <StepTwo key="2" />,
    <StepThree key="3" />,
    <StepFour key="4" />,
    <StepFive key="5" />,
  ];

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-lg p-6 mt-8 shadow-sm border border-gray-200">
      <div className="mb-6">
        <ProgressIndicator step={step} total={steps.length} />
      </div>

      <div className="mb-6">{steps[step]}</div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          hidden={step === steps.length - 1}
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          Next
        </button>
        {step === steps.length - 1 && (
          <div>
            <button
              className="w-full bg-green-600 text-white font-semibold px-4 py-3 rounded-xl shadow-md hover:bg-green-700 transition duration-200"
            >
              Generate Coupon
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressIndicator({ step, total }) {
  return (
    <div className="flex justify-between">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`w-full h-2 mx-1 rounded ${i <= step ? "bg-blue-600" : "bg-gray-200"
            }`}
        ></div>
      ))}
    </div>
  );
}

function StepOne() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Coupon Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coupon Name */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Coupon Name
          </label>
          <input
            type="text"
            placeholder="e.g., Summer Savings"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Coupon Description */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Coupon Description
          </label>
          <textarea
            placeholder="e.g., $10 off for new members"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function StepTwo() {
  const [selectedTarget, setSelectedTarget] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMembership, setSelectedMembership] = useState("");
  const [selectedProShopItem, setSelectedProShopItem] = useState("");
  const [selectedTeeTime, setSelectedTeeTime] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const teeTimeRestrictions = [
    "-- No Specific Restriction --",
    "Weekday Tee Times",
    "Weekend Tee Times",
    "Morning Tee Times (before 12 PM)",
    "Twilight Tee Times (after 3 PM)"
  ];
  const membershipTypes = [
    "-- Any Membership Type --",
    "Summer Membership",
    "Winter Membership",
    "Year-Around Membership",
    "Bronze Membership",
    "Silver Membership",
    "Gold Membership"
  ];
  const proShopCategories = [
    "-- All Pro Shop Items --",
    "Apparel",
    "Golf Clubs",
    "Balls & Accessories"
  ];
  const discountOptions = [
    "Membership Card",
    "Tee Times Coupon (Course Specific)",
    "Any Tournament Entry Pass",
    "Specific Tournament Entry Pass",
    "Pro Shop Items",
  ];
  const golfCourses = [
    "-- Select a Course --",
    "Babe Zaharias GC",
    "Bardmoor GC",
    "Black Diamond Ranch",
    "Bloomingdale GC",
    "Brooksville C.C.",
    "Candler Hills",
    "Canyon Lake Golf Club",
    "Chi Chi Rodriguez GC",
    "Citrus Springs Golf & CC",
    "Cove Cay CC",
    "Crescent Oaks GC",
    "Cypress Creek",
    "Dunes Golf Club (The Villages)",
    "Dunedin GC",
    "Eagles Golf Forest/Lakes",
    "Fox Hollow GC",
    "Golden Ocala",
    "Heritage Harbor GC",
    "Heritage Isles GC",
    "Juliette Falls",
    "Lake Jovita G&CC",
    "Lansbrook GC",
    "Links of Lake Bernadette",
    "Northdale Golf",
    "Ocala Golf Club",
    "Plantation Golf Club",
    "Plantation Palms GC",
    "Rocky Point GC",
    "Rogers Park GC",
    "Saddlebrook Resort",
    "Seminole Lake CC",
    "SilverDollar GC",
    "Stoneybrook Golf Club (Sarasota)",
    "Summerfield Golf & CC",
    "Tara Golf & CC",
    "Tarpon Springs GC",
    "Tarpon Woods GC",
    "Temple Terrace Golf & CC",
    "The Groves G&CC",
    "Timber Greens GC",
    "TPC Tampa Bay",
    "Wentworth GC",
    "Westchase GC"
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Key Primary Characteristics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Flat Discount Amount */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Discount Percentage (%)
          </label>
          <input
            type="number"
            placeholder="e.g., 10.00"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Minimum Purchase Value */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Minimum Purchase Value ($)
          </label>
          <input
            type="number"
            placeholder="e.g., 50.00"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Minimum Quantity */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Maximum Discount Value ($)
          </label>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Discount Applied On Product */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Discount Applied On Product
          </label>
          <div className="grid grid-cols-2 gap-2 text-lg text-gray-800">
            {discountOptions.map((option, index) => (
              <label
                key={index}
                className={`flex items-center gap-2 ${option === "Pro Shop Items" ? "col-span-2" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="discountTarget"
                  value={option}
                  checked={selectedTarget === option}
                  onChange={(e) => setSelectedTarget(e.target.value)}
                  className="accent-blue-600"
                />
                {option}
              </label>
            ))}
          </div>

          {/* Conditional Dropdown Rendering */}
          {/* {selectedTarget === "Membership Card" && ( */}
          {/*   <div className="max-w-sm mt-4"> */}
          {/*     <label className="block text-lg font-medium text-gray-700 mb-2"> */}
          {/*       Specific Membership Type */}
          {/*     </label> */}
          {/*     <select */}
          {/*       value={selectedMembership} */}
          {/*       onChange={(e) => setSelectedMembership(e.target.value)} */}
          {/*       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" */}
          {/*     > */}
          {/*       {membershipTypes.map((type, index) => ( */}
          {/*         <option key={index} value={type === "-- Any Membership Type --" ? "" : type}> */}
          {/*           {type} */}
          {/*         </option> */}
          {/*       ))} */}
          {/*     </select> */}
          {/*   </div> */}
          {/* )} */}
          {selectedTarget === "Pro Shop Items" && (
            <div className="max-w-sm mt-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Specific Pro Shop Category
              </label>
              <select
                value={selectedProShopItem}
                onChange={(e) => setSelectedProShopItem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {proShopCategories.map((category, index) => (
                  <option key={index} value={category === "-- All Pro Shop Items --" ? "" : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedTarget === "Tee Times Coupon (Course Specific)" && (
            <div>
              <div className="max-w-sm mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Select Golf Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {golfCourses.map((course, index) => (
                    <option
                      key={index}
                      value={course === "-- Select a Course --" ? "" : course}
                    >
                      {course}
                    </option>
                  ))}
                </select>
              </div>
              <div className="max-w-sm mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Tee Time Restriction
                </label>
                <select
                  value={selectedTeeTime}
                  onChange={(e) => setSelectedTeeTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {teeTimeRestrictions.map((restriction, index) => (
                    <option
                      key={index}
                      value={restriction === "-- No Specific Restriction --" ? "" : restriction}
                    >
                      {restriction}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Time/Season/Event Restriction */}
        <div className="flex flex-col col-span-2">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Time/Season/Event Restriction (Descriptive)
          </label>
          <input
            type="text"
            placeholder="e.g., Off-peak Tee Times, Fall Membership Drive"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div >
  );
}

function StepThree() {
  const targetAudience = [
    "All Golfers",
    "New Golfers",
    "Existing Golfers",
    "Gold Tier",
    "Silver Tier",
    "Paradise Card Members",
    "Non Paradise Members",
    "Referral Program Participants",
    "Dormant Members",
    "Tournament Participants",
    "Local Residents",
    "Birthday/Anniversary",
  ];
  return (

    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Usage Limits & Audience
      </h2>

      {/* Limits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Total Redemption Limit */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Total Redemption Limit (0 for Unlimited)
          </label>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Per-User Redemption Limit */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">
            Per-User Redemption Limit (0 for Unlimited)
          </label>
          <input
            type="number"
            min={0}
            defaultValue={0}
            className="w-full px-5 py-3 border border-gray-200 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Target Audience */}
      <div>
        <label className="text-lg font-semibold text-gray-800 mb-4 block">
          Target Audience
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-lg text-gray-800">
          {targetAudience.map((label, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-600 w-5 h-5"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
function StepFour() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Channel & Auto-Apply
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Valid Channels */}
        <div className="md:col-span-2">
          <label className="text-lg font-semibold text-gray-800 mb-4 block">
            Valid Channels
          </label>
          <div className="flex flex-wrap gap-6 text-lg text-gray-800">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600 w-5 h-5" />
              Online/In-App
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600 w-5 h-5" />
              POS
            </label>
          </div>
        </div>

        {/* Application Rules Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <label className="text-lg font-semibold text-gray-800 mb-3 block">
            Application Rules
          </label>
          <div className="flex flex-col gap-3 text-lg text-gray-800">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600 w-5 h-5" />
              Auto-Apply Eligible
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600 w-5 h-5" />
              Stackable with other offers
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600 w-5 h-5" />
              Full-Price Items Only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
function StepFive() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Secondary Characteristics (Terms & Conditions)
      </h2>

      {/* Date Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Activation Date
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Valid From
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Valid Until
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
          />
        </div>
      </div>

      {/* Exclusions Free Text */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-800 mb-2">
          Exclusions (Free Text)
        </label>
        <textarea
          rows={3}
          placeholder="e.g., Not valid on holidays"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg resize-none"
        ></textarea>
      </div>

      {/* Specific Excluded Categories */}
      <div>
        <label className="block text-lg font-semibold text-gray-800 mb-4">
          Specific Excluded Categories
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-800">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Gift Cards
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Already Discounted Items
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Specific Courses
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Specific Membership Types
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Tournament Entry Passes
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
            Pro Shop Items
          </label>
        </div>
      </div>
    </div>
  );
}
