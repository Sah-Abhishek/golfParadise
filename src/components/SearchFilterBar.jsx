import { ChevronDown, Plus, Search } from "lucide-react";

const SearchFilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedPlan,
  setSelectedPlan,
  selectedStatus,
  setSelectedStatus,
  onAddMember
}) => {
  return (
    <div className="bg-white px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">

            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-80 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <select
                className="appearance-none px-4 py-2.5 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                <option>All Plans</option>
                <option>Premium</option>
                <option>Standard</option>
                <option>Basic</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                className="appearance-none px-4 py-2.5 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Expired</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <button
          onClick={onAddMember}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </div>
    </div>
  );

}


export default SearchFilterBar;
