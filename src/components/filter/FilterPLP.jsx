
import { 
     categoriesByType,
     prices,
     priceLabels,
     ratings,
     ratingLabels,
     specialFilters
 } from './FilterConstants'

import { 
    toggleCategory,
    togglePrice,
    toggleRating,
    toggleSpecialFilter,
    buildActiveFiltersData,
    formatActiveFilterValue,
    handleActiveFilterClick,
    handleClearAllClick
} from './FilterHelpers'

import FilterChips from "./FilterChips";
import ActiveFilters from "./ActiveFilters";



// Main filter component
const FilterPLP = ({ productCategory, activeFilter, setActiveFilter }) => {
  const categories = categoriesByType[productCategory] || [];

  const isAnyFilterSelected =
    activeFilter.category.length > 0 ||
    activeFilter.price !== null ||
    activeFilter.rating !== null ||
    activeFilter.tags.length > 0;

  const activeFiltersData = buildActiveFiltersData(activeFilter);

  const filterSections = [
    {
      label: "Category",
      items: categories,
      isActive: (v) => activeFilter.category.includes(v),
      onClick: (v) => toggleCategory(setActiveFilter, v),
      formatter: null,
    },
    {
      label: "Price",
      items: prices,
      isActive: (v) => activeFilter.price === v,
      onClick: (v) => togglePrice(setActiveFilter, v),
      formatter: priceLabels,
    },
    {
      label: "Rating",
      items: ratings,
      isActive: (v) => activeFilter.rating === v,
      onClick: (v) => toggleRating(setActiveFilter, v),
      formatter: ratingLabels,
    },
    {
      label: "Special",
      items: specialFilters,
      isActive: (v) => activeFilter.tags.includes(v),
      onClick: (v) => toggleSpecialFilter(setActiveFilter, v),
      formatter: null,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
      <div className="filter-chips-container space-y-4">
        {filterSections.map((filterSection) => (
          <FilterChips
            key={filterSection.label}
            label={filterSection.label}
            items={filterSection.items}
            isActive={filterSection.isActive}
            onClick={filterSection.onClick}
            formatter={filterSection.formatter}
          />
        ))}
      </div>

      {isAnyFilterSelected && (
       <ActiveFilters
         activeFiltersData={activeFiltersData}
         handleActiveFilterClick={handleActiveFilterClick}
         handleClearAllClick={handleClearAllClick}
         formatActiveFilterValue={formatActiveFilterValue}
         setActiveFilter={setActiveFilter}
        /> 
      )}
    </div>
  );
};

export default FilterPLP;