// Filter chips component
const FilterChips = ({ label, items, isActive, onClick, formatter }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-700 min-w-[70px]">
        {label}:
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = isActive(item);
          const displayLabel = formatter ? formatter[item] : item;
          return (
            <button
              key={item}
              onClick={() => onClick(item)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                active
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white border-gray-300 hover:border-black hover:shadow-sm"
              }`}
            >
              {displayLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default FilterChips;