// // Filter chips component
// const FilterChips = ({ label, items, isActive, onClick, formatter }) => {
//   return (
//     <div className="flex flex-wrap items-center gap-3 flex-col">
//       <span className="text-sm font-medium text-gray-700 min-w-[70px] self-start">
//         {label}:
//       </span>
//       <div className="flex flex-wrap gap-2 flex-col self-start ml-3">
//         {items.map((item) => {
//           const active = isActive(item);
//           const displayLabel = formatter ? formatter[item] : item;
//           return (
//             <button
//               key={item}
//               onClick={() => onClick(item)}
//               className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
//                 active
//                   ? "bg-black text-white border-black shadow-sm"
//                   : "bg-white border-gray-300 hover:border-black hover:shadow-sm"
//               }`}
//             >
//               {displayLabel}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default FilterChips;

const FilterChips = ({ label, items, isActive, onClick, formatter }) => {
  return (
    <div className="py-4 border-b border-black/6">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-black/40 block mb-3 text-left">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5 ml-0">
        {items.map((item) => {
          const active = isActive(item);
          const displayLabel = formatter ? formatter[item] : item;
          return (
            <button
              key={item}
              onClick={() => onClick(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border text-left w-fit ${
                active
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-black/70 border-black/10 hover:border-black/30 hover:text-black"
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