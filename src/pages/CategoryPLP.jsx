import { Link } from "react-router-dom";
import FilterPLP from "../components/filter/FilterPLP";
import ProductCard from "../components/productCard/ProductCard";
import { Audio, Gaming, Wearable, Photography } from "../data/data";
import { useMemo, useState } from "react";

const CategoryPLP = ({ productCategory }) => {
    
    const [activeFilter, setActiveFilter] = useState({
    category: [],
    price: null,
    rating: null,
    tags: [],
  });

  const categoryMap = { Audio, Gaming, Wearable, Photography };
  const dataSetProduct = categoryMap[productCategory] || [];


 

  const filteredProducts = useMemo(() => {
    const hasAnyFilter =
      activeFilter.category.length > 0 ||
      activeFilter.price !== null ||
      activeFilter.rating !== null ||
      activeFilter.tags.length > 0;

    return dataSetProduct.filter((product) => {
      if (!hasAnyFilter) return true;

      if (
        activeFilter.category.length &&
        !activeFilter.category.includes(product.subcategory)
      ) return false;

      if (activeFilter.price) {
        if (activeFilter.price === "under100" && product.price > 100) return false;
        if (activeFilter.price === "100to200" && (product.price < 100 || product.price > 200)) return false;
        if (activeFilter.price === "200to300" && (product.price < 200 || product.price > 300)) return false;
        if (activeFilter.price === "300above" && product.price < 300) return false;
      }

      if (activeFilter.rating && product.rating < Number(activeFilter.rating)) {
        return false;
      }

      if (activeFilter.tags.length && !activeFilter.tags.includes(product.badge)) {
        return false;
      }

      return true;
    });
  }, [dataSetProduct, activeFilter]);

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
      <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard  product={product} viewMode={"grid"} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoryPLP;
