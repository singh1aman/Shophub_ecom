import { X } from "lucide-react";
const ActiveFilters = ({activeFiltersData,handleActiveFilterClick,handleClearAllClick,formatActiveFilterValue,setActiveFilter}) => {
    return(
       <div className="active-filters flex flex-wrap items-center gap-2 pt-4 mt-4 border-t">
          <span className="text-sm font-medium text-gray-700">Active Filters:</span>
          <div className="active-filter-chips flex flex-wrap gap-2">
            {activeFiltersData.map((filter, i) => (
              <button
                key={`${filter.type}-${i}`}
                className="active-filter-chip inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors"
                onClick={() => handleActiveFilterClick(setActiveFilter, filter)}
              >
                {formatActiveFilterValue(filter)}
                <X size={14} />
              </button>
            ))}
            <button
              onClick={() => handleClearAllClick(setActiveFilter)}
              className="text-sm font-medium text-gray-600 hover:text-black underline ml-2"
            >
              Clear All
            </button>
          </div>
        </div>
    );
}
export default ActiveFilters;