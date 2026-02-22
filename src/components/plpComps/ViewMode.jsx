import { LayoutGrid,Rows2, SlidersHorizontal  } from 'lucide-react';

const ViewMode = ({viewMode,setViewMode,setShowFilterPannel,resultCount}) => {
    return(
       <div className="view-mode flex items-center justify-between mb-6 md:justify-center">
             <button type="button"
              className='filterpanel md:hidden inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm'
              onClick={() => setShowFilterPannel(prev => !prev)}
             >
              Filters
              <SlidersHorizontal />
             </button>
             <span className="text-xs text-gray-500 md:text-sm ml-auto">
                       Showing {resultCount} products
               </span>

        <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white shadow-sm ml-auto">
          
          <button
            className={`p-2 rounded-md transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-black text-white shadow"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`}
            onClick={() => setViewMode("grid")}
            aria-label="Grid View"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>

          <button
            className={`p-2 rounded-md transition-all duration-200 ${
              viewMode === "list"
                ? "bg-black text-white shadow"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`}
            onClick={() => setViewMode("list")}
            aria-label="List View"
          >
            <Rows2 className="w-5 h-5" />
          </button>

        </div>
      </div>
    );
}
export default ViewMode;