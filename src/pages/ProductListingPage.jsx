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

  const productsInCategory = useMemo(() => 
    productsByCategory[productCategory] || []
  ,[productCategory])

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
  const className = viewMode === 'grid' ? 'products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                                           : 'products-container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6'
  

  return (
    <div className="CategoryPLP-wrapper px-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        {productCategory} Products
      </h1>
      <FilterPLP
        productCategory={productCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
   
      <ViewMode 
       viewMode={viewMode}
       setViewMode={setViewMode}
      />
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
  );
};
export default ProductListingPage;
