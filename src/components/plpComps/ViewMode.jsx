import { LayoutGrid,Rows2  } from 'lucide-react';

const ViewMode = ({viewMode,setViewMode}) => {
    return(
       <div className="view-mode flex items-center justify-end mb-6">
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white shadow-sm">
          
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