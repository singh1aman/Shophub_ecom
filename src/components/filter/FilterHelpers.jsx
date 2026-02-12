import { priceLabels, ratingLabels } from "./FilterConstants";

// Filter toggle helpers
const toggleCategory = (setActiveFilter, category) => {
    setActiveFilter((prev) => ({
        ...prev,
        category: prev.category.includes(category)
            ? prev.category.filter((c) => c !== category)
            : [...prev.category, category],
    }));
};

const togglePrice = (setActiveFilter, price) => {
    setActiveFilter((prev) => ({
        ...prev,
        price: prev.price === price ? null : price,
    }));
};

const toggleRating = (setActiveFilter, rating) => {
    setActiveFilter((prev) => ({
        ...prev,
        rating: prev.rating === rating ? null : rating,
    }));
};

const toggleSpecialFilter = (setActiveFilter, specialFilter) => {
    setActiveFilter((prev) => ({
        ...prev,
        tags: prev.tags.includes(specialFilter)
            ? prev.tags.filter((t) => t !== specialFilter)
            : [...prev.tags, specialFilter],
    }));
};

// Filter data helpers
const buildActiveFiltersData = (activeFilter) => [
    ...activeFilter.category.map((c) => ({ type: "category", value: c })),
    ...(activeFilter.price ? [{ type: "price", value: activeFilter.price }] : []),
    ...(activeFilter.rating ? [{ type: "rating", value: activeFilter.rating }] : []),
    ...activeFilter.tags.map((c) => ({ type: "tag", value: c })),
];

const formatActiveFilterValue = (filter) => {
    switch (filter.type) {
        case 'price':
            return priceLabels[filter.value] || filter.value;
        case 'rating':
            return ratingLabels[filter.value] || filter.value;
        default:
            return filter.value;
    }
};

const handleActiveFilterClick = (setActiveFilter, filter) => {
    setActiveFilter((prev) => {
        switch (filter.type) {
            case "category":
                return {
                    ...prev,
                    category: prev.category.filter((c) => c !== filter.value),
                };
            case "price":
                return { ...prev, price: null };
            case "rating":
                return { ...prev, rating: null };
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

const handleClearAllClick = (setActiveFilter) => {
    setActiveFilter({
        category: [],
        price: null,
        rating: null,
        tags: [],
    });
};

export 
{ 
    toggleCategory,
    togglePrice,
    toggleRating,
    toggleSpecialFilter,
    buildActiveFiltersData,
    formatActiveFilterValue,
    handleActiveFilterClick,
    handleClearAllClick
}