import { X } from "lucide-react";

const FilterPLP = ({ productCategory,activeFilter,setActiveFilter }) => {
  // const [activeFilter, setActiveFilter] = useState({
  //   category: [],
  //   price: null,
  //   rating: null,
  //   tags: [],
  // });

  const isAnyFilterSelected =
    activeFilter.category.length > 0 ||
    activeFilter.price !== null ||
    activeFilter.rating !== null ||
    activeFilter.tags.length > 0;

  const toggleCategory = (category) => {
    setActiveFilter((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  };

  let categories = [
    "Headphones",
    "Speakers",
    "Earphones",
    "Microphones",
    "Accessories",
  ];
  if (productCategory === "Gaming") {
    categories = [
      "Controllers",
      "Keyboards & Mice",
      "Headsets",
      "Monitors",
      "Accessories",
    ];
  }

  const activatePrice = (price) => {
    setActiveFilter((prev) => ({
      ...prev,
      price: prev.price === price ? null : price,
    }));
  };

  const prices = ["under100", "100to200", "200to300", "300above"];

  const ratings = ["5", "4", "3"];

  const handleRatingsClick = (rating) => {
    setActiveFilter((prev) => ({
      ...prev,
      rating: prev.rating === rating ? null : rating,
    }));
  };

  const specialFilters = ["Bestseller", "New", "Onsale", "Hot"];

  const toggleSpecialFilter = (specialFilter) => {
    setActiveFilter((prev) => ({
      ...prev,
      tags: prev.tags.includes(specialFilter)
        ? prev.tags.filter((t) => t !== specialFilter)
        : [...prev.tags, specialFilter],
    }));
  };

  const activeFiltersData = [
    ...activeFilter.category.map((c) => ({ type: "category", value: c })),
    ...(activeFilter.price
      ? [{ type: "price", value: activeFilter.price }]
      : []),
    ...(activeFilter.rating
      ? [{ type: "rating", value: activeFilter.rating }]
      : []),
    ...activeFilter.tags.map((c) => ({ type: "tag", value: c })),
  ];


  const handleActiveFilterClick = (filter, i) => {
    console.log("kk", filter, i);

    setActiveFilter((prev) => {
      switch (filter.type) {
        case "category":
          return {
            ...prev,
            category: prev.category.filter((c) => c !== filter.value),
          };
        case "price":
          return {
            ...prev,
            price: null,
          };
        case "rating":
          return {
            ...prev,
            rating: null,
          };
        case "tag":
          return {
            ...prev,
            tags: prev.tags.filter((f) => f !== filter.value),
          };
        default:
          return prev;
      }
    });
  };

  const handleClearAllClick = () => {
    setActiveFilter({
      category: [],
      price: null,
      rating: null,
      tags: [],
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="filter-chips-container space-y-4">
        <div className="category-filters flex flex-wrap gap-3">
          <h3>Category:</h3>
          <div className="category-chips flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeFilter.category.includes(category);

              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all
                        ${
                          isActive
                            ? "bg-gray-900 text-white border-black"
                            : "bg-white border-gray-300 hover:border-black"
                        }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="price-filters flex flex-wrap gap-3">
          <h3>Price:</h3>
          <div className="price-chips flex flex-wrap gap-2">
            {prices.map((price) => {
              const isActive = activeFilter.price === price;
              return (
                <button
                  key={price}
                  onClick={() => activatePrice(price)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all 
                    ${
                      isActive
                        ? "bg-gray-900 text-white border-black"
                        : "bg-white border-gray-300 hover:border-black"
                    }`}
                >
                  {price}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rating-filters flex flex-wrap gap-3">
          <h3>Rating:</h3>
          <div className="rating-chips flex flex-wrap gap-2">
            {ratings.map((rating) => {
              const isActive = activeFilter.rating === rating;
              return (
                <button
                  key={rating}
                  onClick={() => handleRatingsClick(rating)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all 
                    ${
                      isActive
                        ? "bg-gray-900 text-white border-black"
                        : "bg-white border-gray-300 hover:border-black"
                    }`}
                >
                  {rating}
                </button>
              );
            })}
          </div>
        </div>

        <div className="special-filters flex flex-wrap gap-3">
          <h3>Special:</h3>
          <div className="rating-chips flex flex-wrap gap-2">
            {specialFilters.map((specialFilter) => {
              const isActive = activeFilter.tags.includes(specialFilter);
              return (
                <button
                  key={specialFilter}
                  onClick={() => toggleSpecialFilter(specialFilter)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all
                    ${
                      isActive
                        ? "bg-gray-900 text-white border-black"
                        : "bg-white border-gray-300 hover:border-black"
                    }`}
                >
                  {specialFilter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {isAnyFilterSelected && (
        <div className="active-filters flex items-center gap-2 pt-2 border-t">
          <h3>Active Filters:</h3>
          <div className="active-filter-chips flex gap-2">
            {activeFiltersData.map((filter, i) => {
              return (
                <button
                  key={`${filter.type}-${i}`}
                  className="active-filter-chip inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-sm rounded-full"
                  onClick={() => handleActiveFilterClick(filter, i)}
                >
                  {filter.value} <X size={14} className="ml-1" />
                </button>
              );
            })}
            <button onClick={() => handleClearAllClick()}>Clear All</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterPLP;
