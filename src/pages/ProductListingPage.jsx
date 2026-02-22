import { Link } from "react-router-dom";
import FilterPLP from "../components/filter/FilterPLP";
import ProductCard from "../components/productCard/ProductCard";
import { Audio, Gaming, Wearable, Photography } from "../data/data";
import { useMemo, useState } from "react";
import EmptyFilterMsg from "@/components/filter/EmptyFilterMsg";
import ViewMode from "../components/plpComps/ViewMode";

// Helper functions ====
const productMatchesFilters = (product, filters) => {
  const { category, price, rating, tags } = filters;

  if (category.length && !category.includes(product.subcategory)) return false;

  if (price) {
    if (price === "under100" && product.price > 100) return false;
    if (price === "100to200" && (product.price < 100 || product.price > 200))
      return false;
    if (price === "200to300" && (product.price < 200 || product.price > 300))
      return false;
    if (price === "300above" && product.price < 300) return false;
  }

  if (rating && product.rating < Number(rating)) return false;

  if (tags.length && !tags.includes(product.badge)) return false;

  return true;
};
const productsByCategory = { Audio, Gaming, Wearable, Photography };


// Helper function end ===

const ProductListingPage = ({ productCategory }) => {
  const [activeFilter, setActiveFilter] = useState({
    category: [],
    price: null,
    rating: null,
    tags: [],
  });

const productsInCategory = useMemo(() => {
  return productCategory === "all"
    ? [...Audio,...Gaming,...Wearable,...Photography]
    : productsByCategory?.[productCategory] || [];
}, [productCategory]);

  
  const visibleProducts = useMemo(() => {
    const hasAnyFilter =
      activeFilter.category.length > 0 ||
      activeFilter.price !== null ||
      activeFilter.rating !== null ||
      activeFilter.tags.length > 0;

    if (!hasAnyFilter) return productsInCategory;

    return productsInCategory.filter((product) =>
      productMatchesFilters(product, activeFilter)
    );
  }, [productsInCategory, activeFilter]);

  const isEmptyResults = visibleProducts.length === 0;
  
  const [viewMode,setViewMode] = useState('grid');
  const className = viewMode === 'grid' ? 'products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[80%] max-md:w-[100%]'
                                           : 'products-container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 w-[80%]  max-md:w-[100%]'
  console.log('visibleProducts',visibleProducts.length);

  const categoryIntroMap = {
    Audio: "Immersive sound, tuned for clarity, depth, and everyday comfort.",
    Gaming: "High‑performance gear built for speed, control, and long sessions.",
    Wearable: "Smart essentials that blend comfort, tracking, and clean design.",
    Photography: "Capture sharp detail with gear made for creators on the go.",
  };

  const categoryIntro =
    categoryIntroMap[productCategory] ||
    "Discover standout picks designed for comfort, clarity, and everyday performance.";
  
  const [showFilterPanel,setShowFilterPannel] = useState(false)

  return (
    <div className="CategoryPLP-wrapper px-5 py-8">
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-orange-50 via-white to-white px-6 py-6 shadow-sm">
        <div className="pointer-events-none absolute -right-16 -top-12 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-20 h-40 w-40 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center rounded-full border border-orange-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700">
            Curated Collection
          </span>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            {productCategory} Products
          </h1>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            {categoryIntro}
          </p>
        </div>
      </div>
      {/* <FilterPLP
        productCategory={productCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      /> */}
   
      <ViewMode 
       viewMode={viewMode}
       setViewMode={setViewMode}
       showFilterPanel={showFilterPanel}
       setShowFilterPannel={setShowFilterPannel}
        resultCount={visibleProducts.length}

      />
      <div className="flex gap-4 ">
{/* <div className={`filter-pannel transition-all duration-300 ease-out 
  ${showFilterPanel 
  ? 'fixed z-[99] w-[100%] top-0 bottom-0 left-0 opacity-100 translate-x-0' 
  : 'fixed z-[99] w-[100%] top-0 bottom-0 left-0 opacity-0 translate-x-6'}
   md:static md:block opacity-100 translate-x-0 md:w-[20%]`}> */}
   <div className={`filter-pannel transition-all duration-300 ease-out
  fixed inset-0 z-[99] 
  ${showFilterPanel 
    ? "opacity-100 translate-x-0 pointer-events-auto" 
    : "opacity-0 translate-x-6 pointer-events-none"}
  md:static md:inset-auto md:block md:w-[20%] md:opacity-100 md:translate-x-0 md:pointer-events-auto`}
>


           <FilterPLP 
        productCategory={productCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setShowFilterPannel={setShowFilterPannel}
      /> 
        </div>
           
        <div className={className}>
        
        {isEmptyResults ? (
          <EmptyFilterMsg />
        ) : (
          visibleProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} viewMode={viewMode} />
            </Link>
          ))
        )}
        </div>
      </div>
    </div>
  );
};
export default ProductListingPage;
